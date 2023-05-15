import { useEffect, useState } from 'react';
import './Clientes.css';
import CadastroCliente from '../../components/CadastroCliente';
import Clientes from '../../components/Clientes';

function Cliente() {

  const carteira = {
    saldo: 0,
    cliente: {
      id: 0
    }
  }

  const cliente = {
    login: "",
    senha: "",
    email: "",
    nome: "",
    matricula: ""
  }

  const [btnCadastrarCliente, setBtnCadastrarCliente] = useState(true);

  const [clientes, setClientes] = useState([]);
  const [objCliente, setObjCliente] = useState(cliente);

  useEffect(() => {
    fetch("https://ru-pay-backend.up.railway.app/cliente/listar")
      .then(retorno => retorno.json())
      .then(retorno_convertido => setClientes(retorno_convertido))
  }, []);

  const aoDigitar = (e) => {
    setObjCliente({ ...objCliente, [e.target.name]: e.target.value });
  }

  // Cadastrar Cliente
  const cadastrarCliente = () => {
    fetch('https://ru-pay-backend.up.railway.app/cliente/cadastrar', {
      method: 'post',
      body: JSON.stringify(objCliente),
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(retorno => retorno.json())
      .then(retorno_convertido => {
        if (retorno_convertido.mensagem !== undefined) {
          alert(retorno_convertido.mensagem);
        } else {
          setClientes([...clientes, retorno_convertido]);
          alert('Cliente cadastrado com sucesso!')

          limparCliente()
        }
      })
  }

  // Alterar Cliente
  const alterarCliente = () => {
    fetch('https://ru-pay-backend.up.railway.app/cliente/alterar', {
      method: 'put',
      body: JSON.stringify(objCliente),
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(retorno => retorno.json())
      .then(retorno_convertido => {
        if (retorno_convertido.mensagem !== undefined) {
          alert(retorno_convertido.mensagem);
        } else {
          alert('Cliente alterado com sucesso!')
          let vetorTemp = [...clientes];

          let indice = vetorTemp.findIndex((p) => {
            return p.id === objCliente.id;
          })
          vetorTemp[indice] = objCliente;
          setClientes(vetorTemp);
          limparCliente()
        }
      })
  }

  // Remover Cliente
  const removerCliente = () => {
    fetch('https://ru-pay-backend.up.railway.app/cliente/remover/' + objCliente.id, {
      method: 'delete',
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(retorno => retorno.json())
      .then(retorno_convertido => {
        alert(retorno_convertido.mensagem)
        let vetorTemp = [...clientes];

        let indice = vetorTemp.findIndex((p) => {
          return p.id === objCliente.id;
        })
        vetorTemp.splice(indice, 1);
        setClientes(vetorTemp);
        limparCliente();

      })
  }

  // Selecionar Cliente
  const selecionarCliente = (id) => {
    setObjCliente(clientes[id]);
    setBtnCadastrarCliente(false);
  }

  //Limpar formulario cliente
  const limparCliente = () => {
    setObjCliente(cliente);
    setBtnCadastrarCliente(true);
  }

  return (
    <div>

      <Clientes vetor={clientes} selecionar={selecionarCliente} />
      <CadastroCliente cadastrar={btnCadastrarCliente} eventoTeclado={aoDigitar} cadastrarCliente={cadastrarCliente} obj={objCliente} cancelar={limparCliente} remover={removerCliente} alterar={alterarCliente} />

    </div>
  );
}

export default Cliente;
