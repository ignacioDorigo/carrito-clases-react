import React, { Component } from "react";
import "./Carrito.css";
import Detalles from "../Detalles/Detalles";
import Boton from "../Boton";

export default class Carrito extends Component {
  render() {
    const {
      mostrarOcultarCarrito,
      carro,
      total,
      eliminarProducto,
      confirmarCarrito,
    } = this.props;

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

        {carro.length === 0 ? (
          <h3 className="carrito-sin-productos">No hay productos en tu carrito</h3>
        ) : (
          <div className="detalle__total">
            <p>Total: </p>
            <p>${total()}</p>
          </div>
        )}

        {carro.length === 0 ? null : (
          <Boton className="boton boton__pagar" onClick={confirmarCarrito}>
            Confirmar Carrito
          </Boton>
        )}
      </div>
    );
  }
}
