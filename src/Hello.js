import React, { Component } from 'react';
import volcan from "./volcan.jpeg"


class Hello extends Component {
    render() {
        return(
            <div class="hello-div">
            <p>Hola! Soy Camila</p>
            <img src="http://as01.epimg.net/deporteyvida/imagenes/2018/12/04/portada/1543920843_084917_1543921018_noticia_normal.jpg" width="400" height="300" className="imagen" alt="mountain" />           
            
            <img src={volcan} alt="volcano" className="imagen" />
            </div>

        )
    }
}

export default Hello;