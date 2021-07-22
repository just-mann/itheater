import React, {useContext} from 'react';
import { movieContext } from '../contexts/MovieContext';
import Header from './Header';
import SideNav from './SideNav';
import ReactLoading from 'react-loading';
import {Link} from 'react-router-dom';


const ShowList = () => {
    
    const {data, isPending, movie} = useContext(movieContext);

    return (
        <div className="ShowList">
            <Header />
            <SideNav />
            <div className="rightSide">
                <div>
                    <h4 className="searched">You searched: <span>{movie}</span></h4>
                    <div className="productDiv">
                        {isPending && <div>
                            <ReactLoading className="loading" type={'bars'} color={'#fff'} />
                        </div>}
                        {data.map(myData => {
                            return(
                                <Link to={`/detail/${myData.imdbID}`} key={myData.imdbID} className="product">
                                    <img src={myData.Poster} alt={myData.Title} />
                                    <p className="prodTitle">{myData.Title}</p>
                                    <div>
                                        <p className="type">{myData.Type}</p>
                                        <p className="year">{myData.Year}</p>
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShowList;
