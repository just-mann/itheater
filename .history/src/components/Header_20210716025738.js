import React from 'react';
import {Link} from 'react-router-dom';
import Search from './Search';

const Header = () => {
    return (
        <div className="Header">
            <Link to='/'>iTheater</Link>
            <Search />
        </div>
    )
}

export default Header;
