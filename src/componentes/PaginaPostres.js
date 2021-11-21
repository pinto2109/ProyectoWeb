import Barra from "./Barra";
import {Link } from "react-router-dom";
import React, { Component } from 'react'
import VolverUsuario from './BotonVolverUsuario';




import '../css/menu.css';

export default function Postre(params){

    

    return ( 
        <div>
            <Barra></Barra>
            <header className="App-header">
            <VolverUsuario></VolverUsuario> 
                <body className="body">
                                               
                </body>
            
            </header>

        </div>
        
         
    );
    
      

}