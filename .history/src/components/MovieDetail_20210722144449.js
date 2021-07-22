import React, {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import Header from './Header';
import SideNav from './SideNav';

const MovieDetail = () => {

    const [indMovie, setIndMovie] = useState('');
    
    const title = useParams();
    const movieTitle = title;

    // let str = 'This is my name';
    movieTitle.split(' ');
    for(var i = 0; i < movieTitle.length -1; i++) {
        movieTitle[i] += "+";
    }

    console.log(movieTitle);

    useEffect(() => {
        fetch(`https://www.omdbapi.com/?t=${movieTitle}&apikey=2c0bfe2d`)
            .then(res => res.json())
            .then(result => {
                setIndMovie(result)
                console.log(result);
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
