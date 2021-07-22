import React, {useEffect, useContext} from 'react';
import Header from './Header';
import SideNav from './SideNav';
import {Link, useParams} from 'react-router-dom';
import { movieContext } from '../contexts/MovieContext';

const MovieDetail = () => {


    const {data} = useContext(movieContext);

    // const id = useParams();
    // const movieId = id;

    useEffect(() => {
        fetch(`https://www.omdbapi.com/?i=${data.imdbID}&plot=full&apikey=2c0bfe2d`)
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
