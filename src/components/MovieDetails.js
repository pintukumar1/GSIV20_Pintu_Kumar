import React, { useState, useEffect } from 'react';
import Moment from 'react-moment'; 
import { StarFill } from 'react-bootstrap-icons';
import HomeIcon from '@material-ui/icons/Home';

const MovieDetails = (props) => {
    const [movie, setMovie] = useState('');
    const [cast, setCast] = useState('');
    const [crew, setCrew] = useState('');
    
    const MovieId = props.match.params.MovieId;    

    const getMovieRequest = async () => { 
        const url = `https://api.themoviedb.org/3/movie/${MovieId}?api_key=33fb4958c2325dbf8c28f8bcc27cd575&language=en-US`;
        const response = await fetch(url); 
        const responseJson = await response.json(); 
        setMovie(responseJson);
    };

    useEffect(() => {
        getMovieRequest();
    }, []); 

    const getCastAndCrew = async() => {
        const url = `https://api.themoviedb.org/3/movie/${MovieId}/credits?api_key=33fb4958c2325dbf8c28f8bcc27cd575&language=en-US`;
        const response = await fetch(url);
        const responseJson = await response.json();
        setCast(responseJson.cast);
        setCrew(responseJson.crew)
    
    }

    useEffect(() => {
        getCastAndCrew();
    }, []);

	return (
		<>
        
        <div className="Content">
            <h1 className="ml-4 movie-title">Movie Details</h1>
            <a className="mr-4" href="/">
                <HomeIcon />
            </a> 
        </div>

        {
         <div className="Content">
            <div className="img">
                    <img src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`} alt='movie'/>
            </div>

            <div>
                <p className="movie-title font-weight-bold">{movie.title}</p>
                <p><span className="movie-date font-weight-bold">Release Date:</span> <Moment format="MMMM D, YYYY">{movie.release_date}</Moment></p>
                <p><span className="movie-rating font-weight-bold">Rating:</span> {movie.vote_average} <span className="movie-rating font-weight-bold"><StarFill/></span></p>
                <p><span className="movie-date font-weight-bold">Length: </span>{movie.runtime} minutes</p>
                <p><span className="movie-overview font-weight-bold">Description:</span> {movie.overview}</p>
                
            <div className="CastAndCrew">
                <div className="Cast">
                <h1>Cast</h1>
                {
                 cast && cast.map((cast => (
                     <div className="CastAndCrew">
                         <p key={cast.id}><span className="font-weight-bold">{cast.name}</span></p> 
                         <img src={`https://image.tmdb.org//t/p/w300_and_h300_bestv2/${cast.profile_path}`} alt="No Image Found"/>   
                     </div>
                )))  
                }
                </div>
                <div>
                   <h1>Director</h1>
               {
                crew && crew.filter(function(el) {
                    return el.job === "Director" ;
                }).map(crew => (
                    <h2 key={crew.credit_id}><span className="font-weight-bold">{crew.name}</span></h2> 
                ))
               }
                </div>
            </div>
                
            </div>
         </div> 
    }
    
		</>
	);
};

export default MovieDetails