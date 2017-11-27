'use strict';

import React from 'react'

class Detail extends React.Component {
  render() {
    const movieId = this.props.params.id;
    const movie = this.props.movies.filter(function(_movie) {
      return _movie.id === movieId;
    })[0];

    return (
      <div id='detail'>
        <h1>{movie.title}</h1>
        <img src={movie.image} alt={movie.title} />
        <a href={movie.url} target='_blank'>more info</a>
      </div>
    )
  }
}

export default Detail
