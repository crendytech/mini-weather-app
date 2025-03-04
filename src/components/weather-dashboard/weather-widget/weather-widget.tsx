import { useEffect } from "react";
import { WeatherData } from "./data/weather-data";
import { WeatherError } from "./error/weather-error";
import { useWeatherWidget } from "./hooks/use-weather-widget";
import { WeatherLoader } from "./widget-loader/weather-loader";
import { fetchWeather } from "@/redux/slices/weather-api-slice";
import { useAppDispatch } from "@/redux/utils";

export function WeatherWidget({
    city
}: { city: string }) {

    const dispatch = useAppDispatch();
    const { weatherData } = useWeatherWidget(city);

    useEffect(() => {
        if (!weatherData || !weatherData.data) {
            dispatch(fetchWeather(city));
        }
    }, []);

    if (weatherData?.loading) {
        return <WeatherLoader />
    }

    if (weatherData?.error) {
        return (
            <WeatherError error={weatherData.error} city={city} />
        );
    }

    if (weatherData?.data) {
        return (
            <WeatherData city={city} data={weatherData.data} />
        );
    }

    return <div>No weather data available for {city}</div>;

};