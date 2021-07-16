import React, {useState, useEffect, createContext} from 'react';

export const MovieContext = createContext();

const MovieContextProvider = (props) => {

    const [movie, setMovie] = useState('Shameless');

    // Data to be displayed...
    const [data, setData] = useState([])

    // APIURI
    // const apiUrl = 'http://www.omdbapi.com/?i=tt3896198&apikey=2c0bfe2d';

    // Function to enter movie or show name
    const EnterShow = (show) => {
        setMovie(show);
    }

    useEffect(() => {
        fetch(`http://www.omdbapi.com/?t=${movie}&apikey=2c0bfe2d`)
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.log(err))
    }, [movie])

    return (
        <MovieContext.Provider value={{myMovie, data, EnterShow}}>
            {data && props.children}
        </MovieContext.Provider>
    )
}

export default MovieContextProvider;
