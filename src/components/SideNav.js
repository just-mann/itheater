import React from 'react';
import {NavLink} from 'react-router-dom';
import {BsArrowRight} from 'react-icons/bs';
import {VscChromeClose} from 'react-icons/vsc';

const SideNav = () => {
    return (
        <div className="sideNav" id="sideNav">
            <VscChromeClose className="closeNav" id="closeBtn" />
            <div className="links">
                <NavLink to='/' activeClassName="active">Home <BsArrowRight className="arrows"/></NavLink>
                <NavLink to="/contact" activeClassName="active">Contact <BsArrowRight className="arrows"/></NavLink>
            </div>
        </div>
    )
}

export default SideNav;
