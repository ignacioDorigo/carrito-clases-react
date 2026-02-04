import React, { Component } from 'react'
import "./Navbar.css"
import Logo from '../Logo'
import Carro from '../Carro'

export default class Navbar extends Component {
    render() {
        return (
            <nav className='nav'>
                <Logo></Logo>
                <Carro></Carro>
            </nav>
        )
    }
}
