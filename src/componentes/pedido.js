import React, { Component } from 'react'
import {Link } from "react-router-dom";
import {Button} from 'reactstrap';

class Boton extends Component {
    render() {
        return ( 
            <div className="pedido">
                <Link to ="" >
                    <Button className="pedido" color ="light" size ="lg">
                        Hacer pedido
                    </Button>
                </Link>
            </div>
            
        );

    }
}

export default Boton;