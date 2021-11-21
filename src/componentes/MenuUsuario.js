import {Link } from "react-router-dom";
import React, { Component } from 'react'

import BotonUsuario from "./BotonUsuario";
import Barra from './Barra';
import Logo from './Imagen1';

import '../css/menu.css';

import Cookies from 'universal-cookie';

const cookie = new Cookies();

export default function Menu(params){

    

    return ( 
        <>
        {!cookie.get("usuario") ? window.location.href = 'http://localhost:3000/Login'  : ""}
        
        

        <div className="App">
            <Barra></Barra>
            <header className="App-header">
                <body className="body">
                    <Logo></Logo>
                    <div className="texto">
                        Es un gusto tenerte aqui. Recuerda que en las pastelerias y reposterias “Mi dulce andre” hacemos lo productos a tu antojo y gustos.
                    </div>
                    <BotonUsuario/>
                </body>
            </header>
        </div>   
        </>     
    );
    
      

}