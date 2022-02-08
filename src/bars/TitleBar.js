import React from "react";
import { Container, Row, Col, Form, Button, Nav } from "react-bootstrap";
import "../css/bars.css"
import { BiHome } from 'react-icons/bi';

const mainContainer = {
    textAlign: "center",
    // padding: "0px",
    // width: "100vw",
    height: "10vh",
    margin: "0px",
    padding: "0px",
    display: "flex",
    alignItems: "center",
    borderBottom: "2px groove white",
    backgroundColor: "rgb(116, 116, 116)"
}

const labelContainer = {
    marginLeft: "32vw",
    width: "18vw",
    backgroundColor: "#dc3545",
    borderRadius: "50px 50px 50px 50px"
}

const label = {
    fontSize: "26px",
    fontWeight: "bold",
    color: "white"
}

class TitleBar extends React.Component {
    render() {
        return (
            <Container style={mainContainer}>
                <Button style={{ marginLeft: "4vw" }} variant="danger" >
                    <BiHome size={40}></BiHome>
                </Button>
                <Container style={labelContainer}>
                    <Form.Label style={label}>Blood Donor App</Form.Label>
                </Container>

            </Container>
        )
    }
}

export default TitleBar;