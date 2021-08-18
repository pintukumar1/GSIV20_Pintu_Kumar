import React, { useState, useEffect } from 'react';
import Moment from 'react-moment'; 
import { StarFill } from 'react-bootstrap-icons';

const MovieDetails = (props) => {
    const [posterPath, setPosterPath] = useState('')
    const [title, setTitle] = useState('');
    const [rating, setRating] = useState('');
    const [date, setDate] = useState('');
    const [Description,setDescription] = useState('');

    const MovieId = props.match.params.MovieId;    

    const getMovieRequest = async () => { 
        const url = `https://api.themoviedb.org/3/movie/${MovieId}?api_key=33fb4958c2325dbf8c28f8bcc27cd575&language=en-US`;
        const response = await fetch(url); 
        const responseJson = await response.json(); 
        setPosterPath(responseJson.results.poster_path) 
        setTitle(responseJson.results.title);
        setRating(responseJson.results.vote_average)
        setDate(responseJson.results.release_date)
        setDescription(responseJson.results.overview)
    };

    useEffect(() => {
        getMovieRequest();
    }, []); 

	return (
		<>
        { 
        <div>
            <div className='image-container justify-content-center'>
                     <img src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${posterPath}`} alt='movie'/>
             </div>
 
             <div className="movie-info">
                 <center><p className="movie-title font-weight-bold">{title}</p></center>
                 <p><span className="movie-date font-weight-bold">Release Date:</span> <Moment format="MMMM D, YYYY">{date}</Moment></p>
                 <p><span className="movie-rating font-weight-bold">Rating:</span> {rating} <span className="movie-rating font-weight-bold"><StarFill/></span></p>
                 <p><span className="movie-overview font-weight-bold">Description:</span> {Description}</p>
             </div>
        </div> 
        }
		</>
	);
};

export default MovieDetails