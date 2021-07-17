import React, {useContext} from 'react';
import { movieContext } from '../contexts/MovieContext';
import Header from './Header';
import SideNav from './SideNav';
import ReactLoading from 'react-loading';


const ShowList = () => {
    
    const {data, isPending, movie} = useContext(movieContext);
    
    // const [myData, setMyData] = useState({});

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
                                <a href={myData.imdbID} key={myData.imdbID} className="product">
                                    <img src={myData.Poster} alt={myData.Title} />
                                    <p className="prodTitle">{myData.Title}</p>
                                    <p className="type">{myData.Type}</p>
                                </a>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShowList;
