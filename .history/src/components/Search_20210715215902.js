import React, {useState, useContext} from 'react';
import {movieContext} from '../contexts/MovieContext';

const Search = () => {

    const {movie, EnterShow} = useContext(movieContext)

    const [newSearch, setNewSearch] = useState('');

    return (
        <div className="Search">
            
        </div>
    )
}

export default Search;
