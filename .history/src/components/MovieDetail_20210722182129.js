import React, {useContext, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import { movieContext } from '../contexts/MovieContext';
import Header from './Header';
import SideNav from './SideNav';
import {FaArrowLeft} from 'react-icons/fa';
import ReactLoading from 'react-loading';







const MovieDetail = () => {

    const {id} = useParams();    
    const {isSelected, showDetail, isPending} = useContext(movieContext);

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
                    {isPending && <div>
                        <ReactLoading className="loading" type={'bars'} color={'#fff'} />    
                    </div>}
                    {isSelected && 
                        <div className="detRow">
                            <div className="imgDiv">
                                <img src={movieImg} alt={movieTitle} />
                            </div>
                            <div className="details">
                                <h3 className="title">{movieTitle}</h3>
                                <p className="genre">Genre: {movieGenre}</p>
                                <p className="released">Released: {movieReleasedYear}</p>
                                <p className="year">Years active: {movieYears}</p>
                                <p className="rated">Rated: {movieRated}</p>
                                <p className="writer">Writer: {movieWriter}</p>
                                <p className="cast">Cast: <span>{movieActors}</span></p>
                                <p className="awards">Awards: {movieAwards}</p>
                                <div className="bottomSection">
                                    <p className="plot">{moviePlot}</p>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default MovieDetail;
