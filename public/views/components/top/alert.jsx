'use strict';

import React from 'react'

class Alert extends React.Component {

  constructor(proprs) {
    super(proprs)
  }

  render() {
    return (
      <div className={`alert ${this.props.class}`}>
          <span className="position-name">
            {/*1.林芝地区*/}
            {this.props.positionName}
          </span>
        <div className="container-right">
          <span className="pm25-value">
            {/*4*/}
            {this.props.pmValue}
          </span>
          <span className="quality">
            {/*优*/}
            {this.props.quality}
          </span>
        </div>
      </div>
    )
  }
}

export default Alert
