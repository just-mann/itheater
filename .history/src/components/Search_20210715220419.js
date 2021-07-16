import React, {useState, useContext} from 'react';
import {movieContext} from '../contexts/MovieContext';

const Search = () => {

    const {EnterShow} = useContext(movieContext)

    const [newSearch, setNewSearch] = useState('');

    return (
        <div className="Search">
            <form onSubmit={handleSubmit}>
                <input type='search' value={newSearch} placeholder='Type a word' onChange={handleChange}/>
                <button>Search</button>
            </form>
        </div>
    )
}

export default Search;
