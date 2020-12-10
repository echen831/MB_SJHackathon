import React, { useEffect, useState } from 'react';
import { STATES_HASH } from './states.js';

export const Today = ({currState}) => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [date, setDate] = useState(new Date());

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
                <h2>Today's Data: {`${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()}`}</h2>
                <h3>State: {STATES_HASH[currState]}</h3>
                {items.map(state => {
                    const display = currState !== state.state ? 'hide' : 'state-wrapper'
                    return (
                        <div className={display} key={state.state}>
                            <li>Total Tests</li>
                            <li>{state.totalTestResults}</li>
                            <li>Positive</li>
                            <li>{state.positive}</li>
                            <li>Negative</li>
                            <li>{state.negative}</li>
                            <li>Deaths</li>
                            <li>{state.death}</li>
                        </div>

                    )
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