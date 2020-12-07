import React, {useState, useEffect} from 'react';
import { STATES } from './states'

const COLORS = ['red', 'blue', 'green', 'orange', 'purple', 'gold', 'indigo', 'brown']

export const States = ({ setCurrState }) => {



    return (
        <div>
            <ul className='button-wrapper'>
                {STATES.map((state, idx) => (
                    <li key={state.abbreviation}
                        style={{color: 'white', backgroundColor: COLORS[idx % COLORS.length]}}
                        className='button'
                        onClick={() => setCurrState(state.abbreviation)}>
                        {state.abbreviation}</li>
                ))}
            </ul>
        </div>
    )
}