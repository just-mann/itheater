import React from 'react';
import Header from './components/Header';
import MovieContextProvider from './contexts/MovieContext';

const App = () => {
  return (
    <div className="App">
      <MovieContextProvider>
        <Header />
      </MovieContextProvider>
    </div>
  );
}

export default App;
