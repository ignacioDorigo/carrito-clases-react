import React, { Component } from "react";

import "./DetallesProductos.css";
import DetalleProducto from "../DetalleProducto";

export default class DetallesProductos extends Component {
  render() {
    const { carro } = this.props;
    return (
      <ul className="detallesProducto">
        {carro.map((producto, index) => (
          <DetalleProducto key={index} producto={producto}></DetalleProducto>
        ))}
      </ul>
    );
  }
}
