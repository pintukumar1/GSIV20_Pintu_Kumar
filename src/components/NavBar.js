import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from '@material-ui/icons/Search';

const NavBar = (props) => {
	return (
        <>
        <nav className="navbar">
            <div className="container-fluid">
                <form className="d-flex input-group-lg">
                <input className="form-control me-2" 
                InputProps={{
                    endAdornment: (
                      <InputAdornment>
                        <IconButton>
                          <SearchIcon />
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                type="search" 
                placeholder="Find a movie" 
                aria-label="Search"
                value={props.value}
				onChange={(event) => props.setSearch(event.target.value)}></input>
                </form>
                <a href="/react-movie-app">
                  <HomeIcon />
                </a>
            </div>
        </nav>
      </>
	
	);
};

export default NavBar;


