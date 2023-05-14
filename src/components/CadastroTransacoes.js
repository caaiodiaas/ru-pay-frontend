
function CadastroTransacao({cadastrar, eventoTeclado, cadastrarTransacao, obj, cancelar, remover, alterar}){
    return(
        <form>
            <div>
                <input type='text' name='valor' value={obj.valor} onChange={eventoTeclado} placeholder="Valor" className='form-control'></input>
                <input type='date' name='data' value={obj.data} onChange={eventoTeclado} placeholder="Data" className='form-control'></input>
                <input type='text' name='tipoTransacao' value={obj.tipoTransacao} onChange={eventoTeclado} placeholder="Tipo da Transação" className='form-control'></input>
            </div>
            
            {
                cadastrar
                ?
                <div>
                    <input type='button' value='Cadastrar' onClick={cadastrarTransacao} className='btn btn-primary'></input>
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
export default CadastroTransacao