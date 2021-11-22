import React, { Component, useState } from 'react'
import '../App.css';
import User from './user';
import Logo1 from './LogoP';
import '../css/Crear.css';
import Cookies from 'universal-cookie';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from 'reactstrap';

const cookie = new Cookies();


function Barra() { 
    // render() {
        const [dropdown, setDropdown]= useState(false);

        const abrirCerrarDropdown=()=>{
            setDropdown(!dropdown);
        }

        const cerrar=()=>{
            document.cookie = "usuario=; max-age=0"
        }

        return ( 
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Logo1></Logo1>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"></a>
                    <p className="titulo">Mi Dulce Andre</p>
                    <Dropdown isOpen={dropdown} toggle={abrirCerrarDropdown}>
                    <DropdownToggle>
                        <a className="navbar-brand">{cookie.get("usuario")}</a>
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem>
                            <>
                           <a className="btn-volver" href="/Login" onClick={cerrar}>Cerrar Sesion</a>
                            </>
                        </DropdownItem>
                    </DropdownMenu>
                    </Dropdown>
                </div>
                <div className="logo">
                    <User></User>
                </div>
                
            </nav>
        );
    // }
}

export default Barra;