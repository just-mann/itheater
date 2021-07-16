import React from 'react';
import {Link} from 'react-router-dom';
import Search from './Search';

const Header = () => {
    return (
        <div className="Header">
            <div className="my_container">
            <Link className="app_Logo" to='/'>iTheater</Link>
                <Search />
            </div>
        </div>
    )
}

export default Header;
