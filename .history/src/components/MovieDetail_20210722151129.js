import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import { movieContext } from '../contexts/MovieContext';
import Header from './Header';
import SideNav from './SideNav';

const MovieDetail = () => {
    
    const {isSelected, showDetail} = useContext(movieContext);

    return (
        <div>
            <div className="MovieDetail">
                <Header />
                <SideNav />
                <div className="rightSide">
                    <Link to='/'>Back to Home</Link>
                </div>
            </div>
        </div>
    )
}

export default MovieDetail;
