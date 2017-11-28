'use strict';

import React from 'react'
import Alert from './alert'

class Alerts extends React.Component {

  render() {

    // const sortBy = this.props.params.sort_by
    const top = [
      {
        "positionName": "林芝地区",
        "pmValue": "4",
        "quality": "优",
        "class": "awesome"
      },
      {
        "positionName": "林芝地区",
        "pmValue": "4",
        "quality": "优",
        "class": "awesome"
      },
      {
        "positionName": "林芝地区",
        "pmValue": "4",
        "quality": "优",
        "class": "awesome"
      },
      {
        "positionName": "林芝地区",
        "pmValue": "4",
        "quality": "优",
        "class": "awesome"
      },
      {
        "positionName": "林芝地区",
        "pmValue": "4",
        "quality": "优",
        "class": "awesome"
      }
    ]

    const listItems = top.map((item, index) =>
      <Alert key={index}
             class={item.class}
             positionName={item.positionName}
             pmValue={item.pmValue}
             quality={item.quality}/>
    );

    return (
      <div>
        {listItems}
      </div>
    )
  }
}

export default Alerts
