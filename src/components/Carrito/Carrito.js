import React, { Component } from "react";
import "./Carrito.css";
import Detalles from "../Detalles/Detalles";

export default class Carrito extends Component {
  render() {
    const { mostrarOcultarCarrito, carro, total, eliminarProducto } =
      this.props;

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

        <Detalles carro={carro} eliminarProducto={eliminarProducto}></Detalles>
      </div>
    );
  }
}
