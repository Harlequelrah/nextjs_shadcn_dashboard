'use client';
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { ResponsiveTimeRange } from '@nivo/calendar'
import { data } from '../../app/data/calendar_data';
const MyTimeRange = ({ data}: any) => {
    return (
        <ResponsiveTimeRange
            data={data}
            // from="2018-04-01"
            // to="2018-08-12"
            from="2025-01-01"
            to="2025-12-31"
            emptyColor="#eeeeee"
            colors={["#61cdbb", "#97e3d5", "#61cdbb", "e8c1a0", "#f47560"]}
            margin={{ top: 40, right: 40, bottom: 100, left: 40 }}
            dayBorderWidth={2}
            dayBorderColor="#ffffff"
            legends={[
                {
                    anchor: 'bottom-right',
                    direction: 'row',
                    itemCount: 4,
                    itemWidth: 42,
                    itemHeight: 36,
                    itemsSpacing: 14,
                    itemDirection: 'right-to-left',
                    translateX: -60,
                    translateY: -60,
                    symbolSize: 20
                }
            ]}
        />);
}
export default function Calendar() {

    function generateDateForYear2025() {
        const data = [];
        const startDate = new Date("2025-01-01");
        const endDate = new Date("2025-12-31");
        while (startDate <= endDate) {
            const value = Math.floor(Math.random()*301)
            const formattedDate = startDate.toISOString().split('T')[0];
            data.push({
                "value": value,
                "day": formattedDate
            })
            startDate.setDate(startDate.getDate() + 1);
        }
        return data;
    }

    function generateDateArray(year: number, numberOfObjects: number, minValue: number, maxValue: number) {
        const dataArray = [];
        for (let i = 1; i <= numberOfObjects; i++) {
            const randomValue = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
            const month = String(Math.floor(Math.random() * 12) + 1).padStart(2, '0');
            const day = String(Math.floor(Math.random() * 28) + 1).padStart(2, '0');
            const date = `${year}-${month}-${day}`;
            dataArray.push({ "value": randomValue, "day": date });
        }
        return dataArray;

    }
    // const data = generateDateArray(2018, 50, 20, 100);
    const dataArray = generateDateForYear2025();
    return <Card>
        <CardHeader>
            <CardTitle>Calendar</CardTitle>
            <CardDescription>These are the number of  this year</CardDescription>
        </CardHeader>
        <CardContent className="h-[240px]  w-full">
            <MyTimeRange data={dataArray} />
        </CardContent>
    </Card>;
}
