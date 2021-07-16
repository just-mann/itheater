import React, {useState, useContext} from 'react';
import { useHistory } from 'react-router';
import {movieContext} from '../contexts/MovieContext';

const Search = () => {

    const history = useHistory();

    const {EnterShow} = useContext(movieContext)

    const [newSearch, setNewSearch] = useState('');

    const handleChange = (e) => {
        setNewSearch(e.target.value);
    }

    // const reDirect = () => {
    //     let path = '/';
    //     let history = useHistory();
    //     history.push(path);
    // }

    const handleSubmit = (e) => {
        e.preventDefault();
        EnterShow(newSearch);
        setNewSearch('');
        history.pushState('/')
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
