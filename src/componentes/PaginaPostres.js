import Barra from "./Barra";
import {Link } from "react-router-dom";
import React, { Component } from 'react'
import VolverUsuario from './BotonVolverUsuario';
import '../css/menu.css';

import Cookies from 'universal-cookie';

const cookie = new Cookies();




export default function Postre(params){

    

    return (
        <> 
         {!cookie.get("usuario") ? window.location.href = 'http://localhost:3000/Login'  : ""}
        <div>
            <Barra></Barra>
            <header className="App-header">
            <VolverUsuario></VolverUsuario> 
                <body className="body">
                                               
                </body>
            
            </header>

        </div>
        </>
         
    );
    
      

}