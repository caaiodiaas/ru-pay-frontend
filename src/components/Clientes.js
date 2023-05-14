
function Clientes({vetor, selecionar}){
    return(
        <table className='table'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Login</th>
                    <th>Senha</th>
                    <th>Email</th>
                    <th>Nome</th>
                    <th>Matrícula</th>
                    <th>Créditos</th>
                </tr>
            </thead>
            <tbody>
                {
                    vetor.map((obj,id) => (
                        <tr>
                            <td>{obj.id}</td>
                            <td>{obj.login}</td>
                            <td>{obj.senha}</td>
                            <td>{obj.email}</td>
                            <td>{obj.nome}</td>
                            <td>{obj.matricula}</td>
                            <td>{obj.carteira?.saldo}</td>
                            <td><button onClick={() => {selecionar(id)}} className="btn btn-success">Selecionar</button></td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}
export default Clientes