import React from 'react';
import {Link} from 'react-router-dom';
import Search from './Search';

const Header = () => {
    return (
        <div className="Header">
            <div className="my_container">
                <div className="dummyElement"></div>
                <Search />
            </div>
        </div>
    )
}

export default Header;
