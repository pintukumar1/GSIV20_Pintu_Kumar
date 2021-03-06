import React, { useState, useEffect } from 'react';
import SearchList from "../components/SearchList";
import NavBar from '../components/NavBar'; 
import UpcomingMovies from '../components/UpcomingMovies'; 

const Homepage = () => {
    // initial state, set state of movies array 
    const [movies, setMovies] = useState([])
  
    // initial state, set state of search string 
    const [search, setSearch] = useState('');
  
    // calling API -- searchValue as a parameter 
    const searchMovie = async (searchTerm) => {
      
      const url = `https://api.themoviedb.org/3/search/movie?api_key=33fb4958c2325dbf8c28f8bcc27cd575&language=en-US&query=${searchTerm}&page=1&include_adult=false`;
    
      const response = await fetch(url); 
      const responseJson = await response.json(); 
  
      // API JSON -- results
      if (responseJson.results) {
        setMovies(responseJson.results); 
      }
    };
  
    // passes new searchValue to our getMovieRequest
    useEffect(() => {
      searchMovie(search); 
    }, [search]); 
      
      return (
      <>
        <div className="app-container">
          <NavBar search={search} setSearch={setSearch} />
        </div>
  
        <div className='container-fluid movie-app'>
  
          <div className="results">
            <h1>{movies.length ? `Viewing ${movies.length} results for "${search}"` : null }</h1>
          </div>
          
          <div className='row'>
            <SearchList movies={movies} />
          </div>
  
          <div className="title-one">
            <h1 className="Upcoming">Upcoming Movies</h1>
          </div>
  
          <div className='row d-flex mt-4 mb-4'>
            <UpcomingMovies/>
          </div>
        </div>
      </>
      );
  };
  
export default Homepage;
  