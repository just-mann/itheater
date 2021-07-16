import React, {useState, createContext} from 'react';

export const MovieContext = createContext();

const MovieContextProvider = () => {

    const [myMovie, setMyMovie] = useState('Shameless');
    return (
        <div>
            
        </div>
    )
}

export default MovieContextProvider;

