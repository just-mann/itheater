import React, { Component } from 'react';
import { MovieContext } from '../contexts/MovieContext';

class Search extends Component {

    static contextType = MovieContext;

    constructor(props) {
      super(props)
    
      this.state = {
        newSearch: ''
      }
    }
    

    render() {

        const {searchMovie} = this.context;

        const handleChange = (e) => {
            this.setState({
                newSearch: e.target.value
            })
        }
    
        const handleSubmit = (e) => {
            e.preventDefault();
            const inputValue = document.querySelector('.searchInput');
            if (inputValue.value === "") {
                alert('Cannot add an empty todo');
            } else {
                searchMovie(this.state.myTodo);
            }
            const form = document.querySelector('form');
            form.reset();
        }
        
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
