import React from 'react';

import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, LabelList } from 'recharts';

const ustyle = {
    listStyle: 'none',
}

const listyle = {
    display: 'inline-block',
    margin: '0 50px'
}

const legend = (data) => {
    return (
        <ul style={ustyle}>
            {data.map((entry, index) => <li key={index} style={listyle}> Deals: {entry['deals']} </li>)}
        </ul>
    );
}

const customTick = (value) => {
    
}

const bar = ({ data }) => {
    return (
        <ResponsiveContainer height='60%' width='80%'>
            <BarChart data={data} >
                <XAxis dataKey="year" tick={{stroke: 'red', strokeWidth: 2}}  />
                <YAxis />
                <Tooltip cursor={false} />
                <Bar barSize={50} dataKey="value" fill="red">
                    {/* <LabelList position='bottom' offset={30}/> */}
                </Bar>
            </BarChart>
        </ResponsiveContainer>
    )
}

export default bar;