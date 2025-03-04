import { Column } from "@/components/ui";

interface WeatherConditionProps {
    icon: string;
    text: string;
}

export const WeatherCondition: React.FC<WeatherConditionProps> = ({ icon, text }) => (
    <Column align="center">
        <img src={icon} alt={text} className="w-12 h-12" />
        <div className="text-sm text-center text-gray-600">{text}</div>
    </Column>
);