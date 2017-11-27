'use strict';

import React from 'react'

class ErrStack extends React.Component {
  render() {
    return(
      <div className="err-stack">
        <h1>Internal Service Error (500)</h1>
        <h3>Error message: {this.props.err.message}</h3>
        <code>{this.props.err.stack}</code>
      </div>
    )
  }
}

export default ErrStack
