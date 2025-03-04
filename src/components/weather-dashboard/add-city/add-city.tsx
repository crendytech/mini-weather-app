import { Button } from "@/components/ui";
import { Input } from "@/components/ui/input";
import { addCity } from "@/redux/slices/weather-api-slice";
import { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";


export function AddCity() {
    const [city, setCity] = useState("");

    const dispatch = useDispatch();

    const handleAddCity = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();

        if (city.trim() !== "") {
            dispatch(addCity(city));
            setCity("");
        }
    };

    const handleCityChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setCity(e.target.value);
    };

    return (
        <form className="flex bg-white max-w-[600px] mx-auto rounded-lg p-4 justify-right mb-8 gap-x-2" onSubmit={handleAddCity}>
            <Input type="text" value={city}
                onChange={handleCityChange}
                className="w-full md:w-[450px]"
                placeholder="Enter city name" />
            <Button type="submit">
                Add City
            </Button>
        </form>)
}