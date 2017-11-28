'use strict';

import React from 'react'
var Router = require('react-router');
import Alerts from './components/top/alerts'
import PollutionLevel from './components/pollution-level'
import SearchArea from './components/search-area'
import Button from './components/button'
import FooterText from './components/top/footer-text'
import BackHome from './components/back-home'

class Zone extends React.Component {
  render() {
    const city = this.props.params.city;

    return (
      <div id='zones'>
        <h4 className="top-title">{city}各监测点pm2.5指数如下:</h4>
        <Alerts/>
        <PollutionLevel/>
        <SearchArea/>
        <Router.Link to={`/sort/top10`}>
          <Button text="10佳城市" class="btn btn-success btn-lg"/>
        </Router.Link>
        <Router.Link to={`/sort/bottom10`}>
          <Button text="10差城市" class="btn btn-danger btn-lg"/>
        </Router.Link>
        <FooterText/>
        <BackHome/>
      </div>
    )
  }
}

export default Zone
