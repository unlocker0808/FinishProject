import React, { Component } from 'react'

export default class Option extends Component {
    render() {
        return (
            <div className="text"><i className="fa fa-birthday-cake" id="myicon" />
                        <div className="col-sm-120">
                          <select className="display-inline-block">
                            <option value={1}>Tháng 1</option>
                            <option value={2}>Tháng 2</option>
                            <option value={3}>Tháng 3</option>
                            <option value={4}>Tháng 4</option>
                            <option value={5} selected>Tháng 5</option>
                            <option value={6}>Tháng 6</option>
                            <option value={7}>Tháng 7</option>
                            <option value={8}>Tháng 8</option>
                            <option value={9}>Tháng 9</option>
                            <option value={10}>Tháng 10</option>
                            <option value={11}>Tháng 11</option>
                            <option value={12}>Tháng 12</option>
                          </select>
                          <select className="display-inline-block">
                            <option value={1} selected>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                            <option value={6}>6</option>
                            <option value={7}>7</option>
                            <option value={8}>8</option>
                            <option value={9}>9</option>
                            <option value={10}>10</option>
                            <option value={11}>11</option>
                            <option value={12}>12</option>
                            <option value={13}>13</option>
                            <option value={14}>14</option>
                            <option value={15}>15</option>
                            <option value={16}>16</option>
                            <option value={17}>17</option>
                            <option value={18}>18</option>
                            <option value={19}>19</option>
                            <option value={20}>20</option>
                            <option value={21}>21</option>
                            <option value={22}>22</option>
                            <option value={23}>23</option>
                            <option value={24}>24</option>
                            <option value={25}>25</option>
                            <option value={26}>26</option>
                            <option value={27}>27</option>
                            <option value={28}>28</option>
                            <option value={29}>29</option>
                            <option value={30}>30</option>
                            <option value={31}>31</option>
                          </select>
                          <select className="display-inline-block">
                            <option value={2016}>2016</option>
                            <option value={2017}>2017</option>
                            <option value={2015}>2015</option>
                            <option value={2014}>2014</option>
                            <option value={2017}>2017</option>
                            <option value={2018}>2018</option>
                            <option value={2019}>2019</option>
                            <option value={2020}>2020</option>
                            <option value={2021} selected>2021</option>
                          </select></div>
                      </div>
        )
    }
}
