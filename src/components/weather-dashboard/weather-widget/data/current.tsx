import { Column, Row } from "@/components/ui";
import { WeatherCondition } from "./shared/condition";
import { WeatherDetail } from "./shared/details";
import { WeatherResponse } from "@/shared/type";
import { HumidityIcon } from "@/components/ui/svgs/humidity-icon";
import { WindyIcon } from "@/components/ui/svgs/windy-icon";

interface CurrentWeatherProps {
    weather: WeatherResponse['current'],
}

export function CurrentWeather({ weather }: CurrentWeatherProps) {
    return (
        <Column className="w-full gap-y-4" align="center">
            <Column align="center" className="text-center">
                <WeatherCondition icon={weather.condition.icon} text={weather.condition.text} />
                <WeatherDetail label={''} value={<span className="text-[40px] font-bold">{weather.temp_c}<sup>°C</sup></span>} />
            </Column>
            <Row justify="between" align="center" className="w-[80%] mx-auto">
                <WeatherDetail label={<HumidityIcon />} value={`${weather.humidity}%`} />
                <WeatherDetail label={<WindyIcon />} value={`${weather.wind_kph}km/h`} />
            </Row>
        </Column>
    )
}