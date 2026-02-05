import React, { Component } from "react";
import "./BubbleAlert.css";

export default class BubbleAlert extends Component {
  render() {
    const { carro } = this.props;
    const cantidadElementos = () => {
      const cantidad = carro.reduce(
        (acumulador, producto) => acumulador + producto.cantidad,
        0,
      );
      if (cantidad === 0) {
        return "";
      } else if (cantidad > 9) {
        return "9+";
      }
      return `${cantidad}`;
    };
    return (
      <>
        {carro.length === 0 ? (
          <></>
        ) : (
          <div className="bubble">{cantidadElementos()}</div>
        )}
      </>
    );
  }
}
