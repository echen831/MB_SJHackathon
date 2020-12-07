import React, {useState, useEffect} from 'react';

export const States = ({states, setCurrState}) => {



    return (
        <div>
            <ul>
                {states.map(state => (
                    <button key={state} onClick={() => setCurrState(state)}>{state}</button>
                ))}
            </ul>
        </div>
    )
}