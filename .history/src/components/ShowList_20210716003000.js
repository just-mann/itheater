import React, {useContext, useState, useEffect} from 'react';
import { movieContext } from '../contexts/MovieContext';


const ShowList = () => {
    
    const {data} = useContext(movieContext);
    
    const [showData, setShowData] = useState([]);

    useEffect(() => {
        setShowData(data);
        console.log(data);
    }, [data]);

    return (
        <div className="ShowList">
            <h3>Movie Data (List)</h3>
            <div>
                {showData.map(myData => {
                    return(
                        <div key={myData.imdbID}>
                            <li>{myData.Title}</li>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ShowList;
