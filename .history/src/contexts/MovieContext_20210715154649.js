import React, { Component, createContext } from 'react';


// Create Context
export const MovieContext = createContext();

class MovieContextProvider extends Component {
    
    state = {
        moviename: 'Shameless',
        myMovie: []
    }
    
    // let apiUrl = ``;

    componentDidMount() {
        fetch(`http://www.omdbapi.com/?t=${this.state.movieName}&apikey=2c0bfe2d`)
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(error => console.log(error))
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
