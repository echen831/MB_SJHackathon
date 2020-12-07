import React from 'react';

export const History = ({ data }) => {

    return (
        <div>
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