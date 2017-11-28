'use strict';

var React = require('react');
var Router = require('react-router');

import PollutionLevel from './components/pollution-level'

module.exports = React.createClass({
  displayName: 'list',

  render: function render() {
    return (
      <div>
        <PollutionLevel/>
      </div>
    );
  }
});
