import React, { Component } from 'react'
import '../App.css';
import Andre from '../img/logo.svg';

class ImagenA extends Component {
    render() {
        return ( 
            <div className="Imagen">
                <img src={Andre}></img>
            </div>
        );

    }
}

export default ImagenA;


