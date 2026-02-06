import React, { Component } from "react";
import "./Detalles.css";
import Detalle from "../Detalle/Detalle";

export default class Detalles extends Component {
  render() {
    const { carro, eliminarProducto } = this.props;
    return (
      <div className="detalles">
        {carro.map((producto, index) => (
          <Detalle
            key={index}
            producto={producto}
            eliminarProducto={eliminarProducto}
          ></Detalle>
        ))}
      </div>
    );
  }
}
