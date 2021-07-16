import React, {useState, useEffect, createContext} from 'react';

export const movieContext = createContext();

const MovieContextProvider = (props) => {

    const [movie, setMovie] = useState('Break');

    // Data to be displayed...
    const [data, setData] = useState([])
   
    // Function to enter movie or show name
    const EnterShow = (show) => {
        setMovie(show);
    }

    useEffect(() => {
        fetch(`http://www.omdbapi.com/?s=${movie}&apikey=2c0bfe2d`)
            .then(res => res.json())
            .then(data => {
                setData(data.Search)
                console.log(data.Search)
            })
            .catch(err => console.log(err))
    }, [movie])

    return (
        <movieContext.Provider value={{movie, data, EnterShow}}>
            {data && props.children}
        </movieContext.Provider>
    )
}

export default MovieContextProvider;
