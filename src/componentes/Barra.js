import React, { Component } from 'react'
import '../App.css';
import Boton from './BotonIniciarSesion';

class Barra extends Component {
    render() {
        return ( 
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Usuario</a>
                    <Boton></Boton>
                </div>
            </nav>
        );
    }
}

export default Barra;