import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { WeatherResponse } from "../../shared/type";

interface CityWeather {
  data: WeatherResponse | null;
  loading: boolean;
  error: {
    message: string;
    showRetryButton: boolean;
    showDeleteButton: boolean;
  } | null;
}

interface WeatherState {
  cities: string[];
  pinnedCities: string[];
  weatherData: Record<string, CityWeather>;
}

const initialState: WeatherState = {
  cities: JSON.parse(localStorage.getItem('pinnedCities') || '[]'),
  pinnedCities: JSON.parse(localStorage.getItem('pinnedCities') || '[]'),
  weatherData: {},
};

export const fetchWeather = createAsyncThunk(
  "weather/fetchWeather",
  async (city: string) => {
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=640e30e15f2c4a64a0c181154250303&q=${city}&days=5&aqi=no&alerts=no`
    );
    const data = await response.json();
    if (data.error) {
      throw new Error(data.error.message);
    }
    return { city, weather: data };
  }
);

const weatherSlice = createSlice({
  name: "weather",
  initialState: initialState,
  reducers: {
    addCity: (state, action) => {
      if (!state.cities.includes(action.payload)) {
        state.cities.push(action.payload);
      }
    },
    removeCity: (state, action) => {
      state.cities = state.cities.filter((city) => city !== action.payload);
      delete state.weatherData[action.payload];
    },
    pinCity: (state, action) => {
      const city = action.payload;
      if (!state.pinnedCities.includes(city)) {
        state.pinnedCities.push(city);
        localStorage.setItem('pinnedCities', JSON.stringify(state.pinnedCities));
      }
    },
    unpinCity: (state, action) => {
      state.pinnedCities = state.pinnedCities.filter((city) => city !== action.payload);
      localStorage.setItem('pinnedCities', JSON.stringify(state.pinnedCities));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state, action) => {
        const city = action.meta.arg;
        if (!state.weatherData[city]) {
          state.weatherData[city] = { data: null, loading: true, error: null };
        } else {
          state.weatherData[city].loading = true;
        }
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        const { city, weather } = action.payload;
        state.weatherData[city] = { data: weather, loading: false, error: null };
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        const city = action.meta.arg;
        const errorMessage = action.error.message;

        if (errorMessage?.includes("No matching location found")) {
          state.weatherData[city] = {
            data: null,
            loading: false,
            error: {
              message: "No matching location found. Please check the city name.",
              showRetryButton: false,
              showDeleteButton: true,
            },
          };
        } else {
          state.weatherData[city] = {
            data: null,
            loading: false,
            error: {
              message: "Failed to fetch weather data. Please try again later.",
              showRetryButton: true,
              showDeleteButton: true,
            },
          };
        }
      });
  },
});

export const { addCity, removeCity, pinCity, unpinCity } = weatherSlice.actions;
export default weatherSlice.reducer;
