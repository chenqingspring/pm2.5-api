'use strict';

import React from 'react'

class Top extends React.Component {

  render() {

    const sortBy = this.props.params.sort_by

    return (
      <div id="top">

        <h4 className="top-title">今日全国pm2.5十差城市</h4>

        <div className="alert awesome">
          <span className="position-name">
            1.林芝地区
          </span>
          <div className="container-right">
            <span className="pm25-value">4</span>
            <span className="quality">优</span>
          </div>
        </div>

        {sortBy}
      </div>
    )
  }
}

export default Top
