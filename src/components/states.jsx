import React, {useState, useEffect} from 'react';
import { STATES } from './states'

export const States = ({ setCurrState }) => {



    return (
        <div>
            <ul className='wrapper'>
                {STATES.map(state => (
                    <li key={state.abbreviation}
                        className='button'
                        onClick={() => setCurrState(state.abbreviation)}>
                        {state.abbreviation}</li>
                ))}
            </ul>
        </div>
    )
}