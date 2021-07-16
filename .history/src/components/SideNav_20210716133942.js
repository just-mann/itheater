import React from 'react';
import {Link} from 'react-router-dom';

const SideNav = () => {
    return (
        <div className="SideNav">
            <Link className="app_Logo" to='/'>iTheater</Link>
            <div className="links">
                <Link to='/'>Home</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </div>
    )
}

export default SideNav;
