import React, { Component } from "react";
import "./box-model.css";
import "./normalize.css";
import Productos from "./components/Productos";
import Layout from "./components/Layout";
import Titulo from "./components/Titulo/Titulo";
import Navbar from "./components/Navbar";
import Swal from "sweetalert2";
import Overlay from "./components/Overlay/Overlay";
import Carrito from "./components/Carrito/Carrito";

class App extends Component {
  state = {
    productos: [
      {
        nombre: "Tomate",
        precio: 1800,
        urlImagen: "/imagenes/tomate.webp",
      },
      {
        nombre: "Lechuga",
        precio: 1200,
        urlImagen: "/imagenes/lechuga.webp",
      },
      {
        nombre: "Arvejas",
        precio: 3000,
        urlImagen: "/imagenes/arbejas.webp",
      },
      {
        nombre: "Banana",
        precio: 2000,
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
  };

  mostrarOcultarCarrito = () => {
    this.setState((prevState) => {
      return {
        carroVisible: !prevState.carroVisible,
      };
    });
  };

  calcularTotal = () => {
    const carritoActual = this.state.carro;
    const total = carritoActual.reduce(
      (acum, producto) => acum + producto.precio * producto.cantidad,
      0,
    );
    return total;
  };

  eliminarProducto = (producto) => {
    Swal.fire({
      title: `Eliminar`,
      text: `¿Seguro que quieres eliminar el producto de su carrito?`,
      showCancelButton: true,
      cancelButtonText: "Cancelar",
      confirmButtonText: "Eliminar",
      confirmButtonColor: "#fa5758",
    }).then((result) => {
      if (result.isConfirmed) {
        const carrito = this.state.carro;
        const nuevoCarro = carrito.filter(
          (productoCarrito) => productoCarrito.nombre !== producto.nombre,
        );

        this.setState({ carro: nuevoCarro });
        Swal.fire("Exito!", "Producto eliminado correctamente", "success");
      }
    });
  };

  confirmarCarrito = () => {
    Swal.fire({
      title: `Confirmar`,
      text: `¿Está seguro de que quiere confirmar su carrito?`,
      showCancelButton: true,
      cancelButtonText: "Cancelar",
      confirmButtonText: "Eliminar",
      confirmButtonColor: "#6ad42d",
    }).then((result) => {
      if (result.isConfirmed) {
        this.setState({ carro: [] });
        Swal.fire("Exito!", "Carrito confirmado", "success");
      }
    });
  };
  render() {
    return (
      <>
        <Navbar
          carro={this.state.carro}
          carroVisible={this.state.carroVisible}
          mostrarOcultarCarrito={this.mostrarOcultarCarrito}
          total={this.calcularTotal}
          eliminarProducto={this.eliminarProducto}
        ></Navbar>
        <Layout>
          <Titulo>Tienda</Titulo>
          <Productos
            agregarAlCarrito={this.agregarAlCarrito}
            productos={this.state.productos}
          ></Productos>
        </Layout>
        {this.state.carroVisible === false ? null : (
          <Overlay>
            <Carrito
              mostrarOcultarCarrito={this.mostrarOcultarCarrito}
              carro={this.state.carro}
              carroVisible={this.state.carroVisible}
              total={this.calcularTotal}
              eliminarProducto={this.eliminarProducto}
              confirmarCarrito={this.confirmarCarrito}
            ></Carrito>
          </Overlay>
        )}
      </>
    );
  }
}
export default App;
