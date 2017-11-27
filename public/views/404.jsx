'use strict';

import React from 'react'

class NotFound extends React.Component {
  render() {
    return(
      <div className="not-found">
        <h1>URL: {this.props.location.pathname} - Not Found(404)</h1>
      </div>
    )
  }
}

export default NotFound
