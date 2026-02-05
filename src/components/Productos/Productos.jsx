import React, { Component } from "react";
import Producto from "../Producto/Producto";
import "./Productos.css";

class Productos extends Component {
    render() {
        const { productos, agregarAlCarrito } = this.props;
        return <div className="productos"> 
            {productos.map((producto, index) =>
                (<Producto key={index} producto={producto} agregarAlCarrito={agregarAlCarrito}></Producto>)
            )}
        </div>
    }

}
export default Productos;