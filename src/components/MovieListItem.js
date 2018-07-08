import React, { Component } from 'react';

class MovieListItem extends Component {
  render() {
    const { movie } = this.props;
    return (
      <div>
        <h2>{movie.title}</h2>
        <div>
          <img src={`//image.tmdb.org/t/p/w300${movie.backdrop_path}`} />
        </div>
        <p>{movie.overview}</p>
      </div>
    );
  }
}

export default MovieListItem;
