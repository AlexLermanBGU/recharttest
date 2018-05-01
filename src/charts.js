import React from 'react';
import Bar from './bar';
import Doughnut from './doughnut';
import Combobar from './combobar';
import HorizontalChart from './horizontal';
import * as data from './data';

const style = {
    display: 'inline-flex',
    flexWrap: 'wrap',
    width: 1200,
}

const box = {
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '650px',
}

const Charts = (props) => {


    return (

        <div style={style}>
            <div style={box}><Bar data={data.bar} /></div>
            <div style={box}><Doughnut data={[data.pie2017, data.pie2018]} /></div>
            <div style={box}><Combobar data={data.combobar} /></div>
            <div style={box}><HorizontalChart data={data.horizontal} /> </div>
        </div>
    );
};

export default Charts;