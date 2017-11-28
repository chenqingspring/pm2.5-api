'use strict';

import React from 'react'

class Top extends React.Component {

  render() {

    const sortBy = this.props.params.sort_by

    return (
      <div id="top">
        {sortBy}
      </div>
    )
  }
}

export default Top
