import React from "react";
import { Container } from "react-bootstrap";
import RegisterForm from "../forms/RegisterForm";

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
    height: "75vh",
    width: "55vw",
    marginTop: "10vh",
    alignItems: "stretch",
    display: "flex",
    justifyContent: "center",
    borderRadius: "15px 15px 15px 15px",
    backgroundColor: "white",
}

class RegisterPage extends React.Component {
    render() {
        return (
            <Container style={mainContainer}>
                <Container style={form}>
                    <RegisterForm></RegisterForm>
                </Container>
            </Container>
        )
    }
}

export default RegisterPage;