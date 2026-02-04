import React, { Component } from "react";
import Producto from "../Producto/Producto";
import "./Productos.css";

class Productos extends Component {
    render() {
        const { productos, agregarAlCarrito, sacarDelCarrito } = this.props;
        return <div className="productos"> 
            {productos.map((producto, index) =>
                (<Producto key={index} producto={producto} agregarAlCarrito={agregarAlCarrito} sacarDelCarrito={sacarDelCarrito}></Producto>)
            )}
        </div>
    }

}
export default Productos;