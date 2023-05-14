
function Refeicoes({vetor, selecionar}){
    return(
        <table className='table'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Tipo</th>
                    <th>Data</th>
                    <th>Valor(Créditos)</th>
                    <th>Descrição</th>
                </tr>
            </thead>
            <tbody>
                {
                    vetor.map((obj,id) => (
                        <tr>
                            <td>{obj.id}</td>
                            <td>{obj.tipoRefeicao}</td>
                            <td>{obj.data}</td>
                            <td>{obj.valor}</td>
                            <td>{obj.descricao}</td>
                            <td><button onClick={() => {selecionar(id)}} className="btn btn-success">Selecionar</button></td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}
export default Refeicoes