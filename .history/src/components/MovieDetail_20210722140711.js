import React, {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import Header from './Header';
import SideNav from './SideNav';

const MovieDetail = () => {

    const [indMovie, setIndMovie] = useState('');
    
    const id = useParams();
    const movieId = "House";

    useEffect(() => {
        fetch(`https://www.omdbapi.com/?t=${movieId}&plot=full&apikey=2c0bfe2d`)
            .then(res => res.json())
            .then(result => {
                setIndMovie(result)
                // console.log(result);
            })
            .catch(err => console.log(err))
    })

    return (
        <div>
            <div className="MovieDetail">
                <Header />
                <SideNav />
                <div className="rightSide">
                    <Link to='/'>Back to Home</Link>
                    <h1>{indMovie.Title}</h1>
                </div>
            </div>
        </div>
    )
}

export default MovieDetail;
