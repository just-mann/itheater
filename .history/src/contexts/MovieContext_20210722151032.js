import React, {useState, useEffect, createContext} from 'react';

export const movieContext = createContext();

const MovieContextProvider = (props) => {

    const [movie, setMovie] = useState('house');
    const [isPending, setIsPending] = useState(true);
    const [isSelected, setIsSelected] = useState('');

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
                })
                .catch(err => {
                    setIsPending(true)
                    console.log(err)
                })
        }, 1000)
    }, [movie])

    const showDetail = (id) => {
        fetch(`https://www.omdbapi.com/?apikey=2c0bfe2d&i=${id}`)
            .then(res => res.json())
            .then(result => {
                console.log(result);
                setIsSelected(result);
            })
            .catch(err => console.log(err))
        
    }

    return (
        <movieContext.Provider value={{movie, data, EnterShow, isPending, isSelected, showDetail}}>
            {data && props.children}
        </movieContext.Provider>
    )
}

export default MovieContextProvider;
