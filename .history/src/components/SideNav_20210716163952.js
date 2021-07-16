import React from 'react';
import {Link} from 'react-router-dom';
import {BsArrowRight} from 'react-icons/bs';

const SideNav = () => {
    return (
        <div className="SideNav">
            <div className="logoDiv">
                <Link className="app_Logo" to='/'>iTheater</Link>
            </div>
            <div className="links">
                <Link to='/'>Home <BsArrowRight className="arrows"/></Link>
                <Link to="/contact">Contact <BsArrowRight className="arrows"/></Link>
            </div>
        </div>
    )
}

export default SideNav;
