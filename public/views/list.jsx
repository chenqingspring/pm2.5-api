'use strict';

var React = require('react');
var Router = require('react-router');

module.exports = React.createClass({
  displayName: 'List',

  render: function render() {
    return (
      <div id='list'>
        <h1>Movies</h1>
        <h6>Click on a movie to see the details</h6>
        <ul>
          {this.props.movies.map(function(movie) {
            return (
              <li key={movie.id}>
                <Router.Link to={'/movie/' + movie.id}>
                  <img src={movie.image} alt={movie.title} />
                </Router.Link>
              </li>
            );
          })}

        </ul>
      </div>
    );
  }
});
