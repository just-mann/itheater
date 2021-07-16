import React, {useState, useContext} from 'react';
import {MovieContext} from '../contexts/MovieContext';

const Search = () => {

    const {movie} = useContext(MovieContext)

    const [newSearch, setNewSearch] = useState('');

    return (
        <div className="Search">
            
        </div>
    )
}

export default Search;
