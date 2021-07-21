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
                <NavLink to='/'  activeClassName="active">Home <BsArrowRight className="arrows"/></NavLink>
                <NavLink to="/contact" activeClassName="active">Contact <BsArrowRight className="arrows"/></NavLink>
            </div>
            
            <div className="respSideNav">
                <h3>iTheater</h3>
                <div className="side_links">
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                </div>
            </div>
        </div>
    )
}

export default SideNav;
