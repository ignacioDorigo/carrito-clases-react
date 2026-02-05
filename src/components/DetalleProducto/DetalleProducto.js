import React, { Component } from "react";
import "./DetalleProducto.css";

export default class DetalleProducto extends Component {
  render() {
    const { producto } = this.props;
    return (
      <li className="detalle__producto">
        <img src={producto.urlImagen} alt={`${producto.nombre}`}></img>
        <p className="detalle__producto--precio">{producto.nombre}</p>
        <p>{producto.cantidad} Kg</p>
        <p>${producto.precio * producto.cantidad}</p>
      </li>
    );
  }
}
