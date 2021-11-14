import React, { Component } from 'react'
import '../App.css';
import User from './user';
import Logo1 from './LogoP';

class Barra extends Component {
    render() {
        return ( 
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Logo1></Logo1>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Administrar</a>
                    <p className="titulo">Mi Dulce Andre</p>
                    <a className="navbar-brand" >Nombre de usuario</a>
                </div>
                <div className="logo">
                    <User></User>
                </div>
                
            </nav>
        );
    }
}

export default Barra;