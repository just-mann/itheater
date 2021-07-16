import React, {useContext} from 'react';
import { movieContext } from '../contexts/MovieContext';


const ShowList = () => {
    
    const {data} = useContext(movieContext)
    
    // const [showData, setShowData] = useState([]);

    // useEffect(() => {
    //     setShowData(data)
    // }, [data])

    return (
        <div className="ShowList">
            <h3>Movie Data (List)</h3>
            <div>
                {data.map(data => (
                    <div key={data.imdbID}>
                        <li>{data.Title}</li>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ShowList;
