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

class MapsContent extends React.Component {
    render() {
        return (
            <Container style={mainContainer}>
                <Row style={{height:"15vh"}}>
                    <Form.Label style={locationLabel}>Nearest Blood Donation Center location</Form.Label>
                </Row>
                <Row >
                    <Col ></Col>
                    <Col xs={9}>
                        <GoogleMapsContent></GoogleMapsContent>

                    </Col>
                    <Col ></Col>
                </Row>
            </Container>
        )
    }
}

export default MapsContent;