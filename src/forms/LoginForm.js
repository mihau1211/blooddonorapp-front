import React from "react";
import { Form, Button, Nav, Container } from 'react-bootstrap';

class LoginForm extends React.Component {
    render() {
        return (
            <div className="login-form">
                <Form.Label className="form-title">Login</Form.Label>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group>
                        <Nav.Item>
                            <Nav.Link eventKey="forgotPassword">Forgot your password? Click here.</Nav.Link>
                        </Nav.Item>
                    </Form.Group>
                    <Button className="buttons" variant="primary" type="submit">
                        Sign In
                    </Button>
                    <Button variant="primary" type="submit">
                        Sign Up
                    </Button>
                </Form>
            </div>
        )
    }
}

export default LoginForm;