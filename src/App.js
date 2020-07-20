import React from 'react';
import './App.css';
import SearchMovies from './components/SearchMovies/SearchMovies';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <h1 className="title">React Movie Search</h1>
          <SearchMovies />
        </div>
      </div>
    );
  }
}

export default App;
