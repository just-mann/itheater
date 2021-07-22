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

    $(() => {
        $('.MovieDetail').css('background', `url(${isSelected.Poster}, no-repeat center center/cover)`)
    })

    return (
        <div>
            <div className="MovieDetail">
                <Header />
                <SideNav />
                <div className="detailDiv">
                    
                </div>
            </div>
        </div>
    )
}

export default MovieDetail;
