import { useEffect, useState } from 'react';
import './Cardapio.css';
import CadastroRefeicao from '../../components/CadastroRefeicao';
import Refeicoes from '../../components/Refeicoes';

function Cardapio() {

  const refeicao = {
    tipoRefeicao: 0,
    data: '',
    valor: '',
    descricao: ''
  }

  const [btnCadastrarRefeicao, setBtnCadastrarRefeicao] = useState(true);

  const [refeicoes, setRefeicoes] = useState([]);
  const [objRefeicao, setObjRefeicao] = useState(refeicao);

  useEffect(() => {
    fetch("https://ru-pay-backend.up.railway.app/refeicao/listar")
      .then(retorno => retorno.json())
      .then(retorno_convertido => setRefeicoes(retorno_convertido))
  }, []);

  const aoDigitar = (e) => {
    setObjRefeicao({ ...objRefeicao, [e.target.name]: e.target.value });
  }

  // Cadastrar Refeicao
  const cadastrarRefeicao = () => {
    fetch('https://ru-pay-backend.up.railway.app/refeicao/cadastrar', {
      method: 'post',
      body: JSON.stringify(objRefeicao),
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
          setRefeicoes([...refeicoes, retorno_convertido]);
          alert('Refeição cadastrada com sucesso!')
          limparRefeicao()
        }
      })
  }

  // Alterar Refeicao
  const alterarRefeicao = () => {
    fetch('https://ru-pay-backend.up.railway.app/refeicao/alterar', {
      method: 'put',
      body: JSON.stringify(objRefeicao),
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
          alert('Refeição alterada com sucesso!')
          let vetorTemp = [...refeicoes];

          let indice = vetorTemp.findIndex((p) => {
            return p.id === objRefeicao.id;
          })
          vetorTemp[indice] = objRefeicao;
          setRefeicoes(vetorTemp);
          limparRefeicao()
        }
      })
  }

  // Remover Refeicao
  const removerRefeicao = () => {
    fetch('https://ru-pay-backend.up.railway.app/refeicao/remover/' + objRefeicao.id, {
      method: 'delete',
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(retorno => retorno.json())
      .then(retorno_convertido => {
        alert(retorno_convertido.mensagem)
        let vetorTemp = [...refeicoes];

        let indice = vetorTemp.findIndex((p) => {
          return p.id === objRefeicao.id;
        })
        vetorTemp.splice(indice, 1);
        setRefeicoes(vetorTemp);
        limparRefeicao();

      })
  }

  // Selecionar Refeicao
  const selecionarRefeicao = (id) => {
    setObjRefeicao(refeicoes[id]);
    setBtnCadastrarRefeicao(false);
  }

  //Limpar formulario refeicao
  const limparRefeicao = () => {
    setObjRefeicao(refeicao);
    setBtnCadastrarRefeicao(true);
  }

  return (
    <div>
      <Refeicoes vetor={refeicoes} selecionar={selecionarRefeicao} />
      <CadastroRefeicao cadastrar={btnCadastrarRefeicao} eventoTeclado={aoDigitar} cadastrarRefeicao={cadastrarRefeicao} obj={objRefeicao} cancelar={limparRefeicao} remover={removerRefeicao} alterar={alterarRefeicao} />

    </div>
  );
}

export default Cardapio;
