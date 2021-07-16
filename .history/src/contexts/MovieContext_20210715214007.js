import React, {useState, createContext} from 'react';

export const MovieContext = createContext();

const MovieContextProvider = () => {

    const [myMovie, setMyMovie] = useState()
    return (
        <div>
            
        </div>
    )
}

export default MovieContextProvider;

