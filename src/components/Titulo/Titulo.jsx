import React, { Component } from 'react'
import "./Titulo.css"

export default class Titulo extends Component {
    render() {
        const { children } = this.props;
        return (
            <h1 className='titulo'>{children}</h1>
        )
    }
}
