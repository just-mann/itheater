import React, {useState, useContext, useEffect} from 'react';
import { movieContext } from '../contexts/MovieContext';


const ShowList = () => {
    
    const {data} = useContext(movieContext)
    
    const [showData, setShowData] = useState([]);

    useEffect(() => {
        setShowData(data)
    })

    return (
        <div className="ShowList">
            
        </div>
    )
}

export default ShowList;
