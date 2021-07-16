import React, { useState, createContext } from 'react';


// Create Context
export const MovieContext = createContext();

const MovieContextProvider = () => {

    // Setting up the state
    const [myMovie, setMyMovie] = useState();

    return (
        <MovieContext.Provider value={{...myMovie}}>
            {children}
        </MovieContext.Provider>
    )
}

export default MovieContextProvider;
