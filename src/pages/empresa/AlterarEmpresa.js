import { useEffect, useState } from 'react';
import AlteracaoEmpresa from '../../components/AlteracaoEmpresa';


function AlterarEmpresa() {

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

  // Alterar Empresa
  const alterarEmpresa = () => {
    fetch('https://ru-pay-backend.up.railway.app/empresa/alterar', {
      method: 'put',
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
        alert('Empresa alterada com sucesso!')
        let vetorTemp = [...empresas];

        let indice = vetorTemp.findIndex((p)=>{
          return p.id === objEmpresa.id;
        })
        vetorTemp[indice] = objEmpresa;
        setEmpresas(vetorTemp);
        limparEmpresa()
      }
    })
  }

  //Limpar formulario empresa
  const limparEmpresa = () => {
    setObjEmpresa(empresa);
  }

  return (
    <div>
      <AlteracaoEmpresa eventoTeclado={aoDigitar} obj={objEmpresa} cancelar={limparEmpresa} alterar={alterarEmpresa}/>
    </div>
  );
}

export default AlterarEmpresa;
