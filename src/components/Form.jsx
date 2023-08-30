<<<<<<< HEAD
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';



function onClickEvent(event, onSubmit) {

  alert('User Logged in');
=======
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

function MyForm() {
  // State to hold form data

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log("email", email, "password", password);
  };

  return (
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
      <Button variant="primary" type="submit" className="w-100">
        Login
      </Button>
    </Form>
  );
>>>>>>> 92ef3f43fd6d7111801dca2822ef6c2449990c56
}

function MyForm() {
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
        <Button 
            variant="primary" 
            type="submit" 
            className="w-100" 
            onClick={(event, onSubmit) => onClickEvent(event, onSubmit)}
            >
            Login
          </Button>
      </Form>
    </div>
  );
};


export default MyForm;