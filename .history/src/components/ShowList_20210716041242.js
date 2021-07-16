import React, {useContext} from 'react';
import { movieContext } from '../contexts/MovieContext';
import Header from './Header';
import SideNav from './SideNav';


const ShowList = () => {
    
    const {data} = useContext(movieContext);
    
    // const [myData, setMyData] = useState({});

    return (
        <div className="ShowList">
            <Header />
            <SideNav />
            <div className="rightSide">
                <div>
                    <h3>Movie Data (List)</h3>
                    <div>
                        {data.map(myData => {
                            return(
                                <div key={myData.imdbID} className="showCard">
                                    <img src={myData.Poster} alt={myData.Title} />
                                    <div>
                                        <h3>{myData.Title}</h3>
                                    </div>
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
