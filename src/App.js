import {BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Cardapio from './pages/cardapio/Cardapio';
import './App.css';
import CadastrarEmpresa from './pages/empresa/CadastrarEmpresa';
import AlterarEmpresa from './pages/empresa/AlterarEmpresa';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import NavBar from './components/NavBar';


import Clientes from './pages/clientes/Clientes'
import Carteiras from './pages/carteiras/Carteiras';
import Transacoes from './pages/transacoes/Transacoes';

function App() {
  return (
    <Router>
      <nav>
        <div>
        <img
              alt=""
              src="/logo.png"
              width="235"
              height="57"
              className="d-inline-block align-top"
            />
            <Link to="/clientes"><input type='button' value='Clientes' className='btn btn-primary'></input></Link>
            <Link to="/cardapio"><input type='button' value='Cardápio' className='btn btn-primary'></input></Link>
            <Link to="/editar-perfil"><input type='button' value='Perfil' className='btn btn-primary'></input></Link>
            

        </div>
      
        
      </nav>

      <Switch>
        <Route path="/cardapio" exact>
          <Cardapio/>
        </Route>
        <Route path="/editar-perfil">
          <AlterarEmpresa />
        </Route>
        <Route path="/clientes">
          <Clientes />
        </Route>
      </Switch>
    </Router>
  );
}
export default App