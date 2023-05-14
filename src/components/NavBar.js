import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="#FCFCFC" variant="light">
        <Container>
          <Navbar.Brand href="#home"><img
              alt=""
              src="/logo.png"
              width="235"
              height="57"
              className="d-inline-block align-top"
            />{' '}
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Início</Nav.Link>
            <Nav.Link href="#features">Clientes</Nav.Link>
            <Nav.Link href="#pricing">Transações</Nav.Link>        
            <Nav.Link href="#pricing">Refeições</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;