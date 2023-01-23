import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleEmail = (e) =>{
        const email = e.target.value;
        setEmail(email)
    }
    const handlePassword = (e) =>{
        const password = e.target.value;
        setPassword(password);
    }

    const handleFormSubmit = (e) =>{
        e.preventDefault();
        const user = {email, password}
        console.log(user);
    }
  return (
    <div className="w-50 m-auto">
      <Form onSubmit={handleFormSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We will never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control onBlur={handlePassword} type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Sign Up
        </Button>
      </Form>
    </div>
  );
};

export default Login;
