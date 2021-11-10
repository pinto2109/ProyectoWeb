import {Link } from "react-router-dom";
import React, { Component } from 'react'
import Boton from "./Boton";

import Cookies from 'universal-cookie';

const cookie = new Cookies();

export default function Menu(params){

    

    return ( 
        <>
        {!cookie.get("usuario") ? window.location.href = `http://localhost:3000/Login`  : ""}
        <h1>Menu</h1>
        <Boton/>
        </>     
    );
    
      

}