import { Button, Column, Row } from "@/components/ui";
import { CurrentWeather } from "./current";
import { WeatherResponse } from "@/shared/type";
import { WeatherForecast } from "./forecasts";
import { useWeatherWidget } from "../hooks/use-weather-widget";

interface WeatherDataProps {
    data: WeatherResponse,
    city: string
}
export function WeatherData({ data, city }: WeatherDataProps) {
    const { handleRemoveCity, handlePinToggle, isPinned } = useWeatherWidget(city);
    return (
        <Column align="center" className="p-3 md:p-6 bg-white shadow-md rounded-lg gap-y-6 w-full">
            <Column className="w-full">
                <h2 className="text-lg font-bold mb-2 text-center">{`${data.location.name}, ${data.location.country}`}</h2>
                <CurrentWeather weather={data.current} />
            </Column>

            <WeatherForecast forecasts={data.forecast.forecastday} />

            <div className="grid grid-cols-2 w-full gap-x-4">
                <Button variant={"outline"} onClick={handlePinToggle} className="shrink-0 w-full">
                    {isPinned ? "Unpin" : "Pin"}
                </Button>
                <Button
                    onClick={handleRemoveCity}
                    className="shrink-0 w-full"
                    variant={'destructive'}
                >
                    Remove
                </Button>
            </div>
        </Column>
    )
}