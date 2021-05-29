/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";

class SubsNews extends Component {
  render() {
    return (
      <div>
        <div class="padding-space">
          <a class="paragraph_color_text_subnews" href={this.props.link}>
            <strong>{this.props.title}</strong>
          </a>
          <a class="time-text1" href={this.props.link}>
            {this.props.time}
            <br />
          </a>
          <a href={this.props.link}>
            <img
              class="img-thumbnail"
              data-bss-hover-animate="pulse"
              src={this.props.paths}
              alt={this.props.nameImg}
            />
          </a>
          <div className="line-bottom" />
        </div>
      </div>
    );
  }
}

export default SubsNews;
