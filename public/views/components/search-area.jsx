'use strict';

import React from 'react'

class SearchArea extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      searchKey: ''
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (e) {
    this.setState({
      searchKey: e.target.value
    })
  }

  render() {
    return (
      <div className="row">
        <div className="col-lg-6">
          <div className="input-group">
            <input className="form-control"
                   onChange={this.handleChange}
                   type="text"
                   value={this.state.searchKey}/>
            <span className="input-group-btn">
              <button className="btn btn-default" type="button">
                Go!
              </button>
            </span>
          </div>
        </div>
      </div>
    )
  }
}

export default SearchArea
