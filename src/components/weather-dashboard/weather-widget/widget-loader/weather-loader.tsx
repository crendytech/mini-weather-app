import { cn } from "@/lib/utils"
import { Column, Row } from "@/components/ui"

function LoaderItem({ className }: { className: string }) {
    return (<Column className={cn('w-[200px] bg-gray-200 h-5 rounded-md', className)}></Column>)
}

export function WeatherLoader() {
    return (
        <Column className="h-[524px] p-4 bg-white shadow-md rounded-lg gap-y-6 animate-pulse" justify="center">
            <Column className="w-full gap-y-4" align="center">
                <LoaderItem className="w-[200px]"></LoaderItem>
                <LoaderItem className="w-[60px] h-[60px]" />
                <LoaderItem className="w-[200px]" />
                <Row justify="between" className="w-4/5 mx-auto">
                    <LoaderItem className="w-[100px]" />
                    <LoaderItem className="w-[100px]" />
                </Row>
            </Column>
            <div className="grid grid-cols-5 gap-x-4">
                {Array(5).fill(null).map((_, index) => (
                    <Column className="gap-y-2" align="center">
                        <LoaderItem className="w-[60px]"></LoaderItem>
                        <LoaderItem className="w-[40px] h-[35px]" />
                        <LoaderItem className="w-[60px]" />
                    </Column>))}
            </div>
        </Column>
    )
}
