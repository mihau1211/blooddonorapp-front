import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import "../css/forms.css";

class DonationForm extends React.Component {
    render() {
        return (
            <div className="donation-form">
                <Form.Label className="form-title">Add new donation</Form.Label>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Select birth date</Form.Label>
                        <Form.Control type="date" name="dob" placeholder="Date of Birth" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Quantity of donation</Form.Label>
                        <Form.Control type="number" placeholder="Quantity" min={300} max={500} value={450}/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Add donation
                    </Button>
                </Form>
            </div>
        )
    }
}

export default DonationForm;