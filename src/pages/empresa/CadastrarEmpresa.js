import { useEffect, useState } from 'react';
import './CadastrarEmpresa.css';
import CadastroEmpresa from '../../components/CadastroEmpresa';

function CadastrarEmpresa() {

  const empresa ={
    login : '',
    senha : '',
    email: '',
    nomeResponsavel: '',
    nomeEmpresa: '',
    cnpj: '',
    universidade: ''
  }

  const [empresas, setEmpresas] = useState([]);
  const [objEmpresa, setObjEmpresa] = useState(empresa);

  useEffect(()=>{
    fetch("https://ru-pay-backend.up.railway.app/empresa/listar")
    .then(retorno => retorno.json())
    .then(retorno_convertido => setEmpresas(retorno_convertido))
  }, []);

  const aoDigitar = (e) => {
    setObjEmpresa({...objEmpresa, [e.target.name]:e.target.value});
  }

  // Cadastrar Empresa
  const cadastrarEmpresa = () => {
    fetch('https://ru-pay-backend.up.railway.app/empresa/cadastrar', {
      method: 'post',
      body: JSON.stringify(objEmpresa),
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
        setEmpresas([...empresas, retorno_convertido]);
        alert('Empresa cadastrada com sucesso!')
        limparEmpresa()
      }
    })
  }

  const limparEmpresa = () => {
    setObjEmpresa(empresa);
  }

  return (
    <div>
      <CadastroEmpresa eventoTeclado={aoDigitar} cadastrarEmpresa={cadastrarEmpresa} obj={objEmpresa}/>
    </div>
  );
}

export default CadastrarEmpresa;
