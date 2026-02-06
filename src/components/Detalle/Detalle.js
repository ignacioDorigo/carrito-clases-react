import React, { Component } from "react";
import "./Detalle.css";

export default class Detalle extends Component {
  render() {
    const { producto, eliminarProducto } = this.props;
    return (
      <div className="detalle">
        <img
          className="detalle__img"
          src={producto.urlImagen}
          alt={producto.nombre}
        />

        <div className="detalle__info">
          <h4 className="detalle__nombre">{producto.nombre}</h4>
          <p className="detalle__cantidad">{producto.cantidad} Kg</p>
          <p className="detalle__precio">
            $ {producto.cantidad * producto.precio}
          </p>
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="#f34f4f"
          color="f34f4f"
          className="detalle__btn__eliminar"
          onClick={() => {
            eliminarProducto(producto);
          }}
        >
          <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10 -10 10s-10 -4.477 -10 -10s4.477 -10 10 -10m3.6 5.2a1 1 0 0 0 -1.4 .2l-2.2 2.933l-2.2 -2.933a1 1 0 1 0 -1.6 1.2l2.55 3.4l-2.55 3.4a1 1 0 1 0 1.6 1.2l2.2 -2.933l2.2 2.933a1 1 0 0 0 1.6 -1.2l-2.55 -3.4l2.55 -3.4a1 1 0 0 0 -.2 -1.4" />
        </svg>
      </div>
    );
  }
}
