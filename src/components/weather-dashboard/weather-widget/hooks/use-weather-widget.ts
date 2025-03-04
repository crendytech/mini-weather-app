import { fetchWeather, pinCity, removeCity, unpinCity } from "@/redux/slices/weather-api-slice";
import { RootState } from "@/redux/store";
import { useAppDispatch } from "@/redux/utils";
import { useSelector } from "react-redux";

export function useWeatherWidget(city: string) {
    const dispatch = useAppDispatch();
    const weatherData = useSelector((state: RootState) => state.weather.weatherData[city]);
    const pinnedCities = useSelector((state: RootState) => state.weather.pinnedCities);
    const isPinned = pinnedCities.includes(city);

    const handleRemoveCity = () => {
        dispatch(removeCity(city));
    };

    const refetch = () => {
        dispatch(fetchWeather(city));
    }

    const handlePinToggle = () => {
        if (isPinned) {
            dispatch(unpinCity(city));
        } else {
            dispatch(pinCity(city));
        }
    };

    return { refetch, handlePinToggle, handleRemoveCity, isPinned, weatherData }
}