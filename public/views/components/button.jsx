'use strict';

import React from 'react'

class Button extends React.Component {

  constructor(proprs) {
    super(proprs)
  }

  render() {
    return (
      <button className={`btn ${this.props.class} btn-lg`}>
        <span className="glyphicon glyphicon-thumbs-up">
          {this.props.text}
        </span>
      </button>
    )
  }
}

export default Button
