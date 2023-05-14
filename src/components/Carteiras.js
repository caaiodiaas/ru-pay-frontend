
function Carteiras({vetor, selecionar}){
    return(
        <table className='table'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Saldo</th>
                </tr>
            </thead>
            <tbody>
                {
                    vetor.map((obj,id) => (
                        <tr>
                            <td>{obj.id}</td>
                            <td>{obj.saldo}</td>
                            <td><button onClick={() => {selecionar(id)}} className="btn btn-success">Selecionar</button></td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}
export default Carteiras