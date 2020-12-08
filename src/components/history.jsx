import React from 'react';
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';



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
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="positive" stackId="a" fill="#8884d8" />
                    <Bar dataKey="negative" stackId="a" fill="#82ca9d" />
                </BarChart>
            </div>
        )

    }
} 