'use strict';

import React from 'react'

class FooterText extends React.Component {

  render() {
    return (
      <div>
        <p className="footer-text" id="brand-text">
          微信订阅号#pm2.5查询#
        </p>
        <p className="footer-text">
          数据来源 PM25.in
        </p>
        <p className="footer-text">
          更新时间: 2017-11-28 13:00
        </p>
      </div>
    )
  }
}

export default FooterText
