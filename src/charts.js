import React from 'react';
import {BarChart, Bar, PieChart, Pie,XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

const style = {
    display: 'inline-flex',
    flexWrap: 'wrap',
    width: 1200,
}

const box = {
    width: 600,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
}

const Charts = (props) => {


    return (

        <div style={style}>
            <div style={box}> 
                <BarChart width={450} height={300} data={props.data.bar} >
                    <XAxis dataKey="name"/>
                    <YAxis/>
                    <Tooltip />
                    <Bar barSize={100} dataKey="value" fill="#8884d8" />
                </BarChart>
            </div>
            <div style={box}> 
                <PieChart width={800} height={400}>
                    <Pie data={props.data.pie2017} cx={200} cy={200} innerRadius={40} outerRadius={80} fill={['#8884d8', '#eee', 'eee']} />
                    <Pie data={props.data.pie2018} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#82ca9d"/>
                    <Tooltip/>
                </PieChart>
            </div>
        </div>
    );
};

export default Charts;