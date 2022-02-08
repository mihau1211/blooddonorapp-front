import React from "react";
import { Form, Button, Nav, Container } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

const button = {
    marginRight: "1vw",
    marginLeft: "1vw"
}

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            isLogged: false,
            user: []
        }
    }

    emailChange = e => {
        this.setState({ email: e.target.value })
    }

    passwordChange = e => {
        this.setState({ password: e.target.value })
    }

    redirectRegister = () => {
        const { history } = this.props;
        if (history) history.push('/register');
    }

    loginFunction = async () => {
        const user = {
            email: this.state.email,
            password: this.state.password
        }

        await axios({
            method: 'POST',
            url: 'http://localhost:8080/user/login',
            data: user
        }).then((res) => {
            if (res.data != "") {
                this.setState({ user: res.data })
                if (res.data.userRole === "DONOR") {
                    this.setState({ isLogged: true })
                }
            }
        }).catch((err) => {
            return err;
        });
    }

    redirectLogin = () => {
        const { history } = this.props;
        if(history && this.state.isLogged) history.push('/donor');
    }

    loginSubmit = async event => {
        event.preventDefault();
        await this.loginFunction();
        this.props.handleCallback(this.state);
        this.redirectLogin()
    }

    render() {
        return (
            <div className="login-form">
                <Form.Label className="form-title">Login</Form.Label>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange={this.emailChange} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={this.passwordChange} />
                    </Form.Group>
                    <Form.Group>
                        <Nav.Item>
                            <Nav.Link eventKey="forgotPassword">Forgot your password? Click here.</Nav.Link>
                        </Nav.Item>
                    </Form.Group>
                    <Button style={button} variant="primary" type="button" onClick={this.loginSubmit}>
                        Sign In
                    </Button>
                    <Button style={button} onClick={this.redirectRegister} variant="primary" type="button">
                        Sign Up
                    </Button>
                </Form>
            </div>
        )
    }
}

export default withRouter(LoginForm);