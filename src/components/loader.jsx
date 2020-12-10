import React from 'react';
import image from '../assets/loader.gif';

export const Loader = () => {
    return(
        <div className='loader'>
            <img src={image} alt=""/>
        </div>
    )
}