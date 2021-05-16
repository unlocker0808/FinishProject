import React, { Component } from 'react'

export default class Search extends Component {
    render() {
        return (
            <form className="search-form">
            <div className="input-group">
              <div className="input-group-prepend"><span className="input-group-text"><i className="fa fa-search" /></span></div><input className="form-control" type="text" placeholder="Nhập những gì bạn muốn tìm kiếm .." />
              <div className="input-group-append"><button className="btn btn-light" type="button">Tìm kiếm </button></div>
            </div>
          </form>
        )
    }
}
