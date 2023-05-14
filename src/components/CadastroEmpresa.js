
function CadastroEmpresa({eventoTeclado, cadastrarEmpresa, obj}){
    return(
        <form>
            <div>
               
                <input type='text' name='login' value={obj.login} onChange={eventoTeclado} placeholder="Login" className='form-control'></input>
                <input type='password' name='senha' value={obj.senha} onChange={eventoTeclado} placeholder="Senha" className='form-control'></input>
                <input type='text' name='email' value={obj.email} onChange={eventoTeclado} placeholder="Email" className='form-control'></input>
                <input type='text' name='nomeResponsavel' value={obj.nomeResponsavel} onChange={eventoTeclado} placeholder="Nome do responsável" className='form-control'></input>
                <input type='text' name='nomeEmpresa' value={obj.nomeEmpresa} onChange={eventoTeclado} placeholder="Nome da empresa" className='form-control'></input>
                <input type='text' name='cnpj' value={obj.cnpj} onChange={eventoTeclado} placeholder="CNPJ" className='form-control'></input>
                <input type='text' name='universidade' value={obj.universidade} onChange={eventoTeclado} placeholder="Universidade" className='form-control'></input>

            </div>
            <div>
                <input type='button' value='Cadastrar' onClick={cadastrarEmpresa} className='btn btn-primary'></input>
            </div>

        </form>
    )
}
export default CadastroEmpresa