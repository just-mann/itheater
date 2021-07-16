import React from 'react';
// import {Link} from 'react-router-dom';
import Search from './Search';

const Header = () => {
    return (
        <div className="Header">
            <Search />
            <div className="currTime"></div>
        </div>
    )
}

export default Header;
