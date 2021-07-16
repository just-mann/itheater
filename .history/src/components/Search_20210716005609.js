import React, {useState, useContext} from 'react';
import {movieContext} from '../contexts/MovieContext';

const Search = () => {

    const {EnterShow} = useContext(movieContext)

    const [newSearch, setNewSearch] = useState('');

    const handleChange = (e) => {
        setNewSearch(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        EnterShow(newSearch);
        setNewSearch('');
    }

    return (
        <div className="Search">
            <form onSubmit={handleSubmit}>
                <input type='search' value={newSearch} placeholder='Search a movie' onChange={handleChange}/>
                <button>Search</button>
            </form>
        </div>
    )
}

export default Search;
