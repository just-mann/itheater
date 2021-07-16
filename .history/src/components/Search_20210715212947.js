import React, { Component } from 'react';
import { MovieContext } from '../contexts/MovieContext';

class Search extends Component {

    static contextType = MovieContext;
    
    state = {
        newSearch: ''
    }
    

    render() {

        const {searchMovie} = this.context;

        
        
        return (
            <div className="Search">
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Search a movie or show" id="searchInput" onChange={handleChange} />
                    <input type="submit" value="Search" />
                </form>
            </div>
        )
    }
}

export default Search;
