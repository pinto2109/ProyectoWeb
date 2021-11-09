import React, { Component } from 'react'
import {Link } from "react-router-dom";

class Boton extends Component {
    render() {
        return ( 
            <div className="boton">
                <Link to ="/pagina/new" >
                <button type="button" class="btn btn-light" >Registrar productos</button>
                </Link>
            </div>
            
        );

    }
}

export default Boton;