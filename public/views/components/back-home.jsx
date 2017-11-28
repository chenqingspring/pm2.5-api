'use strict';

import React from 'react'
var Router = require('react-router');

class BackHome extends React.Component {

  render() {
    return (
      <span className="home glyphicon glyphicon-home">
        <Router.Link to={`/`}>返回首页</Router.Link>
      </span>
    )
  }
}

export default BackHome
