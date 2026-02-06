import React, { Component } from "react";
import "./Overlay.css";

export default class Overlay extends Component {
  render() {
    const { children } = this.props;
    return <div className="overlay">{children}</div>;
  }
}
