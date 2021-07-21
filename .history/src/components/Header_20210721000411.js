import React from 'react';
import Search from './Search';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <div className="Header">
            <div className="my_container">
                <Link to="/" className="dummyElement">iTheater</Link>
                <Search />
            </div>
        </div>
    )
}

export default Header;
