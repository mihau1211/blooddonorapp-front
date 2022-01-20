import React from "react";
import { Container, Row, Col, Form, Button, Nav } from "react-bootstrap";
import "../css/bars.css"
import { BiHome } from 'react-icons/bi';

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
            // <div className="title-bar"></div>
            <Container style={{ textAlign: "center" }} className="title-bar">
                <Button style={{ marginLeft: "4vw" }} variant="danger" className="home-btn">
                    <BiHome size={30}></BiHome>
                </Button>
                <Container style={labelContainer}>
                    <Form.Label style={label}>Blood Donor App</Form.Label>
                </Container>

            </Container>
        )
    }
}

export default TitleBar;