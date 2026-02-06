import React, { Component } from "react";
import "./Carrito.css";

export default class Carrito extends Component {
  render() {
    const { mostrarOcultarCarrito } = this.props;
    return (
      <div className="carrito">
        <div className="div__carrito__titulo">
          <h2 className="carrito__titulo">Detalle</h2>
          <button
            className="carrito__boton__atras"
            onClick={mostrarOcultarCarrito}
          >
            x
          </button>
        </div>
      </div>
    );
  }
}
