import React, { Component } from 'react'
import {Link } from "react-router-dom";

class Boton extends Component {
    render() {
        return ( 
            <div className="boton">
                <Link to ="/Postres" >
                <button type="button" class="btn btn-light" >Ver Todos Nuestros Postres</button>
                </Link>
            </div>
            
        );

    }
}

export default Boton;