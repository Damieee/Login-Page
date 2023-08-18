import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import MyButton from './Button'; // Update the import path

function MyForm() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleSubmit = () => {
    console.log('Form data:', formData);
  };

  return (
    <div>
      <Form>
        <Form.Group controlId="formUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your username"
            value={formData.username}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </Form.Group>
        <MyButton onSubmit={handleSubmit} />
      </Form>
    </div>
  );
}

export default MyForm;
