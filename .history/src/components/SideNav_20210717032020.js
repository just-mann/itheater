import React from 'react';
import {NavLink} from 'react-router-dom';
import {BsArrowRight} from 'react-icons/bs';

const SideNav = () => {
    return (
        <div className="SideNav">
            <div className="logoDiv">
                <NavLink className="app_Logo" to='/'>iTheater</NavLink>
            </div>
            <div className="links">
                <NavLink to='/'>Home <BsArrowRight className="arrows"/></NavLink>
                <NavLink to="/contact">Contact <BsArrowRight className="arrows"/></NavLink>
            </div>
        </div>
    )
}

export default SideNav;
