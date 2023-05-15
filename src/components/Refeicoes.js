import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';

function Refeicoes({ vetor, selecionar }) {
    return (
        <><section className='m-4'>

            <Container fluid>

                <Row>
                    {vetor.map((obj, id) => (
                        <Col sm={3} className='p-3'>
                            <div className='holder'>
                                <Card>
                                    <Card.Body>
                                        <Card.Text>
                                            <p>{obj.data}</p>
                                            <p>{obj.tipoRefeicao}</p>
                                            <p>{obj.descricao}</p>
                                        </Card.Text>


                                        <Button className='btn btn-primary' onClick={selecionar(id)}>Alterar refeição</Button>

                                    </Card.Body>
                                </Card>
                            </div>

                        </Col>
                    ))}</Row>
            </Container>


        </section><table className='table'>
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
                    {vetor.map((obj, id) => (
                        <tr>
                            <td>{obj.id}</td>
                            <td>{obj.tipoRefeicao}</td>
                            <td>{obj.data}</td>
                            <td>{obj.valor}</td>
                            <td>{obj.descricao}</td>
                            <td><button onClick={() => { selecionar(id) }} className="btn btn-success">Selecionar</button></td>
                        </tr>
                    ))}
                </tbody>
            </table></>
    )
}
export default Refeicoes