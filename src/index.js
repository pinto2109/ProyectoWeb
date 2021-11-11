import React from 'react';
import ReactDOM from 'react-dom';
import './css/bootstrap.min.css';
import './index.css';
import App from './App';
import Pagina from './pagina';
import Login from './componentes/Login.jsx';
import Menu from './componentes/Menu.jsx';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Switch } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    
    <Switch>
      <Route exact path="/" component={App}/>
      <Route exact path="/pagina" component={Pagina} />
      <Route exact path="/Login" component={Login} />
      <Route exact path="/Menu" component={Menu} />
    </Switch>  
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
