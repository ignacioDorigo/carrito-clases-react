import React, { Component } from 'react'
import "./Carro.css";
import SvgCarrito from '../SvgCarrito';

export default class Carro extends Component {
    render() {
        const { carro } = this.props;
        console.log(carro)
        return (
            <SvgCarrito></SvgCarrito>
        )
    }
}
