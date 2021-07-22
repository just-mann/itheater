import React, {useEffect} from 'react';
import Header from './Header';
import SideNav from './SideNav';
import {Link, useParams} from 'react-router-dom';

const MovieDetail = () => {

    const id = useParams();
    const movieId = id;

    useEffect(() => {
        fetch(`https://www.omdbapi.com/?t=shameless&plot=full&apikey=2c0bfe2d`)
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
