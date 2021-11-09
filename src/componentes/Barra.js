import React, { Component } from 'react'
import '../App.css';
import Boton from './Boton';
import Logo from './user';
import Logo1 from './LogoP';

class Barra extends Component {
    render() {
        return ( 
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Logo1></Logo1>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Usuario</a>
                    <a className="navbar-brand" >Mi Dulce Andre</a>
                    <Boton></Boton>
                </div>
                <div className="logo">
                    <Logo></Logo>
                </div>
                
            </nav>
        );
    }
}

export default Barra;