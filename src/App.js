import React, { Component } from "react";
import "./box-model.css";
import "./normalize.css";
import Productos from "./components/Productos";

class App extends Component {
  state = {
    productos: [
      {
        nombre: "Tomate",
        precio: 1500,
        urlImagen: "/imagenes/tomate.webp",
      },
      {
        nombre: "Lechuga",
        precio: 1500,
        urlImagen: "/imagenes/lechuga.webp",
      },
      {
        nombre: "Arbejas",
        precio: 1500,
        urlImagen: "/imagenes/arbejas.webp",
      },
    ],
    carro: [],
  };
  render() {
    const agregarAlCarrito = () => {
      console.log("Hola");
    };

    const sacarDelCarrito = () => {
      console.log("Hola");
    };
    return (
      <div>
        <Productos
          agregarAlCarrito={() => agregarAlCarrito}
          sacarDelCarrito={() => sacarDelCarrito}
          productos={this.state.productos}
        ></Productos>
      </div>
    );
  }
}
export default App;
