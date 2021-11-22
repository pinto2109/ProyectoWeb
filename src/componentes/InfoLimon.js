import Barra from "./Barra";
import {Link } from "react-router-dom";
import React, { Component } from 'react'
import VolverUsuario from './BotonVolverUsuario';
import {Card, CardTitle, CardSubtitle, CardBody, CardText, CardGroup, CardImg, Button, Col} from 'reactstrap';
import Pastel from '../img/limon.jpg';

import '../css/menu.css';

export default function Postre(params){

    return ( 
        <div>
            <Barra></Barra>
            <header className="App-header"> 
                <body className="body">
                    <div className="pasteles">
                            <Card className="tarjeta">
                                <CardImg className="imagen" alt="Card image cap" src= {Pastel} />
                                <CardBody>
                                    <CardTitle tag="h5">
                                        Pastel de limon
                                    </CardTitle>
                                    <CardText>
                                        Precio: 18000$
                                        <br></br>
                                        Ingredientes:
                                        <br></br>
                                        250 gramos de harina
                                        <br></br>
                                        150 gramos de mantequilla
                                        <br></br>
                                        150 gramos de azúcar
                                        <br></br>
                                        5 huevos enteros
                                        <br></br>
                                        1 cucharada copeteada de polvo para hornear
                                        <br></br>
                                        1 cucharada de limon
                                        <br></br>
                                    </CardText>
                                    <center>
                                        <div className="boton1">
                                            <Link to ="#" >
                                                <button type="button" class="btn btn-danger" >Comprar ahora</button>
                                            </Link>
                                        </div>
                                    </center>
                                </CardBody>
                            </Card>
                    </div>
                </body>
                <br></br>
                <VolverUsuario></VolverUsuario>
            </header>

        </div>
        
         
    );
}