import React from 'react';
import { ResponsiveContainer, LabelList, Legend, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

const HorizontalChart = ({ data }) => {
    return (
        <ResponsiveContainer height='60%' width='80%'>
            <BarChart data={data} layout='vertical'>
                <Tooltip cursor={false} />
                <Legend />
                <XAxis type="number" hide={true} />
                <YAxis dataKey={"year"} type="category" />
                <YAxis />
                <Bar barSize={50} dataKey={"support"} fill='red' background={{ fill: '#eee' }}>
                    <LabelList stroke={'#000'} formatter={(value) => `${value}%`} position={'center'} />
                </Bar>
                <Bar barSize={50} dataKey={"service"} fill='blue' background={{ fill: '#eee' }}>
                    <LabelList stroke={'#000'} formatter={(value) => `${value}%`} position={'center'} />
                </Bar>
            </BarChart>
        </ResponsiveContainer>

    )
}

export default HorizontalChart;