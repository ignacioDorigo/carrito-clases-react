import { Component } from "react";
import "./Layout.css";

class Layout extends Component {
    render() {
        const { children } = this.props;
        return <div className="layout contenedor">{children}</div>
    }
}

export default Layout;