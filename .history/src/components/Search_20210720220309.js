import React, {useState, useContext, useEffect} from 'react';
import { useHistory } from 'react-router';
import {movieContext} from '../contexts/MovieContext';

const Search = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    })

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
        history.push('/')
    }

    return (
        <div className="Search">
            <form onSubmit={handleSubmit}>
                <span>
                    <input type='search' value={newSearch} placeholder='Search a movie or show' onChange={handleChange}/>
                </span>
                <button>Search</button>
            </form>
        </div>
    )
}

export default Search;
