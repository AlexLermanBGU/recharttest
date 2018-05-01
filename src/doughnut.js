import React from 'react';

import {ResponsiveContainer, PieChart, Pie, Tooltip, LabelList, Cell, Legend } from 'recharts';

const colors = ['black', 'blue', 'red'];

const style = {
    fontFamily: 'san-serif',
    fontWeight: 100,
    color: 'yellow'
}


const Doughnut = ({ data }) => {
    return (
        <ResponsiveContainer width='80%' height='60%'>
        <PieChart>
            <Legend align='center'  />
            <Pie legendType='square' data={data[0]} dataKey='value'  cx={'20%'} cy='50%' innerRadius={40} outerRadius={90} fill='#8884d8'>
                <LabelList itemStyle={style} formatter={(value) => `${value}%`} dataKey="value" position='inside' />
                {data.map((entry, index) => <Cell key={index} fill={colors[index]} />)}
            </Pie>
            <Pie legendType='none' data={data[1]} dataKey='value' cx={'80%'} cy='50%' innerRadius={40} outerRadius={90} fill="#82ca9d">
                <LabelList style={style} formatter={(value) => `${value}%`} dataKey="value" position='inside' />
                {data.map((entry, index) => <Cell key={index} fill={colors[index]} />)}
            </Pie>
            <Tooltip cursor={{ stroke: 'red', strokeWidth: 5 }} />
        </PieChart>
        </ResponsiveContainer>
    );
}

export default Doughnut;