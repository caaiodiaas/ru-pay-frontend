
function CadastroCarteira({cadastrar, eventoTeclado, cadastrarCarteira, obj, cancelar, remover, alterar}){
    return(
        <form>
            <div>
                <input type='text' name='saldo' value={obj.saldo} onChange={eventoTeclado} placeholder="Saldo" className='form-control'></input>
            </div>
            
            {
                cadastrar
                ?
                <div>
                    <input type='button' value='Cadastrar' onClick={cadastrarCarteira} className='btn btn-primary'></input>
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
export default CadastroCarteira