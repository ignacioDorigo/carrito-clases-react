import React, { Component } from 'react'
import "./Carro.css";
import SvgCarrito from '../SvgCarrito';
import BubbleAlert from '../BubbleAlert/BubbleAlert';

export default class Carro extends Component {
    render() {
        const { carro } = this.props;
        return (
            <div className='carro'>
                <SvgCarrito></SvgCarrito>
                <BubbleAlert carro={carro}></BubbleAlert>
            </div>
        )
    }
}
