import React, { Component } from 'react';

import MovieListItem from './MovieListItem';

class MoviesList extends Component {
  render() {
    const { movies, loading, error } = this.props;

    if (loading) {
      return <div>Loading...</div>;
    }
    if (error) {
      return <div>{error.message}</div>;
    }
    return (
      <div>
        {movies.map(movie => <MovieListItem key={movie.id} {...movie} />)}
      </div>
    );
  }
}

export default MoviesList;
