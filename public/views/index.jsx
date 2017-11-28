'use strict';

var React = require('react');
var Router = require('react-router');
import PollutionLevel from './components/index/pollution-level'
import SearchArea from './components/search-area'
import Highlight from './components/index/highlight'
import QrCode from './components/index/qrcode'
import Button from './components/button'
import FooterText from './components/index/footer-text'

module.exports = React.createClass({
  displayName: 'index',

  render: function render() {
    return (
      <div id="index">
        <PollutionLevel/>
        <SearchArea/>
        <Highlight/>
        <QrCode/>
        <Router.Link to={`/sort/top10`}>
          <Button text="10佳城市" class="btn-success"/>
        </Router.Link>
        <Router.Link to={`/sort/bottom10`}>
          <Button text="10差城市" class="btn-danger"/>
        </Router.Link>
        <FooterText/>
      </div>
    );
  }
});
