import Barra from './Barra';
import Logo from './Imagen1';

import '../css/menu.css';

export default function Menu(params){

    return( 
        <div className="App">
            <Barra></Barra>
            <header className="App-header">
                <body className="body">
                <Logo></Logo>
                <div className="texto">
                    Es un gusto tenerte aqui. Recuerda que en las pastelerias y reposterias “Mi dulce andre” hacemos lo productos a tu antojo y gustos.
                </div>
    
                </body>
            </header>
        </div>   
    )

}