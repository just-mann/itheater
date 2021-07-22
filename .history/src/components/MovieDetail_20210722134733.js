import React, {useEffect} from 'react';
import Header from './Header';
import SideNav from './SideNav';
import {Link, useParams} from 'react-router-dom';

const MovieDetail = () => {

    const title = useParams();
    const movieTitle = title;

    useEffect(() => {
        fetch("https://www.omdbapi.com/&plot=full&apikey=2c0bfe2d?t=" + movieTitle)
            .then(res => res.json())
            .then(result => console.log(result))
            .catch(err => console.log(err))
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
