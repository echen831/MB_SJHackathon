import React from 'react';

export const Header = () => {

    return (
        // <div className='header'>
        //     <h1>Covid Daily Data</h1>
        // </div>
        <nav className='navbar'>
            <h1 className='navbar-title'>Covid Daily Data</h1>
            <ul className='navbar-list'>
                <li><a href="#">Map</a></li>
                <li><a href="#">States</a></li>
                <li><a class="button" href="#">About</a></li>
            </ul>
        </nav>
    )
}