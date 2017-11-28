'use strict';

import React from 'react'
import Alerts from './components/top/alerts'
import PollutionLevel from './components/pollution-level'
import AearchArea from './components/search-area'
import Button from './components/button'
import FooterText from './components/top/footer-text'
import BackHome from './components/back-home'

class Top extends React.Component {

  render() {

    const sortBy = this.props.params.sort_by

    return (
      <div id="top">
        <h4 className="top-title">今日全国pm2.5十差{sortBy}城市</h4>
        <Alerts/>
        <PollutionLevel/>
        <AearchArea/>
        <Button text="10佳城市" class="btn-success"/>
        <FooterText/>
        <BackHome/>
      </div>
    )
  }
}

export default Top
