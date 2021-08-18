import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from '@material-ui/icons/Search';
import { TextField } from '@material-ui/core';

const NavBar = (props) => {
	return (
        <>
        <nav className="navbar">
            <div className="container-fluid">
                <form className="d-flex input-group-lg">
                <TextField className="form-control me-2"
                type="search" 
                placeholder="Search" 
                InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                          <SearchIcon/>
                      </InputAdornment>
                    )
                  }} 
                value={props.value}
				onChange={(event) => props.setSearch(event.target.value)} />
                </form>
                <a href="/">
                  <HomeIcon />
                </a>
            </div>
        </nav>
      </>
	
	);
};

export default NavBar;


