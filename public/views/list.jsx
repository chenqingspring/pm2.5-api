'use strict';

var React = require('react');
var Router = require('react-router');

import PollutionLevel from './components/pollution-level'
import SearchArea from './components/search-area'
import Highlight from './components/highlight'

module.exports = React.createClass({
  displayName: 'list',

  render: function render() {
    return (
      <div>
        <PollutionLevel/>
        <SearchArea/>
        <Highlight/>
      </div>
    );
  }
});
