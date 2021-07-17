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
                    <h4>Movie Data (List)</h4>
                    {isPending && <div>
                        <ReactLoading className="loading" type={'spin'} color={'#fff'} />
                    </div>}
                    <h4>You searched: <span>{movie}</span></h4>
                    <div className="productDiv">
                        {data.map(myData => {
                            return(
                                <div key={myData.imdbID} className="product">
                                    <img src={myData.Poster} alt={myData.Title} />
                                    <p>{myData.Title}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShowList;
