import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import App from './App';
import Cardapio from './pages/cardapio/Cardapio';
import AlterarEmpresa from './pages/empresa/AlterarEmpresa';
import Clientes from './components/Clientes';

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/clientes" component={Clientes} />
      <Route path="/cardapio" component={Cardapio} />
      <Route path="/editar-perfil" component={AlterarEmpresa} />
    </Switch>
  </Router>,
  document.getElementById('root')
);