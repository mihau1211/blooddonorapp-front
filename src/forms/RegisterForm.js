import React from "react";
import "../css/forms.css";
import { Form, Button, FloatingLabel, Row, Col, Container } from 'react-bootstrap';

const col = {
    marginLeft: "1vw",
    marginRight: "1vw",
}

class RegisterForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.setDate = this.setDate.bind(this);
    }

    handleChange(event){
        console.log(event.target.value)
    }

    setDate(){
        var date = new Date();
        console.log(date.getDate()+"/"+date.getMonth()+1+"/"+(date.getYear()+1900));
        var stringDate = date.getDate()+"/"+date.getMonth()+1+"/"+(date.getYear()+1900);
        return stringDate;
    }


    render() {
        return (
            <div className="register-form">
                <Form.Label className="form-title">Registration</Form.Label>

                <Row>
                    <Col style={col}>
                        <Form.Label>Acoount details</Form.Label>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control type="text" placeholder="Enter username" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control type="password" placeholder="Enter password" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control type="password" placeholder="Confirm password" />
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col style={col}>
                        <Form.Label>Donor info</Form.Label>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="text" placeholder="Enter name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control type="text" placeholder="Enter surname" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Select birth date</Form.Label>
                                <Form.Control type="date" name="dob" placeholder="Date of Birth" onChange={this.handleChange} defaultValue={this.setDate}/>
                            </Form.Group>
                        </Form>
                        <FloatingLabel controlId="floatingSelect" >
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Choose gender</Form.Label>
                                <Form.Select aria-label="Floating label select example">
                                    <option>Gender</option>
                                    <option value="1">Male</option>
                                    <option value="2">Female</option>
                                    <option value="3">Other</option>
                                </Form.Select>
                            </Form.Group>
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingSelect" >
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Choose blood type</Form.Label>
                                <Form.Select aria-label="Floating label select example">
                                    <option>Blood types</option>
                                    <option value="1">0+</option>
                                    <option value="2">0-</option>
                                    <option value="3">A+</option>
                                    <option value="4">A-</option>
                                    <option value="5">B+</option>
                                    <option value="6">B-</option>
                                    <option value="7">AB+</option>
                                    <option value="8">AB-</option>
                                </Form.Select>
                            </Form.Group>
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingSelect" >
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Choose donation center</Form.Label>
                                <Form.Select aria-label="Floating label select example">
                                    <option>Donation centers</option>
                                    <option value="1">Zielona G??ra</option>
                                    <option value="2">Wroc??aw</option>
                                    <option value="3">Pozna??</option>
                                    <option value="4">Warszawa</option>
                                </Form.Select>
                            </Form.Group>
                        </FloatingLabel>
                    </Col>
                </Row>
                <Button onClick={this.setDate}>
                    Confirm
                </Button>
            </div>
        )
    }
}

export default RegisterForm;