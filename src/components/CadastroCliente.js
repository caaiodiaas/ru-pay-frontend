
function CadastroCliente({cadastrar, eventoTeclado, cadastrarCliente, obj, cancelar, remover, alterar}){
    return(
        <form>
            <div>
                <input type='text' name='login' value={obj.login} onChange={eventoTeclado} placeholder="Login" className='form-control'></input>
                <input type='text' name='senha' value={obj.senha} onChange={eventoTeclado} placeholder="Senha" className='form-control'></input>
                <input type='text' name='email' value={obj.email} onChange={eventoTeclado} placeholder="Email" className='form-control'></input>
                <input type='text' name ='nome' value={obj.nome} onChange={eventoTeclado} placeholder="Nome" className='form-control'></input>
                <input type='text' name ='matricula' value={obj.matricula} onChange={eventoTeclado} placeholder="Matrícula" className='form-control'></input>
                <input type='text' name ='creditos' value={obj.carteira?.saldo} onChange={eventoTeclado} placeholder="Créditos" className='form-control'></input>
            </div>
            
            {
                cadastrar
                ?
                <div>
                    <input type='button' value='Cadastrar' onClick={cadastrarCliente} className='btn btn-primary'></input>
                </div>
                :
                <div>
                    <input type='button' value='Cancelar' onClick={cancelar} className='btn btn-secondary'></input>
                    <input type='button' value='Remover' onClick={remover} className='btn btn-danger'></input>
                    <input type='button' value='Alterar' onClick={alterar} className='btn btn-warning'></input>
                </div>
            }
            
        </form>
    )
}
export default CadastroCliente