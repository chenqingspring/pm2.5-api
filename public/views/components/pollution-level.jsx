'use strict';

import React from 'react'

class PollutionLevel extends React.Component {
  render() {
    return (
      <div className="pollution-level">
        <table className="table table-bordered">
          <thead>
          <tr>
            <th>PM2.5指数</th>
            <th>等级</th>
            <th>注意事项</th>
          </tr>
          </thead>
          <tbody className="table-striped">
          <tr className="awesome">
            <td>0-50</td>
            <td>优</td>
            <td>参加户外活动呼吸清新空气</td>
          </tr>
          <tr className="good">
            <td>50-100</td>
            <td>良</td>
            <td>可以正常进行室外活动</td>
          </tr>
          <tr className="little-polluted">
            <td>101-150</td>
            <td>轻度</td>
            <td>敏感人群减少体力消耗大的户外活动</td>
          </tr>
          <tr className="medium-polluted">
            <td>151-200</td>
            <td>中度</td>
            <td>对敏感人群影响较大</td>
          </tr>
          <tr className="highly-polluted">
            <td>201-300</td>
            <td>重度</td>
            <td>所有人应适当减少室外活动</td>
          </tr>
          <tr className="heavy-polluted">
            <td>&gt;300</td>
            <td>严重</td>
            <td>尽量不要留在室外</td>
          </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default PollutionLevel
