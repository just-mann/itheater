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
                <NavLink to='/' isActive={(match, location) => {
                    if (!match) {
                    return false;
                    }
    // only consider an event active if its event id is an odd number
    const eventID = parseInt(match.params.eventID);
    return !isNaN(eventID) && eventID % 2 === 1;
  }} activeClassName="active">Home <BsArrowRight className="arrows"/></NavLink>
                <NavLink to="/contact" activeClassName="active">Contact <BsArrowRight className="arrows"/></NavLink>
            </div>
        </div>
    )
}

export default SideNav;
