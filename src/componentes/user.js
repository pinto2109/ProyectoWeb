import React, { Component } from 'react'
import '../App.css';
import Andre from '../img/user.svg';

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