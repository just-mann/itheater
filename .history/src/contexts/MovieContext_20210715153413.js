import React, { Component, createContext } from 'react';


// Create Context
export const MovieContext = createContext();

class MovieContextProvider extends Component {

    state = {
        myMovie: []
    }

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
