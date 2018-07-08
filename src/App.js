import React, { Component } from 'react';

import Header from './components/Header';
import MoviesLoader from './components/MoviesLoader';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <MoviesLoader />
      </div>
    );
  }
}

export default App;
