import { React, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function MyForm() {
  // State to hold form data
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    alert(`email: ${email}, password: ${password}`);
  };

  return (
  
        <Container className="d-flex justify-content-center align-items-center vh-100">
          <Row className="w-100">
            <Col md={4} className="mx-auto">
              <h2 className="mb-4 text-center">Login</h2> 
              <Form onSubmit={submitHandler}>
                {/* Username input */}
                <Form.Group controlId="formUsername">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your username"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>
                {/* Password input */}
                <Form.Group controlId="formPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>
                {/* Button component for form submission */}
                <Button variant="primary" type="submit" className="w-100 mt-4">
                  Login
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
  
      );
}

export default MyForm;
