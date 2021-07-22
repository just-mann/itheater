import React, {useContext, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import { movieContext } from '../contexts/MovieContext';
import Header from './Header';
import SideNav from './SideNav';
import {FaArrowLeft} from 'react-icons/fa';







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
        <div className="MovieDetail">
            <Header />
            <SideNav />
            <div className="rightSide">
                <div className="topSection">
                    <Link to='/' className="backLink"><FaArrowLeft /> Back</Link>
                    <div className="detRow">
                        <div>
                            <img src={movieImg} alt={movieTitle} />
                        </div>
                        <div>
                            <h3>{movieTitle}</h3>
                            <p>Genre: {movieGenre}</p>
                            <p>Released: {movieReleasedYear}</p>
                            <p>Years active: {movieYears}</p>
                            <p>Rated: {movieRated}</p>
                            <p>Writer: {movieWriter}</p>
                        </div>
                    </div>
                </div>
                <div className="bottomSection">
                    <p>Cast: {movieActors}</p>
                    <p>Awards: {movieAwards}</p>
                    <p>{moviePlot}</p>
                </div>
            </div>
        </div>
    )
}

export default MovieDetail;
