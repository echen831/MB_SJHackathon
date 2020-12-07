import React, { useEffect, useState } from 'react';
import { STATES_HASH } from './states.js';

export const Map = ({currState}) => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch(`https://api.covidtracking.com/v1/states/current.json`)
            .then(res => res.json())
            .then((result) => {
                setIsLoaded(true);
                setItems(result);
            },
            (error) => {
                setIsLoaded(true);
                setError(error)
            }
        )
    }, [])

    if (error) {
        return (
            <div>Error: {error.message}</div>
        )
    } else if (!isLoaded) {
        return <div>Loading...</div>
    } else {
        return (
            <div>
                {items.map(state => {
                    const display = currState !== state.state ? 'hide' : ''
                    return <ul>
                        <div className={display} key={state.state}>
                            <li>State: {STATES_HASH[state.state]}</li>
                            <li>Total Tests: {state.totalTestResults}</li>
                            <li>Positive: {state.positive}</li>
                            <li>Negative: {state.negative}</li>
                        </div>
                    </ul>
                })}
            </div>
        )
    }
    // return (
    //     <div className='map-container'>
    //         {/* Map goes here...
    //         <ul>
    //             {names.map((name, idx) => {
    //                 return(
    //                     <div key={idx}>
    //                         <li>{name.name}</li>
    //                         <li>{name.address}</li>
    //                     </div>
    //                 )
    //             })}
    //         </ul> */}
    //     </div>
    // )
}