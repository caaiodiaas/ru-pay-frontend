import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Cardapio from './pages/cardapio/Cardapio';
import CadastrarEmpresa from './pages/empresa/CadastrarEmpresa';
import AlterarEmpresa from './pages/empresa/AlterarEmpresa';

import NavBar from './components/NavBar';


import Clientes from './pages/clientes/Clientes'
import Carteiras from './pages/carteiras/Carteiras';
import Transacoes from './pages/transacoes/Transacoes';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar />
    <Clientes />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
