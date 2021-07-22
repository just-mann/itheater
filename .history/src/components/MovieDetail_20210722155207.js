import React, {useContext, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import { movieContext } from '../contexts/MovieContext';
import Header from './Header';
import SideNav from './SideNav';
import $ from 'jquery';

const MovieDetail = () => {

    const {id} = useParams();    
    const {isSelected, showDetail} = useContext(movieContext);

    useEffect(() => {
        showDetail(id);
    })

    const movieTitle = `${isSelected.Title}`;
    const movieImg = `${isSelected.Poster}`;
    const movieYears = `${isSelected.Year}`;
    const movieGenre = `${isSelected.Genre}`;
    const moviePlot = `${isSelected.Plot}`;
    const movieReleasedYear = `${isSelected.Released}`;
    const movieRated = `${isSelected.Rated}`;
    const movieAwards  = `${isSelected.Awards}`;
    const movieActors  = `${isSelected.Actors}`;
    const movieWriter  = `${isSelected.Writer}`;
        

    return (
        <div>
            <div className="MovieDetail">
                <Header />
                <SideNav />
                <div className="rightSide">
                    <div>
                        <div>
                            <img src={movieImg} alt={movieTitle} />
                        </div>
                        <div>
                            <p>Genre: {movieGenre}</p>
                            <p>Released: {movieReleasedYear}</p>
                            <p>{movieYears}</p>
                            <p>{movieRated}</p>
                            <p></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieDetail;
