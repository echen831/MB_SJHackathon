import React from 'react';

export const Map = ({ names }) => {

    return (
        <div className='map-container'>
            Map goes here...
            <ul>
                {names.map(name => {
                    return(
                        <div>
                            <li>{name.name}</li>
                        </div>
                    )
                })}
            </ul>
        </div>
    )
}