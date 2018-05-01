import React from 'react';
import { ResponsiveContainer, LabelList, Label, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

const Combobar = ({ data }) => {
    return (
        <ResponsiveContainer height='60%' width='80%'>
            <BarChart data={data}>
                <XAxis dataKey="type" />
                <YAxis />
                <Tooltip cursor={false} />
                <Bar dataKey='2017' fill="#8884d8">
                    <LabelList formatter={(value) => 2017} position='top' />
                </Bar>
                <Bar dataKey="2018" fill="#82ca9d">
                    <LabelList formatter={(value) => 2018} position='top'/>
                </Bar>
            </BarChart>
        </ResponsiveContainer>
    );
}

export default Combobar;