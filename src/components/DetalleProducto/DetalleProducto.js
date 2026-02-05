import React, { Component } from "react";
import "./DetalleProducto.css";
import Boton from "../Boton";

export default class DetalleProducto extends Component {
  render() {
    const { producto, eliminarProducto } = this.props;
    return (
      <li className="detalle__producto">
        <img src={producto.urlImagen} alt={`${producto.nombre}`}></img>
        <p className="detalle__producto--precio">{producto.nombre}</p>
        <p>{producto.cantidad} Kg</p>
        <p>${producto.precio * producto.cantidad}</p>
        <Boton
          onClick={() => {
            eliminarProducto(producto);
          }}
          className="boton boton-eliminar"
        >
          X
        </Boton>
      </li>
    );
  }
}
