import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Cardapio from './pages/cardapio/Cardapio';
import './App.css';
import CadastrarEmpresa from './pages/empresa/CadastrarEmpresa';
import AlterarEmpresa from './pages/empresa/AlterarEmpresa';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import NavBar from './components/NavBar';

import Brand from './assets/logo.svg'

import Clientes from './pages/clientes/Clientes'
import Carteiras from './pages/carteiras/Carteiras';
import Transacoes from './pages/transacoes/Transacoes';

function App() {
  return (
    <Router>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src={Brand}
              className="d-inline-block align-top"
            />
          </Navbar.Brand>

        </Container>
        <Link to="/clientes"><input type='button' value='Clientes' className='btn btn-primary'></input></Link>
        <Link to="/cardapio"><input type='button' value='Cardápio' className='btn btn-primary'></input></Link>
        <Link to="/editar-perfil"><input type='button' value='Perfil' className='btn btn-primary'></input></Link>

        <Navbar.Collapse className="justify-content-end m-3">
          <Navbar.Text>
            Signed in as: <a href="#login">Mark Otto</a>
          </Navbar.Text>
        </Navbar.Collapse>


      </Navbar>

      <Switch>
        <Route path="/cardapio" exact>
          <Cardapio />
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