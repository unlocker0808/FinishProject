import React, { Component } from "react";
import MainNewsCV from "./MainNewsCV";
import ExtraNewsVC from "./ExtraNewsVC";
import MoreNewsVC from "./MoreNewsVC";

class Vaccin extends Component {
  render() {
    return (
      <div>
        <p className="back-to-top1">Vaccin</p>

        <section className="sectionVC">
          <MainNewsCV />
          <ExtraNewsVC />
          <MoreNewsVC />
        </section>
      </div>
    );
  }
}

export default Vaccin;
