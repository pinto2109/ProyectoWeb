import './App.css';
import Barra from './componentes/Barra';
import Logo from './componentes/Imagen1';
import {Link } from "react-router-dom";
import Boton from './componentes/Boton';

function App() {
  return (
    <div className="App">
      <Barra></Barra>
      <header className="App-header">
        <body className="body">
          <Logo></Logo>
          <div className="texto">
            Es un gusto tenerte aqui. Recuerda que en las pastelerias y reposterias “Mi dulce andre” hacemos lo productos a tu antojo y gustos.
          </div>
          <Boton></Boton>
        </body>
      </header>
    </div>
  );
}

export default App;
