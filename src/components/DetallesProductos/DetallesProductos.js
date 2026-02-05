import React, { Component } from "react";

import "./DetallesProductos.css";
import DetalleProducto from "../DetalleProducto";

export default class DetallesProductos extends Component {
  render() {
    const { carro, total, eliminarProducto } = this.props;
    return (
      <>
        <ul className="detallesProducto">
          {carro.map((producto, index) => (
            <DetalleProducto
              key={index}
              producto={producto}
              eliminarProducto={eliminarProducto}
            ></DetalleProducto>
          ))}
          <div className="detalle_total_pagar">
            <p>Total a pagar: </p>
            <p>${total()}</p>
          </div>
        </ul>
      </>
    );
  }
}
