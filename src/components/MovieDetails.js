import React, { useState, useEffect } from 'react';
import Moment from 'react-moment'; 
import { StarFill } from 'react-bootstrap-icons';

const MovieDetails = (props) => {
    const [movie, setMovie] = useState('');

    const MovieId = props.match.params.MovieId;    

    const getMovieRequest = async () => { 
        const url = `https://api.themoviedb.org/3/movie/${MovieId}?api_key=33fb4958c2325dbf8c28f8bcc27cd575&language=en-US`;
        const response = await fetch(url); 
        const responseJson = await response.json(); 
        setMovie(responseJson.results);
    };

    useEffect(() => {
        getMovieRequest();
    }, []); 

	return (
		<>
        {
            <div >
            
            <div className='image-container d-flex justify-content-center'>
                    <img src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`} alt='movie'/>
            </div>

            <div className="movie-info">
                <center><p className="movie-title font-weight-bold">{movie.title}</p></center>
                <p><span className="movie-date font-weight-bold">Release Date:</span> <Moment format="MMMM D, YYYY">{movie.release_date}</Moment></p>
                <p><span className="movie-rating font-weight-bold">Rating:</span> {movie.vote_average} <span className="movie-rating font-weight-bold"><StarFill/></span></p>
                <p><span className="movie-overview font-weight-bold">Overview:</span> {movie.overview}</p>
            </div>

        </div> 
    }
		</>
	);
};

export default MovieDetails