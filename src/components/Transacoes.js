
function Transacoes({vetor, selecionar}){
    return(
        <table className='table'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Valor</th>
                    <th>Data</th>
                    <th>TipoTransacao</th>
                </tr>
            </thead>
            <tbody>
                {
                    vetor.map((obj,id) => (
                        <tr>
                            <td>{obj.id}</td>
                            <td>{obj.valor}</td>
                            <td>{obj.data}</td>
                            <td>{obj.tipoTransacao}</td>
                            <td><button onClick={() => {selecionar(id)}} className="btn btn-success">Selecionar</button></td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}
export default Transacoes