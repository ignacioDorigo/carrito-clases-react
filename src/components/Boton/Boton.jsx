import { Component } from "react";
import "./Boton.css"

class Boton extends Component {
    render() {
        const props = this.props;
        return <button {...props}></button>
    }
}

export default Boton;