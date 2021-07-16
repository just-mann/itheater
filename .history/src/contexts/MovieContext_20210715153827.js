import React, { Component, createContext } from 'react';
import axios from 'axios';


// Create Context
export const MovieContext = createContext();

class MovieContextProvider extends Component {

    state = {
        myMovie: []
    }

    const apiUrl = `http://www.omdbapi.com/?i=tt3896198&apikey=2c0bfe2d`

    componentDidMount() {

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
