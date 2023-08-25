
import React from 'react';
import {Form} from 'react-bootstrap';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';




function onClickEvent(event, onSubmit) {

  alert('User Logged in');
}

function MyButton({ onSubmit }) {
  return (
    <Button 
    variant="primary" 
    type="submit" 
    className="w-100" 
    onClick={(event) => onClickEvent(event, onSubmit)}
  
    >
      Login
    </Button>
  );
}
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

  // State to hold form data

  const [userEmail, setuserEmail] = useState("");
  
  const [userPassword, setuserPassword] = useState("");

  const onInputChange = (setState) => (event) => {
    setState(event.target.value);
  };

  // Function to handle form submission
  const handleSubmit = 
  () => async (event, userEmail, userPassword) => {
    event.preventDefault();

    console.log(`userEmail: ${userEmail}, Password: ${userPassword}`);




    // Clear previous error messages
    setuserEmail("");
    setuserPassword("");

      if (!userEmail || userEmail.trim().length === 0 || !userEmail.includes("@")) {
        setuserEmail("Invalid email");
      }

      if (!userPassword || userPassword.trim().length < 6) {
        setuserPassword("Invalid password");
      }

      if (userEmail === "Invalid email" || userPassword === "Invalid password") {
    return;
      }

    
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
            onSubmit={handleSubmit}
          />
        </Form.Group>
        {/* Button component for form submission */}
        <MyButton/>
      </Form>
    </div>

  );
}

export default MyForm;