import Barra from "./Barra";
import {Link } from "react-router-dom";
import React, { Component } from 'react'
import VolverUsuario from './BotonVolverUsuario';
import {Card, CardTitle, CardSubtitle, CardBody, CardText, CardGroup, CardImg, Button, Col} from 'reactstrap';
import Pastel from '../img/pastel.jpg';
import Choco from '../img/choco.jpg';
import Mora from '../img/mora.jpg';
import Vainilla from '../img/vainilla.jpg';
import Fresa from '../img/fresa.jpg';
import Limon from '../img/limon.jpg';


import '../css/menu.css';

export default function Postre(params){

    return ( 
        <div>
            <Barra></Barra>
            <header className="App-header"> 
                <body className="body">
                    <div className="pasteles">
                        <br></br>
                        <CardGroup>
                            <Card className="tarjeta">
                                <CardImg className="imagen" alt="Card image cap" src= {Pastel} />
                                <CardBody>
                                    <CardTitle tag="h5">
                                        Pastel de mora
                                    </CardTitle>
                                    <CardText>
                                        Para ver la información del producto de clic en info
                                    </CardText>
                                    <center>
                                        <div className="boton1">
                                            <Link to ="/InfoMora" >
                                                <button type="button" class="btn btn-danger" >Info</button>
                                            </Link>
                                        </div>
                                    </center>
                                </CardBody>
                            </Card>
                            
                            <Card>
                                <CardImg className="imagen" alt="Card image cap" src= {Choco} top width="100%"/>
                                <CardBody>
                                    <CardTitle tag="h5">
                                        Pastel de chocolate
                                    </CardTitle>
                                    <CardText>
                                        Para ver la información del producto de clic en info
                                    </CardText>
                                    <center>
                                        <div className="boton1">
                                            <Link to ="/InfoChoco" >
                                                <button type="button" class="btn btn-danger" >Info</button>
                                            </Link>
                                        </div>
                                    </center>    
                                </CardBody>
                            </Card>
                            
                            
                            <Card>
                                <CardImg className="imagen" alt="Card image cap" src= {Mora} top width="100%"/>
                                <CardBody>
                                    <CardTitle tag="h5">
                                        Pie de mora
                                    </CardTitle>
                                    <CardText>
                                        Para ver la información del producto de clic en info
                                    </CardText>
                                    <center>
                                        <div className="boton1">
                                            <Link to ="/InfoPie" >
                                                <button type="button" class="btn btn-danger" >Info</button>
                                            </Link>
                                        </div>
                                    </center>    
                                </CardBody>
                            </Card>
                        </CardGroup>
                        <br></br>
                        <CardGroup>
                            <Card>
                                <CardImg className="imagen" alt="Card image cap" src= {Vainilla} top width="100%"/>
                                <CardBody>
                                    <CardTitle tag="h5">
                                        Pastel de vainilla
                                    </CardTitle>
                                    <CardText>
                                        Para ver la información del producto de clic en info
                                    </CardText>
                                    <center>
                                        <div className="boton1">
                                            <Link to ="/InfoVainilla" >
                                                <button type="button" class="btn btn-danger" >Info</button>
                                            </Link>
                                        </div>
                                    </center>    
                                </CardBody>
                            </Card>

                            <Card>
                                <CardImg className="imagen" alt="Card image cap" src= {Fresa} top width="100%"/>
                                <CardBody>
                                    <CardTitle tag="h5">
                                        Pastel de fresa
                                    </CardTitle>
                                    <CardText>
                                        Para ver la información del producto de clic en info
                                    </CardText>
                                    <center>
                                    <div className="boton1">
                                            <Link to ="/InfoFresa" >
                                                <button type="button" class="btn btn-danger" >Info</button>
                                            </Link>
                                        </div>
                                    </center>    
                                </CardBody>
                            </Card>

                            <br></br>
                            <Card>
                                <CardImg className="imagen" alt="Card image cap" src= {Limon} top width="100%"/>
                                <CardBody>
                                    <CardTitle tag="h5">
                                        Pastel de limon
                                    </CardTitle>
                                    <CardText>
                                        Para ver la información del producto de clic en info
                                    </CardText>
                                    <center>
                                    <div className="boton1">
                                            <Link to ="/InfoLimon" >
                                                <button type="button" class="btn btn-danger" >Info</button>
                                            </Link>
                                        </div>
                                    </center>    
                                </CardBody>
                            </Card>
                        </CardGroup> 
                        
                    </div>
                </body>
                <br></br>
                <VolverUsuario></VolverUsuario>
            </header>

        </div>
    );
    
}