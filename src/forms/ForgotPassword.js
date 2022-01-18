import React from "react";
import { Container, Form, Button } from "react-bootstrap";

class ForgotPassword extends React.Component {
    render() {
        return (
            <Container className="donation-form">
                <Form.Label className="form-title">Remind your password</Form.Label>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Enter an email assigned to your account</Form.Label>
                        <Form.Control type="text" placeholder="Email" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Add donation
                    </Button>
                </Form>
            </Container>
        )
    }
}

export default ForgotPassword;