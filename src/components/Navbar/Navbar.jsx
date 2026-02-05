import React, { Component } from 'react'
import "./Navbar.css"
import Logo from '../Logo'
import Carro from '../Carro'

export default class Navbar extends Component {
    render() {
        const { carro, carroVisible, mostrarOcultarCarrito, total } = this.props;
        return (
            <nav className='nav'>
                <Logo></Logo>
                <Carro carro={carro} carroVisible={carroVisible} mostrarOcultarCarrito={mostrarOcultarCarrito} total={total}></Carro>
            </nav>
        )
    }
}
