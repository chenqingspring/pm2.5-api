'use strict';

var React = require('react');
var Router = require('react-router');

import PollutionLevel from './components/pollution-level'
import SearchArea from './components/search-area'
import Highlight from './components/highlight'
import QrCode from './components/qrcode'
import Button from './components/button'
import FooterText from './components/footer-text'

module.exports = React.createClass({
  displayName: 'list',

  render: function render() {
    return (
      <div id="index">
        <PollutionLevel/>
        <SearchArea/>
        <Highlight/>
        <QrCode/>
        <Button text="10佳城市" class="btn-success"/>
        <Button text="10差城市" class="btn-danger"/>
        <FooterText/>
      </div>
    );
  }
});
