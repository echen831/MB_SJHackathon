import React from 'react';

export const Header = () => {

    return (
        // <div className='header'>
        //     <h1>Covid Daily Data</h1>
        // </div>
        <nav className='navbar'>
            <h1 className='navbar-title'>Covid Daily Data</h1>
            <ul className='navbar-list'>
                <li><a href="#">Curriculum</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a class="button" href="#">Contact</a></li>
            </ul>
        </nav>
    )
}