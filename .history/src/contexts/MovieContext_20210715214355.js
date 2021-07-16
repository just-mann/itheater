import React, {useState, createContext} from 'react';

export const MovieContext = createContext();

const MovieContextProvider = () => {

    const [myMovie, setMyMovie] = useState('Shameless');

    const [data, setData] = useState([])

    const EnterShow = (show) => {
        setMyMovie(show);
    }

    return (
        <MovieContext.Provider value={{myMovie, data, EnterShow}}>
            
        </MovieContext.Provider>
    )
}

export default MovieContextProvider;

