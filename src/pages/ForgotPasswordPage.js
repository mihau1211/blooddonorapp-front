import React from "react";
import { Container } from "react-bootstrap";
import ForgotPassword from "../forms/ForgotPassword";

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

class ForgotPasswordPage extends React.Component {
    render() {
        return (
            <Container style={mainContainer}>
                <Container style={form}>
                    <ForgotPassword></ForgotPassword>
                </Container>
            </Container>
        )
    }
}

export default ForgotPasswordPage;