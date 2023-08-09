import React from 'react';
import {Form} from 'react-bootstrap';


function MyForm() {
  return ( 
        <div>
            <Form.Group controlId="formUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Enter your username" />
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter your password" />
            </Form.Group>
        </div>
  );
}

export default MyForm;