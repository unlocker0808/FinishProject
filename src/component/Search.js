import React, { Component } from 'react'

export default class Search extends Component {
  render() {
    return (
      <div>
      <a className="srch" href="#search">Tìm kiếm <div className="fa fa-search"></div></a>
      <div id="search">
          <button type="button" className="close">X</button>
          <form>
              <input type="search" placeholder="Nhập từ cần tìm kiếm" />
              <button type="submit" className="btn btn-primary">Tìm kiếm</button>
          </form>
      </div>
      </div>
    )
  }
}
