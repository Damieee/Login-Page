import React from 'react';
import { Container, Row, Col, Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyForm from './Form';
import Header from './Header';

import MyButton from './Button';
import Containers from '../my_container.js';


function App() {
  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Row className="w-100">
        <Col md={4} className="mx-auto">
          <Form>
            <Header/>
            <MyForm/>
            <MyButton 
              name = {Containers[0].Login0}
            />
            <MyButton 
              name = {Containers[1].Login1}
            />
            <MyButton 
              name = {Containers[2].Login2}
            />
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
