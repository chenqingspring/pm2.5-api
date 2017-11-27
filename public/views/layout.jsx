'use strict';

import React from 'react'

class Layout extends React.Component {
  render() {
    return (
      <html>
        <head>
          <meta charSet='utf-8' />
          <title>React-on-Express</title>
          <link rel='stylesheet' href='/styles.css'></link>
        </head>
        <body>
          <div>
            {this.props.children}
          </div>
          <script src='/bundle.js'></script>
        </body>
      </html>
    )
  }
}

export default Layout
