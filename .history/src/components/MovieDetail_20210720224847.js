import React from 'react';
import Header from './Header';
import SideNav from './SideNav';
import {Link} from 'react-router-dom';

const MovieDetail = () => {
    

    return (
        <div>
            <div className="MovieDetail">
                <Header />
                <SideNav />
                <Link to='/'>Back to Home</Link>
                <h3>Movie Detail</h3>
            </div>
        </div>
    )
}

export default MovieDetail;
