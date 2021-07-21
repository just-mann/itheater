import React from 'react';
import Search from './Search';
import {Link} from 'react-router-dom';
import {CgMenuLeft} from 'react-icons/cg';

const Header = () => {
    return (
        <div className="Header">
            <div className="my_container">
                <Link to="/" className="dummyElement">
                    <CgMenuLeft />
                </Link>
                <Search />
            </div>
        </div>
    )
}

export default Header;
