import React, {useContext} from 'react';
import { movieContext } from '../contexts/MovieContext';


const ShowList = () => {
    
    const {data} = useContext(movieContext);
    // console.log(data)
    
    // const [showData, setShowData] = useState([]);

    // useEffect(() => {
    //     setShowData(data)
    // }, [data])

    return (
        <div className="ShowList">
            <h3>Movie Data (List)</h3>
            <div>
                
            </div>
        </div>
    )
}

export default ShowList;
