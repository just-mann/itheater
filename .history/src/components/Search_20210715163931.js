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

    handleChange = (e) => {
        this.setState({
            newSearch: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.prevendDefault();
        this.handleChange();
        
    }
    

    render() {

        const {searchMovie} = this.context();
        
        return (
            <div className="Search">
                <form>
                    <input type="text" placeholder="Search a movie or show" onChange={this.handleChange} />
                    <input type="submit" value="Search" />
                </form>
            </div>
        )
    }
}

export default Search;
