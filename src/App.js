import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Card, Col, Row } from 'react-bootstrap';
function App() {
  return (
    <>
          <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#">GomyCode</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Container  className="mt-4"  >
          <h1 className='text-center'>Hello, GomyCode</h1>

          <Row>
            <Col> 
            <Card className="card text-start">
              <div className="card-body">
                <h4 className="card-title">search for navbars</h4>
                <p className="card-text">Body</p>
              </div>
            </Card>
            </Col>

            <Col> 
            <Card className="card text-start">
              <div className="card-body">
                <h4 className="card-title">Title</h4>
                <p className="card-text">Body</p>
              </div>
            </Card>
            </Col>

            <Col> 
            <Card className="card text-start">
              <div className="card-body">
                <h4 className="card-title">Title</h4>
                <p className="card-text">Body</p>
              </div>
            </Card>
            </Col>
          </Row>
        </Container>
    </>
  );
}

export default App;
