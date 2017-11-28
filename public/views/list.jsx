'use strict';

var React = require('react');
var Router = require('react-router');

import PollutionLevel from './components/pollution-level'
import SearchArea from './components/search-area'
import Highlight from './components/highlight'
import QrCode from './components/qrcode'

module.exports = React.createClass({
  displayName: 'list',

  render: function render() {
    return (
      <div>
        <PollutionLevel/>
        <SearchArea/>
        <Highlight/>
        <QrCode/>
      </div>
    );
  }
});
