import React from 'react';
import Search from './Search';
import {NavLink} from 'react-router-dom';
import {RiMenu2Line} from 'react-icons/ri';

const Header = () => {
    return (
        <div className="header">
            <div className="my_container">
                <NavLink className="app_Logo" to='/'>iTheater</NavLink>
                <RiMenu2Line className="hamburger"/>
                <Search />
            </div>
        </div>
    )
}

export default Header;
