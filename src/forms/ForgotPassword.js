import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import '../css/forms.css'

const button = {
    marginTop: "1vh"
}

class ForgotPassword extends React.Component {
    render() {
        return (
            <div className="forgot-form">
                <Form.Label className="form-title">Remind your password</Form.Label>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Enter an email assigned to your account</Form.Label>
                        <Form.Control type="text" placeholder="Email" />
                    </Form.Group>
                    <Button style={button} variant="primary" type="submit">
                        Add donation
                    </Button>
                </Form>
            </div>
        )
    }
}

export default ForgotPassword;