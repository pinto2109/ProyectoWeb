import React, { Component } from 'react'
import {Link } from "react-router-dom";

class Boton extends Component {
    render() {
        return ( 
            <div className="boton">
                <Link to ="../pagina" target="_blank">
                <button type="button" class="btn btn-light" >Haz tu primer pedido</button>
                </Link>
            </div>
            
        );

    }
}

export default Boton;