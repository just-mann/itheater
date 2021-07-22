import React from 'react';
import MovieContextProvider from './contexts/MovieContext';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Contact from './components/Contact';
import MovieDetail from './components/MovieDetail';
import ShowList from './components/ShowList';

const App = () => {
  return (
    <div className="App">
        <MovieContextProvider>
        <Router>
          <Switch>
            <Route exact path='/'>
              <ShowList />
            </Route>
            <Route exact path='/contact'>
              <Contact />
            </Route>
            <Route exact path='/detail/:id'>
              <MovieDetail />
            </Route>
          </Switch>
        </Router>
        </MovieContextProvider>
    </div>
  );
}

export default App;
