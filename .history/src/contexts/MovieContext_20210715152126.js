import React, { useState, createContext } from 'react';


// Create Context
export const ShowContext = createContext();

const MovieContextProvider = () => {

    // Setting up the state
    const [myMovie, setMyMovie] = useState();

    return (
        <div>
            
        </div>
    )
}

export default MovieContextProvider;
