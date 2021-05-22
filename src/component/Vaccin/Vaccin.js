import React, { Component } from "react";
import MainNewsCV from "./MainNewsCV";
import ExtraNewsVC from "./ExtraNewsVC";
import MoreNewsVC from "./MoreNewsVC";
import Search from "../Search";

class Vaccin extends Component {
  render() {
    return (
      <div>
         <section className="sectionVC">
           <Search/>
          <MainNewsCV />
          <ExtraNewsVC />
          <MoreNewsVC />
        </section>
      </div>
    );
  }
}

export default Vaccin;
