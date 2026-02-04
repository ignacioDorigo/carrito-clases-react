import React, { Component } from "react";
import "./box-model.css";
import "./normalize.css";
import Productos from "./components/Productos";
import Layout from "./components/Layout";

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
    const agregarAlCarrito = (producto) => {
      const carritoActual = this.state.carro;
      const productoEstaEnCarrito = carritoActual.some(
        (productoCarrito) => productoCarrito.nombre === producto.nombre,
      );
      let nuevoCarro;
      if (!productoEstaEnCarrito) {
        nuevoCarro = [...this.state.carro, { ...producto, cantidad: 1 }];
        this.setState({ carro: nuevoCarro });
      }
      console.log(this.state.carro);
    };

    const sacarDelCarrito = () => {
      console.log("Hola");
    };
    return (
      <Layout>
        <Productos
          agregarAlCarrito={agregarAlCarrito}
          sacarDelCarrito={sacarDelCarrito}
          productos={this.state.productos}
        ></Productos>
      </Layout>
    );
  }
}
export default App;
