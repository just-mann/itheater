import React from 'react';

const Search = () => {
    return (
        <div className="Search">
            <form >
                <input type="text" placeholder="Search a movie or show" />
                <input type="submit" value="Search" />
            </form>
        </div>
    )
}

export default Search;
