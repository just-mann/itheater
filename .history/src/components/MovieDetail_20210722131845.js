import React, {useEffect} from 'react';
import Header from './Header';
import SideNav from './SideNav';
import {Link, useParams} from 'react-router-dom';

const MovieDetail = () => {

    const name = useParams();
    const movieName = name;

    useEffect(() => {
        fetch(`https://www.omdbapi.com/?t=${movieName}&plot=full&apikey=2c0bfe2d`)
            .then(res => res.json())
            .then(result => console.log(result.Search))
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
