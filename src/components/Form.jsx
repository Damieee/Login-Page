import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import MyButton from './Button'; // Update the import path for MyButton component

function MyForm() {
  // State to hold form data

  const [userEmail, setuserEmail] = useState("");
  
  const [userPassword, setuserPassword] = useState("");

  const onInputChange = (setState) => (event) => {
    setState(event.target.value);
  };

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Clear previous error messages
    setuserEmail("");
    setuserPassword("");

      if (!userEmail || userEmail.trim().length === 0 || !userEmail.includes("@")) {
        setuserEmail("Invalid email");
      }

      if (!userPassword || userPassword.trim().length < 6) {
        setuserPassword("Invalid password");
      }

      if (setuserEmail || setuserPassword) {
        return;
      }

    alert(`userEmail: ${setuserEmail}, Password: ${setuserPassword}`);
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
            value={userEmail}
            onChange={onInputChange(setuserEmail)}
          
          />
        </Form.Group>
        {/* Password input */}
        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your password"
            value={userPassword}
            onChange= {onInputChange(setuserPassword)}
          />
        </Form.Group>
        {/* Button component for form submission */}
        <MyButton onSubmit={handleSubmit} />
      </Form>
    </div>
  );
};


export default MyForm;