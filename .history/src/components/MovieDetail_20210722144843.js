import React from 'react';
import {Link} from 'react-router-dom';
import Header from './Header';
import SideNav from './SideNav';

const MovieDetail = () => {
    

    return (
        <div>
            <div className="MovieDetail">
                <Header />
                <SideNav />
                <div className="rightSide">
                    <Link to='/'>Back to Home</Link>
                </div>
            </div>
        </div>
    )
}

export default MovieDetail;
