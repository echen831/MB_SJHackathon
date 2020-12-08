import React from 'react';

export const History = ({ data, isLoaded, error }) => {

    if (error) {
        return <div>Error: {error.message}</div>
    } else if (!isLoaded) {
        return <div>Loading...</div>
    } else {
        return (
            <div>
                Historic data...
                <ul>
                    {data.map(day => {
                        return (
                            <div>
                                <li>Date: {day.date}</li>
                                <li>Num Positive: {day.positive}</li>
                            </div>              
                        )
                    })}
    
                </ul>
            </div>
        )

    }
} 