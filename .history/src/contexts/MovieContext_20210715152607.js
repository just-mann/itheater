import React, { useState, createContext } from 'react';


// Create Context
export const MovieContext = createContext();

const MovieContextProvider = (props) => {

    // Setting up the state
    const [myMovie, setMyMovie] = useState();

    return (
        <MovieContext.Provider value={{...myMovie}}>
            {props.children}
        </MovieContext.Provider>
    )
}

export default MovieContextProvider;
