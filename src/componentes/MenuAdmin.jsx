import {Link } from "react-router-dom";
import React, { Component } from 'react'

import BotonAdmin from "./BotonAdmin";
import BarraAdmin from './BarraAdmin';
import Logo from './Imagen1';

import '../css/menu.css';

import Cookies from 'universal-cookie';

const cookie = new Cookies();

const usuario = "Admin";

export default function Menu(params){

    

    return ( 
        <>
        
        {!usuario ? window.location.href = 'http://localhost:3000/Login'  : ""}
        
        

        <div className="App">
            <BarraAdmin></BarraAdmin>
            <header className="App-header">
                <body className="body">
                    <Logo></Logo>
                    <div className="texto">
                        Es un gusto tenerte aqui. Recuerda que en las pastelerias y reposterias “Mi dulce andre” hacemos lo productos a tu antojo y gustos.
                    </div>
                    <BotonAdmin/>
                </body>
            </header>
        </div>   
        </>     
    );
    
      

}