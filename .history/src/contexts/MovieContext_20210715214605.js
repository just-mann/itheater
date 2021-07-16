import React, {useState, useEffect, createContext} from 'react';

export const MovieContext = createContext();

const MovieContextProvider = () => {

    const [myMovie, setMyMovie] = useState('Shameless');


    // Data to be displayed...
    const [data, setData] = useState([])

    // Function to enter movie or show name
    const EnterShow = (show) => {
        setMyMovie(show);
    }

    useEffect(() => {
        
    }, [])

    return (
        <MovieContext.Provider value={{myMovie, data, EnterShow}}>
            
        </MovieContext.Provider>
    )
}

export default MovieContextProvider;

