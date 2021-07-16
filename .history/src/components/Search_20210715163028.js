import React, { Component } from 'react';

class Search extends Component {
    render() {
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
