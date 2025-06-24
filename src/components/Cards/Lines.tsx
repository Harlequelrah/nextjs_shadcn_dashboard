'use client';
import { ResponsiveLine } from '@nivo/line';
import { data } from '../../app/data/line_data';
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

const MyLine = ({ data }: any) => {
    return <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 160, bottom: 50, left: 40 }}
        yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
        curve="basis"
        axisBottom={null}
        axisLeft={null}
        enableGridX={false}
        lineWidth={5}
        enablePoints={false}
        enablePointLabel={true}
        enableTouchCrosshair={true}
        useMesh={true}
    />

}
export default function Lines() {
    return <Card>
        <CardHeader>
            <CardTitle>Lines</CardTitle>
            <CardDescription>These are the stats of  this year</CardDescription>
        </CardHeader>
        <CardContent className="h-[260px] w-[500px]">
            <MyLine data={data} />
        </CardContent>
    </Card>;
}
