import React from 'react';
import Search from './Search';
import {Link} from 'react-router-dom';
import {RiMenu2Line} from 'react-icons/ri';

const Header = () => {
    return (
        <div className="Header">
            <div className="respSideNav">
                <h3>iTheater</h3>
                <div className="resp_links">
                    <Link to='/'>Home</Link>
                    <Link to="/contact">Contact</Link>
                </div>
            </div>
            <div className="my_container">
                <span className="dummyElement">
                    <RiMenu2Line />
                </span>
                <Search />
            </div>
        </div>
    )
}

export default Header;
