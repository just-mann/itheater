import React, {useContext} from 'react';
import ReactLoading from 'react-loading';
import { movieContext } from '../contexts/MovieContext';

const MovieDetail = () => {

    const {isPending} = useContext(movieContext)
    return (
        <div className="MovieDetail">
            {isPending && <div>
                <ReactLoading className="loading" type={'bars'} color={'#fff'} />
            </div>}
            <h3>Movie Detail</h3>
        </div>
    )
}

export default MovieDetail;
