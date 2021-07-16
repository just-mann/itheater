import React, {useState, createContext} from 'react';

export const MovieContext = createContext();

const MovieContextProvider = () => {

    const [myMovie, setMyMovie] = useState('Shameless');

    const EnterShow = (show) => {
        setMyMovie(show);
    }

    return (
        <div>
            
        </div>
    )
}

export default MovieContextProvider;

