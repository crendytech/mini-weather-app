import { WeatherResponse } from "@/shared/type";
import { Column } from "@/components/ui";
import { getDayOfTheWeek } from "@/utils/format-date";
import { WeatherCondition } from "./shared/condition";

interface WeatherForecastProps {
    forecasts: WeatherResponse['forecast']['forecastday']
}

export function WeatherForecast({ forecasts }: WeatherForecastProps) {

    return (<Column className="gap-y-2">
        <h3 className="font-semibold text-sm pl-1">Forecast:</h3>
        <div className="grid grid-cols-5 gap-x-1 md:gap-x-2">
            {forecasts.map((forecastDay, index) => (
                <ForecastItem
                    key={index}
                    date={forecastDay.date}
                    conditionIcon={forecastDay.day.condition.icon}
                    conditionText={forecastDay.day.condition.text}
                    minTemp={forecastDay.day.mintemp_c}
                    maxTemp={forecastDay.day.maxtemp_c}
                />
            ))}
        </div>
    </Column>)
};

interface ForecastItemProps {
    date: string;
    conditionIcon: string;
    conditionText: string;
    minTemp: number;
    maxTemp: number;
}
function ForecastItem({
    date,
    conditionIcon,
    conditionText,
    minTemp,
    maxTemp,
}: ForecastItemProps) {

    return (<Column align="center" className="shadow shadow-sm rounded-lg px-2 md:px-1 py-2">
        <div>{getDayOfTheWeek(date)}</div>
        <WeatherCondition icon={conditionIcon} text={conditionText} />
        <div className="text-xs text-center">
            {minTemp}<sup>°C</sup> / {maxTemp}<sup>°C</sup>
        </div>
    </Column>)
}