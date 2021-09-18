import React from 'react';
import Search from './Search';
// import {BsArrowRight} from 'react-icons/bs';
// import {VscChromeClose} from 'react-icons/vsc';
import {NavLink} from 'react-router-dom';
import {RiMenu2Line} from 'react-icons/ri';
import $ from 'jquery';

const Header = () => {
    $(() => {
        const hamburger = $('#hamburger');
        const closeBtn = $('#closeBtn');
        const sideNav = $('#sideNav');

        
        const showSideNav = () => {
            sideNav.show();
        }
        
        const hideSideNav = () => {
            sideNav.hide();
        }

        hamburger.on('click', showSideNav);
        closeBtn.on('click', hideSideNav);
    });

    return (
        <div className="header">
            <div className="my_container">
                <NavLink className="app_Logo" to='/'>iTheater</NavLink>
                <RiMenu2Line className="hamburger" id="hamburger" />
                <div className="links">
                    <NavLink to='/' activeClassName="active">Home</NavLink>
                    <NavLink to="/contact" activeClassName="active">Contact</NavLink>
                </div>
                <Search />
            </div>
        </div>
    )
}

export default Header;
