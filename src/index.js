import React from 'react';
import ReactDOM from 'react-dom';
import './css/bootstrap.min.css';
import './index.css';
import App from './App';
import Pagina from './pagina';
import Login from './componentes/Login.jsx';
import MenuAdmin from './componentes/MenuAdmin.jsx';
import MenuUsuario from './componentes/MenuUsuario';
import CrearUsuario from './componentes/CrearUsuario';
import Postres from './componentes/PaginaPostres';
import InfoMora from './componentes/InfoMora';
import InfoChoco from './componentes/InfoChoco';
import InfoVainilla from './componentes/InfoVainilla';
import InfoFresa from './componentes/InfoFresa';
import InfoPie from './componentes/InfoPie';
import InfoLimon from './componentes/InfoLimon';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Switch } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    
    <Switch>
      <Route exact path="/" component={App}/>
      <Route exact path="/pagina" component={Pagina} />
      <Route exact path="/Login" component={Login} />
      <Route exact path="/MenuAdmin" component={MenuAdmin} />
      <Route exact path="/MenuPrincipal" component={MenuUsuario}/>
      <Route exact path="/CrearUsuario" component={CrearUsuario} />
      <Route exact path="/Postres" component={Postres} />
      <Route exact path="/InfoMora" component={InfoMora} />
      <Route exact path="/InfoChoco" component={InfoChoco} />
      <Route exact path="/InfoPie" component={InfoPie} />
      <Route exact path="/InfoFresa" component={InfoFresa} />
      <Route exact path="/InfoVainilla" component={InfoVainilla} />
      <Route exact path="/InfoLimon" component={InfoLimon} />

    </Switch>  
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
