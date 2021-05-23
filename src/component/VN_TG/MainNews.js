/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";

class MainNews extends Component {
  render() {
    return (
      <div class="padding-space">
        <a
          class="paragraph_color_text_mainnews d-block content-care-1"
          href={this.props.link}
        >
          {this.props.title}
        </a>
        <a class="time-text1 d-block content-care-1" href={this.props.link}>
          {this.props.time}{" "}
        </a>
        <a
          class="paragraph_color_text_mainnews_infor d-block content-care-1"
          href={this.props.link}
        >
          {this.props.details}{" "}
        </a>
        <div>
          <a href={this.props.link}>
            <img
              class="img-thumbnail d-block content-care-1"
              src={this.props.paths}
              data-bss-hover-animate="pulse"
              alt={this.props.nameImg}
            />
          </a>
        </div>
        <div className="line-bottom" />
      </div>
    );
  }
}

export default MainNews;
