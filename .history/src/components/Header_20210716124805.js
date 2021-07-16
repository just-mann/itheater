import React from 'react';
import {Link} from 'react-router-dom';
import Search from './Search';

const Header = () => {
    return (
        <div className="Header">
            <Link className="app_Logo" to='/'>iTheater</Link>
            <Search />
        </div>
    )
}

export default Header;
