import React, {useState, useContext, useEffect} from 'react';
import { useHistory } from 'react-router';
import {movieContext} from '../contexts/MovieContext';
import {FaSearch} from 'react-icons/fa';
// import { NavLink } from 'react-router-dom';

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
    

    const handleSubmit = (e) => {
        e.preventDefault();
        EnterShow(newSearch);
        setNewSearch('');
        history.push('/')
    }

    return (
        <div className="search">
            <form onSubmit={handleSubmit}>
                <span>
                    <input type='search' value={newSearch} placeholder='Search a movie or show' onChange={handleChange}/>
                    <button><FaSearch className="searchIcon"/></button>
                </span>
            </form>
        </div>
    )
}

export default Search;
