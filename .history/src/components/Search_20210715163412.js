import React, { Component } from 'react';
import { MovieContext } from '../contexts/MovieContext';

class Search extends Component {

    static contextType = MovieContext;

    render() {

        const {searchMovie} = this.context();
        
        return (
            <div className="Search">
                <form>
                    <input type="text" placeholder="Search a movie or show" />
                    <input type="submit" value="Search" />
                </form>
            </div>
        )
    }
}

export default Search;
