import React, {useContext} from 'react';
import { movieContext } from '../contexts/MovieContext';
import Header from './Header';
import SideNav from './SideNav';
import ReactLoading from 'react-loading';


const ShowList = () => {
    
    const {data, isPending} = useContext(movieContext);
    
    // const [myData, setMyData] = useState({});

    return (
        <div className="ShowList">
            <Header />
            <SideNav />
            <div className="rightSide">
                <div>
                    <h3>Movie Data (List)</h3>
                    <div>
                        {isPending && <div>
                            <ReactLoading type={'bars'} color={'#E10202'} />
                        </div>}
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
            {/* <div className="clear"></div> */}
        </div>
    )
}

export default ShowList;
