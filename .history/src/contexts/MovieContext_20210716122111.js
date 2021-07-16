import React, {useState, useEffect, createContext} from 'react';

export const movieContext = createContext();

const MovieContextProvider = (props) => {

    const [movie, setMovie] = useState('Smooth');
    const [isPending, setIsPending] = useState(true);

    // Data to be displayed...
    const [data, setData] = useState([])
   
    // Function to enter movie or show name
    const EnterShow = (show) => {
        setMovie(show);
    }

    useEffect(() => {
        setTimeout(() => {
            fetch(`http://www.omdbapi.com/?s=${movie}&apikey=2c0bfe2d`)
            .then(res => res.json())
            .then(data => {
                setData(data.Search)
                setIsPending(false)
                console.log(data.Search)
            })
            .catch(err => {
                console.log(err)
                // setIsPending(true)
            })
        }, 2000)
    }, [movie])

    return (
        <movieContext.Provider value={{movie, data, EnterShow, isLoading}}>
            {data && props.children}
        </movieContext.Provider>
    )
}

export default MovieContextProvider;
