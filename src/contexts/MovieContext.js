import React, {useState, useEffect, createContext} from 'react';

export const movieContext = createContext();

const MovieContextProvider = (props) => {

    const [movie, setMovie] = useState('house');
    const [isPending, setIsPending] = useState(true);

    // Data to be displayed...
    const [data, setData] = useState([])
   
    // Function to enter movie or show name
    const EnterShow = (show) => {
        setMovie(show);
    }

    useEffect(() => {
        setTimeout(() => {
            fetch(`https://www.omdbapi.com/?s=${movie}&apikey=2c0bfe2d`)
                .then(res => res.json())
                .then(data => {
                    setData(data.Search)
                    setIsPending(false)
                    console.log(data.Search)
                })
                .catch(err => {
                    setIsPending(true)
                    console.log(err)
                })
        }, 1000)
    }, [movie])

    return (
        <movieContext.Provider value={{movie, data, EnterShow, isPending}}>
            {data && props.children}
        </movieContext.Provider>
    )
}

export default MovieContextProvider;
