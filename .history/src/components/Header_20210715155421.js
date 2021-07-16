import React from 'react';
import {Link} from 'react-router-dom';
import Search from './Search';

const Header = () => {
    return (
        <div className="Header">
            <Link to='/'>iTheater</Link>
            <Search />
            <div className="links">
                <Link to="/contact">Contact</Link>
            </div>
        </div>
    )
}

export default Header;
