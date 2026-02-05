import React, { Component } from "react";
import "./DetalleProducto.css";

export default class DetalleProducto extends Component {
  render() {
    const { producto } = this.props;
    return (
      <li className="detalle__producto">
        <img src={producto.urlImagen} alt={`${producto.nombre}`}></img>
        <p>{producto.nombre}</p>
        <p>{producto.cantidad}</p>
      </li>
    );
  }
}
