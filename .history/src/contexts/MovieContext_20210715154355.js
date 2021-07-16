import React, { Component, createContext } from 'react';
import axios from 'axios';


// Create Context
export const MovieContext = createContext();

class MovieContextProvider extends Component {
    
    state = {
        moviename: '',
        myMovie: []
    }
    
    let apiUrl = `http://www.omdbapi.com/?t=${this.state.movieName}&apikey=2c0bfe2d`;

    componentDidMount() {
        axios.get(`${apiUrl}`)
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.log(err))
    }

    render() {
        return (
        <MovieContext.Provider value={{...this.state}}>
            {this.props.children}
        </MovieContext.Provider>
        )
    }
}

export default MovieContextProvider
