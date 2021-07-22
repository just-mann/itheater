import React, {useEffect} from 'react';
import Header from './Header';
import SideNav from './SideNav';
import {Link, useParams} from 'react-router-dom';

const MovieDetail = () => {

    const id = useParams();
    const movieId = id;

    useEffect(() => {
        
    })

    return (
        <div>
            <div className="MovieDetail">
                <Header />
                <SideNav />
                <div className="rightSide">
                    <Link to='/'>Back to Home</Link>
                    <h3>Movie Detail</h3>
                </div>
            </div>
        </div>
    )
}

export default MovieDetail;
