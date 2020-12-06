import React from 'react';

export const Map = ({ names }) => {

    return (
        <div className='map-container'>
            Map goes here...
            <ul>
                {names.map((name, idx) => {
                    return(
                        <div key={idx}>
                            <li>{name.name}</li>
                            <li>{name.address}</li>
                        </div>
                    )
                })}
            </ul>
        </div>
    )
}