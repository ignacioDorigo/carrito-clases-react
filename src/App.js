import React, { Component } from "react";
import "./box-model.css";
import "./normalize.css";
import Productos from "./components/Productos";
import Layout from "./components/Layout";
import Titulo from "./components/Titulo/Titulo";
import Navbar from "./components/Navbar";

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
      {
        nombre: "Banana",
        precio: 1500,
        urlImagen: "/imagenes/banana.webp",
      },
    ],
    carro: [],
    carroVisible: false,
  };

  agregarAlCarrito = (producto) => {
    // Vamos a tomar el estado actual del carrito
    const carritoActual = this.state.carro;

    // Esto me devuelve un boolean, que verifica si el producto que le pasamos como parametro ya esta en el carrito.
    const productoEstaEnCarrito = carritoActual.some(
      (productoCarrito) => productoCarrito.nombre === producto.nombre,
    );

    // Vamos a crear un nuevo carro, que vamos a usar para setear el estado.
    let nuevoCarro;
    if (!productoEstaEnCarrito) {
      // En caso de que no este agregado, vamos a crear un objeto de ese producto con cantidad 1, y copiar los otros productos que ya estaban en el carrito
      nuevoCarro = [...this.state.carro, { ...producto, cantidad: 1 }];
    } else {
      // En caso de que ese producto ya exista, vamos a sumarle uno a la cantidad, y con los otros productos solo los vamos a copiar.
      nuevoCarro = carritoActual.map((productoEnCarrito) =>
        productoEnCarrito.nombre === producto.nombre
          ? { ...producto, cantidad: productoEnCarrito.cantidad + 1 }
          : productoEnCarrito,
      );
    }
    this.setState({ carro: nuevoCarro });
    // console.log(this.state.carro);
  };

  mostrarOcultarCarrito = () => {
    this.setState((prevState) => {
      return {
        carroVisible: !prevState.carroVisible,
      };
    });
  };
  render() {
    // const agregarAlCarrito = (producto) => {
    //   // Vamos a tomar el estado actual del carrito
    //   const carritoActual = this.state.carro;

    //   // Esto me devuelve un boolean, que verifica si el producto que le pasamos como parametro ya esta en el carrito.
    //   const productoEstaEnCarrito = carritoActual.some(
    //     (productoCarrito) => productoCarrito.nombre === producto.nombre,
    //   );

    //   // Vamos a crear un nuevo carro, que vamos a usar para setear el estado.
    //   let nuevoCarro;
    //   if (!productoEstaEnCarrito) {
    //     // En caso de que no este agregado, vamos a crear un objeto de ese producto con cantidad 1, y copiar los otros productos que ya estaban en el carrito
    //     nuevoCarro = [...this.state.carro, { ...producto, cantidad: 1 }];
    //   } else {
    //     // En caso de que ese producto ya exista, vamos a sumarle uno a la cantidad, y con los otros productos solo los vamos a copiar.
    //     nuevoCarro = carritoActual.map((productoEnCarrito) =>
    //       productoEnCarrito.nombre === producto.nombre
    //         ? { ...producto, cantidad: productoEnCarrito.cantidad + 1 }
    //         : productoEnCarrito,
    //     );
    //   }
    //   this.setState({ carro: nuevoCarro });
    //   // console.log(this.state.carro);
    // };

    // const mostrarOcultarCarrito = () => {
    //   this.setState((prevState) => {
    //     return {
    //       carroVisible: !prevState.carroVisible,
    //     };
    //   });
    // };

    // Usar despues en el detalleCompra
    // const sacarDelCarrito = () => {
    //   console.log("Hola");
    // };
    return (
      <>
        <Navbar
          carro={this.state.carro}
          carroVisible={this.state.carroVisible}
          mostrarOcultarCarrito={this.mostrarOcultarCarrito}
        ></Navbar>
        <Layout>
          <Titulo>Tienda</Titulo>
          <Productos
            agregarAlCarrito={this.agregarAlCarrito}
            productos={this.state.productos}
          ></Productos>
        </Layout>
      </>
    );
  }
}
export default App;
