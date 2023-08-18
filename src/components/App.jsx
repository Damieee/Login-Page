import React from 'react';
import { Container, Row, Col, Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyForm from './Form';
import Header from './Header';


function App() {
  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Row className="w-100">
        <Col md={4} className="mx-auto">
          <Form>
            <Header/>
            <MyForm/>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
