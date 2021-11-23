import React, { Component } from 'react'
import '../App.css';
import Andre from '../img/logo1.svg';

class ImagenA extends Component {
    render() {
        return ( 
            <div>
                <img className="ImagenU" src={Andre}></img>
            </div>
        );

    }
}

export default ImagenA;