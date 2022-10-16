import React, { Component } from "react";
import "./head.css";
import jake from "../../assets/jake.png";
import circle from "../../assets/circle.png";
import Buttons from "./Buttons";
import HeaderSocials from "./HeaderSocials";

export class Head extends Component {
  static propTypes = {};

  render() {
    return (
      <div className="header">
        <div className="pad">
          <img src={jake} className="imgJake center imgHead" alt="jake" />
          <img src={circle} className="imgCircle center imgHead" alt="circle" />
          <h1>Jake White</h1>
        </div>
        <div className="pad">
          <Buttons />
        </div>
        <div className="pad">
          <HeaderSocials />
        </div>
      </div>
    );
  }
}

export default Head;
