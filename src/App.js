import './App.css';

import react, { useState} from 'react';



import Cookies from 'universal-cookie';

const cookie = new Cookies();


function App() {
  const [conectado, setConectado]= useState(false);
  const acceder = (estado)=> {
    setConectado(estado)
  }
  
  return (

    cookie.get("usuario") ? 
      window.location.href = 'http://localhost:3000/MenuPrincipal' : 
      window.location.href = 'http://localhost:3000/Login'
  )
}

export default App;
