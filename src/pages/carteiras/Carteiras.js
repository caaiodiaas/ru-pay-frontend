import { useEffect, useState } from 'react';
import './Carteiras.css';
import CadastroCarteira from '../../components/CadastroCarteira';
import Carteiras from '../../components/Carteiras';

function Carteira() {

  const carteira ={
    saldo : ""
  }

  const [btnCadastrarCarteira, setBtnCadastrarCarteira] = useState(true);

  const [carteiras, setCarteiras] = useState([]);
  const [objCarteira, setObjCarteira] = useState(carteira);

  useEffect(()=>{
    fetch("https://ru-pay-backend.up.railway.app/carteira/listar")
    .then(retorno => retorno.json())
    .then(retorno_convertido => setCarteiras(retorno_convertido))
  }, []);

  const aoDigitar = (e) => {
    setObjCarteira({...objCarteira, [e.target.name]:e.target.value});
  }

  // Cadastrar Carteira
  const cadastrarCarteira = () => {
    fetch('https://ru-pay-backend.up.railway.app/carteira/cadastrar', {
      method: 'post',
      body: JSON.stringify(objCarteira),
      headers:{
        'Content-type':'application/json',
        'Accept':'application/json'
      }
    })
    .then(retorno => retorno.json())
    .then(retorno_convertido => {
      if(retorno_convertido.mensagem !== undefined){
        alert(retorno_convertido.mensagem);
      }else{
        setCarteiras([...carteiras, retorno_convertido]);
        alert('Carteira cadastrada com sucesso!')
        limparCarteira()
      }
    })
  }

  // Alterar Carteira
  const alterarCarteira = () => {
    fetch('https://ru-pay-backend.up.railway.app/carteira/alterar', {
      method: 'put',
      body: JSON.stringify(objCarteira),
      headers:{
        'Content-type':'application/json',
        'Accept':'application/json'
      }
    })
    .then(retorno => retorno.json())
    .then(retorno_convertido => {
      if(retorno_convertido.mensagem !== undefined){
        alert(retorno_convertido.mensagem);
      }else{
        alert('Carteira alterada com sucesso!')
        let vetorTemp = [...carteiras];

        let indice = vetorTemp.findIndex((p)=>{
          return p.id === objCarteira.id;
        })
        vetorTemp[indice] = objCarteira;
        setCarteiras(vetorTemp);
        limparCarteira()
      }
    })
  }

    // Remover Carteira
    const removerCarteira = () => {
      fetch('https://ru-pay-backend.up.railway.app/carteira/remover/'+objCarteira.id, {
        method: 'delete',
        headers:{
          'Content-type':'application/json',
          'Accept':'application/json'
        }
      })
      .then(retorno => retorno.json())
      .then(retorno_convertido => {
        alert(retorno_convertido.mensagem)
        let vetorTemp = [...carteiras];

        let indice = vetorTemp.findIndex((p)=>{
          return p.id === objCarteira.id;
        })
        vetorTemp.splice(indice, 1);
        setCarteiras(vetorTemp);
        limparCarteira();

      })
    }

  // Selecionar Carteira
  const selecionarCarteira = (id) => {
    setObjCarteira(carteiras[id]);
    setBtnCadastrarCarteira(false);
  }

  //Limpar formulario carteira
  const limparCarteira = () => {
    setObjCarteira(carteira);
    setBtnCadastrarCarteira(true);
  }

  return (
    <div>
      <CadastroCarteira cadastrar={btnCadastrarCarteira} eventoTeclado={aoDigitar} cadastrarCarteira={cadastrarCarteira} obj={objCarteira} cancelar={limparCarteira} remover={removerCarteira} alterar={alterarCarteira}/>
      <Carteiras vetor={carteiras} selecionar={selecionarCarteira}/>
    </div>
  );
}

export default Carteira;
