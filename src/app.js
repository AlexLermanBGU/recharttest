import React from 'react';
import * as data from './data';
import Charts from './charts';

const style = {
    display: 'flex',
    justifyContent: 'center'
}

const App = (props) => {
    return (
        <div>
            <div> hello </div>
            <div style={style}> 
            
                <Charts data={data} />
            
            </div>
        </div>
    );
}

export default App;