'use strict';

import React from 'react'

class Button extends React.Component {

  constructor(proprs) {
    super(proprs)
  }

  render() {
    return (
      <button className={this.props.class}>
        <span className="glyphicon glyphicon-thumbs-up">
          {this.props.text}
        </span>
      </button>
    )
  }
}

export default Button
