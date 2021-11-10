import './App.css';

import react, { useState} from 'react';

import Login from './componentes/Login';
import Menu from './componentes/Menu';
import Pagina from './pagina';

import Cookies from 'universal-cookie';

const cookie = new Cookies();


function App() {
  const [conectado, setConectado]= useState(false);
  const acceder = (estado)=> {
    setConectado(estado)
  }

  return (
    cookie.get("usuario") ? <Menu /> : <Login acceder={acceder} />
    

    // <div className="App">
    //   <Barra></Barra>
    //   <header className="App-header">
    //     <body className="body">
    //       <Logo></Logo>
    //       <div className="texto">
    //         Es un gusto tenerte aqui. Recuerda que en las pastelerias y reposterias “Mi dulce andre” hacemos lo productos a tu antojo y gustos.
    //       </div>
    //       <Boton></Boton>
    //     </body>
    //   </header>
    // </div>
  );
}

export default App;
