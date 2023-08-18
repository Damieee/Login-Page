import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import MyButton from './Button'; // Update the import path for MyButton component

function MyForm() {
  // State to hold form data
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  // Constant to update form data when inputs change
  const handleInputChange = (event) => {
    const { id, value } = event.target;
    // Update the state with the new value while keeping the rest unchanged
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  // Function to handle form submission
  const handleSubmit = () => {
    console.log('Form data:', formData);
  };

  return (
    <div>
      <Form>
        {/* Username input */}
        <Form.Group controlId="formUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your username"
            value={formData.username}
            onChange={handleInputChange}
          />
        </Form.Group>
        {/* Password input */}
        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </Form.Group>
        {/* Button component for form submission */}
        <MyButton onSubmit={handleSubmit} />
      </Form>
    </div>
  );
}

export default MyForm;
