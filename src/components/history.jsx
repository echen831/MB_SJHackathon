import React from 'react';
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const Months = {
    '01': 'Jan',
    '02': 'Feb',
    '03': 'Mar',
    '04': 'Apr',
    '05': 'May',
    '06': 'Jun',
    '07': 'Jul',
    '08': 'Aug',
    '09': 'Sep',
    '10': 'Oct',
    '11': 'Nov',
    '12': 'Dec'
}

export const History = ({ data, isLoaded, error }) => {

    if (error) {
        return <div>Error: {error.message}</div>
    } else if (!isLoaded) {
        return <div>Loading...</div>
    } else {
        return (
            <div>
                <h1>Historic Data</h1>         
                <BarChart
                    width={1200}
                    height={500}
                    data={data}
                    margin={{
                        top: 20, right: 30, left: 20, bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip content={<CustomTooltip date={data.date}/>}/>
                    <Legend />
                    <Bar dataKey="positive" stackId="a" fill="#8884d8" />
                    <Bar dataKey="negative" stackId="a" fill="#82ca9d" />
                    <Bar dataKey="totalTestResults" stackId="a" fill="#82c8ca" />
                </BarChart>
            </div>
        )

    }
} 

const CustomTooltip = (props) => {
    if (props.active) {
        return (
            <div className="custom-tooltip">
                <p className="date">{setDate(props.payload[0].payload.date)}</p>
                <p>Total: {props.payload[0].payload.totalTestResults}</p>
                <p className="positive">Pos: {props.payload[0].payload.positive}</p>
                <p className="negative">Neg: {props.payload[0].payload.negative}</p>
            </div>
        );
    }

    return null;
};

const setDate = (date) => {
    date = date.toString();
    let y = date.slice(0,4);
    let m = date.slice(4,6);
    let d = date.slice(6);

    return `${Months[m]} ${d}, ${y}`
}