import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Homepage from './pages/Homepage';
import MovieDetails from './components/MovieDetails';

const App = () => {
	return (
    <Router>
    <>
      <Switch>
        <Route exact path='/react-movie-app' component={Homepage} />
        <Route path="/movie-details" component={MovieDetails} />
      </Switch>
    </>
  </Router>
	);
};

export default App;
