import React, { Component } from "react";
import "./Producto.css"


class Producto extends Component {
    render() {
        const { producto, agregarAlCarrito, sacarDelCarrito } = this.props;
        return <div className="producto">
            <img className="producto__imagen" src={`${producto.urlImagen}`} alt={`Foto de ${producto.nombre}`}></img>
            <h2 className="producto__nombre">{producto.nombre}</h2>
            <p className="producto__precio"><span className="producto__precio--bold">Precio</span>: ${producto.precio}</p>
            <button className="boton boton__agregar" onClick={() => {
                agregarAlCarrito(producto)
            }}>Agregar</button>


        </div>
    }
}

export default Producto;