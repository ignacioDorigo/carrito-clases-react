import React, { Component } from "react";
import "./Producto.css"
import Boton from "../Boton";


class Producto extends Component {
    render() {
        const { producto, agregarAlCarrito } = this.props;
        return <div className="producto">
            <img className="producto__imagen" src={`${producto.urlImagen}`} alt={`Foto de ${producto.nombre}`}></img>
            <h2 className="producto__nombre">{producto.nombre}</h2>
            <p className="producto__precio"><span className="producto__precio--bold">Precio</span>: ${producto.precio} x Kg</p>
            <Boton className="boton boton__agregar" onClick={() => {
                agregarAlCarrito(producto)
            }}>Agregar</Boton>
        </div>
    }
}

export default Producto;