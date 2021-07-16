import React from 'react';
import Header from './components/Header';
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
        <Header />
          <Switch>
            <Route path='/'>
              <ShowList />
            </Route>
            <Route path='/contact'>
              <Contact />
            </Route>
            <Route path='/:id'>
              <MovieDetail />
            </Route>
          </Switch>
        </Router>
      </MovieContextProvider>
    </div>
  );
}

export default App;
