
function CadastroRefeicao({cadastrar, eventoTeclado, cadastrarRefeicao, obj, cancelar, remover, alterar}){
    return(
        <form>
            <div>
               
                
                <label>
                <input type="radio" value={0} onChange={eventoTeclado} name="tipoRefeicao" />
                Almoço
                <input type="radio" value={1} onChange={eventoTeclado} name="tipoRefeicao"  />
                Jantar
                </label>
                <input type='date' name='data' value={obj.data} onChange={eventoTeclado} placeholder="Data" className='form-control'></input>
                <input type='number' name='valor' value={obj.valor} onChange={eventoTeclado} placeholder="Valor" className='form-control'></input>
                <input type='text' name ='descricao' value={obj.descricao} onChange={eventoTeclado} placeholder="Descrição" className='form-control'></input>
            </div>
            
            {
                cadastrar
                ?
                <div>
                    <input type='button' value='Cadastrar' onClick={cadastrarRefeicao} className='btn btn-primary'></input>
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
export default CadastroRefeicao