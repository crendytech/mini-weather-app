import { RootState } from "@/redux/store";
import { Column } from "../ui";
import { AddCity } from "./add-city/add-city";
import { WeatherWidget } from "./weather-widget/weather-widget";
import { useSelector } from "react-redux";

export function WeatherDashboard() {

    const { cities } = useSelector((state: RootState) => state.weather);
    return (
        <Column>
            <h1 className="text-2xl font-bold text-center text-white mb-4">Weather Dashboard</h1>
            <AddCity />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 md:gap-x-4 md:gap-y-0">
                {cities.map((city) => {
                    return (
                        <WeatherWidget city={city} key={city} />)
                })}
            </div>
        </Column>
    )
}