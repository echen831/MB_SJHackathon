import React from 'react';
import {
    AreaChart, Area, BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

import { Loader } from './loader'


export const History = ({ data, isLoaded, error }) => {

    if (error) {
        return <div>Error: {error.message}</div>
    } else if (!isLoaded) {
        return <div className='history-wrapper'>
            <h3>Historic Data</h3> 
            <h4>Loading...</h4>
        </div>
    } else {
        return (
            <div className='history-wrapper'>
                <h3>Historic Data</h3>    
                <AreaChart
                    width={450}
                    height={225}
                    data={data}
                    margin={{
                        top: 20, right: 30, left: 20, bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="4 4" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip content={<CustomTooltip date={data.date}/>}/>
                    <Legend />
                    <Area type="monotone" dataKey="positive" stackId="1" stroke="#8884d8" fill="#8884d8" />
                    <Area type="monotone" dataKey="negative" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                </AreaChart>
            </div>
        )

    }
} 

const CustomTooltip = (props) => {
    if (props.active) {
        return (
            <div className="custom-tooltip">
                <li className="date">{props.payload[0].payload.date}</li>
                <li>Total: {props.payload[0].payload.totalTestResults}</li>
                <li className="positive">Pos: {props.payload[0].payload.positive}</li>
                <li className="negative">Neg: {props.payload[0].payload.negative}</li>
            </div>
        );
    }

    return null;
};
