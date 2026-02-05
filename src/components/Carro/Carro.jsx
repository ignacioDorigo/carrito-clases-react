import React, { Component } from 'react'
import "./Carro.css";
import SvgCarrito from '../SvgCarrito';
import BubbleAlert from '../BubbleAlert/BubbleAlert';
import DetallesProductos from '../DetallesProductos/DetallesProductos';

export default class Carro extends Component {
    render() {
        const { carro, carroVisible, mostrarOcultarCarrito, total } = this.props;
        console.log(this.props)
        return (
            <div className='carro'>
                <SvgCarrito mostrarOcultarCarrito={mostrarOcultarCarrito}></SvgCarrito>
                {carroVisible ? <DetallesProductos carro={carro} total={total} /> : <BubbleAlert carro={carro}></BubbleAlert>}

            </div>
        )
    }
}
