import React, { Component } from 'react';

class MovieListItem extends Component {
  render() {
    const { title, backdrop_path, overview } = this.props;
    return (
      <div>
        <h2>{title}</h2>
        <div>
          <img src={`//image.tmdb.org/t/p/w300${backdrop_path}`} />
        </div>
        <p>{overview}</p>
      </div>
    );
  }
}

export default MovieListItem;
