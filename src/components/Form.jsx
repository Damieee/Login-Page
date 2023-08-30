import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

function MyForm() {
  // State to hold form data
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    alert(`email: ${email}, password: ${password}`);
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
}

export default MyForm;
