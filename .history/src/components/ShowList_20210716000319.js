import React, {useState, useContext, useEffect} from 'react';
import { movieContext } from '../contexts/MovieContext';


const ShowList = () => {
    
    const {data} = useContext(movieContext)
    
    const [showData, setShowData] = useState([]);

    useEffect(() => {
        setShowData(data)
        console.log(showData);
    }, [showData])

    return (
        <div className="ShowList">
            <h3>Movie Data (List)</h3>
            
        </div>
    )
}

export default ShowList;
