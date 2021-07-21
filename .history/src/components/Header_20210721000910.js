import React from 'react';
import Search from './Search';
import {Link} from 'react-router-dom';
import {RiMenu2Line} from 'react-icons/ri';

const Header = () => {
    return (
        <div className="Header">
            <div className="my_container">
                <Link to="/" className="dummyElement">
                    <RiMenu2Line />
                </Link>
                <Search />
            </div>
        </div>
    )
}

export default Header;
