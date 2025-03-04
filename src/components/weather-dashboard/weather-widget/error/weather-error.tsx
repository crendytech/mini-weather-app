import { Button, Column } from "@/components/ui";
import { useWeatherWidget } from "../hooks/use-weather-widget";
interface WeatherErrorProps {
    error: {
        message: string,
        showDeleteButton: boolean
        showRetryButton: boolean
    },
    city: string
}
export function WeatherError({ error, city }: WeatherErrorProps) {
    const { handleRemoveCity, refetch } = useWeatherWidget(city);
    return (
        <Column justify="center" align="center" className="p-4 bg-white shadow-md rounded-lg gap-y-4">
            <h3 className="text-md font-semibold mb-2">An error occured!</h3>
            <p className="text-center">{error.message}</p>
            <p className="text-center text-sm text grey-700">
                City: {city}</p>
            {error.showDeleteButton && (
                <Button variant={'destructive'} className="w-full" onClick={handleRemoveCity}>Remove</Button>
            )}
            {error.showRetryButton && (
                <Button variant={'secondary'} className="w-full" onClick={refetch}>Retry</Button>
            )}
        </Column>
    );
}