'use client'
import { ResponsiveBump } from '@nivo/bump'
import { data } from '../../app/data/general_data';
const MyBump = ({ data }: any) => {
    return <ResponsiveBump
        data={data}
        colors={{ scheme: 'spectral' }}
        lineWidth={3}
        activeLineWidth={6}
        inactiveLineWidth={3}
        inactiveOpacity={0.15}
        pointSize={10}
        activePointSize={16}
        inactivePointSize={0}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={3}
        activePointBorderWidth={3}
        pointBorderColor={{ from: 'serie.color' }}
        axisLeft={{ legend: 'ranking', legendOffset: -40 }}
        margin={{ top: 40, right: 100, bottom: 40, left: 60 }}
    />
}

export default function General() {
    return <div className='w-full h-[400px]'>
        <MyBump data={data} />
    </div>;
}
