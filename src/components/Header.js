import React from 'react';
import Search from './Search';
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
                <Search />
            </div>
        </div>
    )
}

export default Header;
