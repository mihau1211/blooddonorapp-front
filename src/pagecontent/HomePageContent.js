import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import GoogleMapsContent from "./GoogleMapsContent";

const mainContainer = {
    height: "90vh",
    width: "auto",
    backgroundColor: "silver",
    itemsAlign: "center",
    textAlign: "center"
}

const locationLabel = {
    fontSize: "26px",
    marginTop: "5vh"
}

class HomePageContent extends React.Component {
    render() {
        return (
            <Container style={mainContainer}>
                <Row style={{height:"15vh"}}>
                </Row>
                <Row >
                    <Col ></Col>
                    <Col xs={7}>
                    </Col>
                    <Col ></Col>
                </Row>
            </Container>
        )
    }
}

export default HomePageContent;