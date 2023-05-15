import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';



function Clientes({ vetor, selecionar }) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [busca, setBusca] = useState('');
    return (
        <section className='m-4'>
            <div className='App'>
                <input
                    type="text"
                    value={busca}
                    onChange={(ev) => setBusca(ev.target.value)} />
            </div>
            <Container fluid>

                <Row>
                    {vetor.map((obj, id) => (
                        <Col sm={3} className='p-3'>
                            <div className='holder'>
                                <Card>
                                    <Card.Body>
                                        <Card.Text>
                                            <p>{obj.nome}</p>
                                            <p>{obj.email}</p>
                                            <p>{obj.matricula}</p>
                                        </Card.Text>


                                        <Button className='btn btn-primary' onClick={handleShow}>Adicionar Créditos</Button>
                                        <Modal show={show} onHide={handleClose}>
                                            <Modal.Header closeButton>
                                                <Modal.Title>Modal heading</Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                                            <Modal.Footer>
                                                <Button variant="secondary" onClick={handleClose}>
                                                    Close
                                                </Button>
                                                <Button variant="primary" onClick={handleClose}>
                                                    Save Changes
                                                </Button>
                                            </Modal.Footer>
                                        </Modal>
                                    </Card.Body>
                                </Card>
                            </div>

                        </Col>
                    ))}</Row>
            </Container>


        </section>
    )
}
export default Clientes