import React, { Component, createContext } from 'react';


// Create Context
export const MovieContext = createContext();

class MovieContextProvider extends Component {
    
    constructor(props) {
      super(props)
    
      this.state = {
        movieName: 'shameless',
        myMovieList: []
      }
    }
    

    componentDidMount() {
        console.log(this.state.movieName)
        fetch(`http://www.omdbapi.com/?t=${this.state.movieName}&apikey=2c0bfe2d`)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    myMovieList: data
                })
            })
            .catch(error => console.log(error))
            console.log(this.state.myMovieList)
    }

    
    render() {
        
        return (
        <MovieContext.Provider value={{...this.state, searchMovie: this.searchMovie}}>
            {this.props.children}
        </MovieContext.Provider>
        )
    }
}

export default MovieContextProvider
