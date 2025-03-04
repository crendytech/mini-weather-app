import { Row } from "@/components/ui";
import { ReactNode } from "react";


interface WeatherDetailProps {
    label: ReactNode;
    value: ReactNode;
}

export const WeatherDetail: React.FC<WeatherDetailProps> = ({ label, value }) => (
    <Row align="center" className="gap-x-2">
        {label && <span className="w-[20px]">{label}</span>} <span>{value}</span>
    </Row>
);