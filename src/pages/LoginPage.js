import React from "react";
import { Container } from "react-bootstrap";
import LoginForm from "../forms/LoginForm";

const mainContainer = {
    height: "100vh",
    width: "100vw",
    margin: "0px",
    alignItems: "stretch",
    display: "flex",
    justifyContent: "center",
    backgroundColor: "rgb(116, 116, 116)",
}

const form = {
    height: "38vh",
    width: "35vw",
    marginTop: "25vh",
    alignItems: "stretch",
    display: "flex",
    justifyContent: "center",
    borderRadius: "15px 15px 15px 15px",
    backgroundColor: "white",
}

class LoginPage extends React.Component {
    render() {
        return (
            <Container style={mainContainer}>
                <Container style={form}>
                    <LoginForm></LoginForm>
                </Container>
            </Container>
        )
    }
}

export default LoginPage;