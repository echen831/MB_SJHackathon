import React, { useEffect, useState } from 'react';

export const Map = ({ names }) => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://api.covidtracking.com/v1/states/info.json')
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
                <ul>
                    {items.map(state => {
                        return <li>{state.state}</li>
                    })}
                </ul>
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