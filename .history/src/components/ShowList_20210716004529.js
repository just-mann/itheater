import React, {useContext} from 'react';
import { movieContext } from '../contexts/MovieContext';


const ShowList = (props) => {
    
    const {data} = useContext(movieContext);
    
    // const [myData, setMyData] = useState([]);

    return (
        <div className="ShowList">
            <h3>Movie Data (List)</h3>
            <div>
                {props.data.map(myData => {
                    return (
                        <div key={myData.imdbID}
                    )
                })}
            </div>
        </div>
    )
}

export default ShowList;
