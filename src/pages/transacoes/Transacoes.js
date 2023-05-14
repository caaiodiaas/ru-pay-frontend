import { useEffect, useState } from 'react';
import './Transacoes.css';
import CadastroTransacao from '../../components/CadastroTransacoes';
import Transacoes from '../../components/Transacoes';

function Transacao() {

  const transacao ={
    valor : "",
    data : "",
    tipoTransacao: ""
  }

  const [btnCadastrarTransacao, setBtnCadastrarTransacao] = useState(true);

  const [transacoes, setTransacoes] = useState([]);
  const [objTransacao, setObjTransacao] = useState(transacao);

  useEffect(()=>{
    fetch("https://ru-pay-backend.up.railway.app/transacao/listar")
    .then(retorno => retorno.json())
    .then(retorno_convertido => setTransacoes(retorno_convertido))
  }, []);

  const aoDigitar = (e) => {
    setObjTransacao({...objTransacao, [e.target.name]:e.target.value});
  }

  // Cadastrar Transacao
  const cadastrarTransacao = () => {
    fetch('https://ru-pay-backend.up.railway.app/transacao/cadastrar', {
      method: 'post',
      body: JSON.stringify(objTransacao),
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
        setTransacoes([...transacoes, retorno_convertido]);
        alert('Transacao cadastrada com sucesso!')
        limparTransacao()
      }
    })
  }

  // Alterar Transacao
  const alterarTransacao = () => {
    fetch('https://ru-pay-backend.up.railway.app/transacao/alterar', {
      method: 'put',
      body: JSON.stringify(objTransacao),
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
        alert('Transacao alterada com sucesso!')
        let vetorTemp = [...transacoes];

        let indice = vetorTemp.findIndex((p)=>{
          return p.id === objTransacao.id;
        })
        vetorTemp[indice] = objTransacao;
        setTransacoes(vetorTemp);
        limparTransacao()
      }
    })
  }

    // Remover Transacao
    const removerTransacao = () => {
      fetch('https://ru-pay-backend.up.railway.app/transacao/remover/'+objTransacao.id, {
        method: 'delete',
        headers:{
          'Content-type':'application/json',
          'Accept':'application/json'
        }
      })
      .then(retorno => retorno.json())
      .then(retorno_convertido => {
        alert(retorno_convertido.mensagem)
        let vetorTemp = [...transacoes];

        let indice = vetorTemp.findIndex((p)=>{
          return p.id === objTransacao.id;
        })
        vetorTemp.splice(indice, 1);
        setTransacoes(vetorTemp);
        limparTransacao();

      })
    }

  // Selecionar Transacao
  const selecionarTransacao = (id) => {
    setObjTransacao(transacoes[id]);
    setBtnCadastrarTransacao(false);
  }

  //Limpar formulario transacao
  const limparTransacao = () => {
    setObjTransacao(transacao);
    setBtnCadastrarTransacao(true);
  }

  return (
    <div>
      <CadastroTransacao cadastrar={btnCadastrarTransacao} eventoTeclado={aoDigitar} cadastrarTransacao={cadastrarTransacao} obj={objTransacao} cancelar={limparTransacao} remover={removerTransacao} alterar={alterarTransacao}/>
      <Transacoes vetor={transacoes} selecionar={selecionarTransacao}/>
    </div>
  );
}

export default Transacao;
