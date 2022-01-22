import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import GoogleMapsContent from "./GoogleMapsContent";

const mainContainer = {
    height: "90vh",
    width: "auto",
    backgroundColor: "red",
    itemsAlign: "center",
    textAlign: "center"
}

const col = {
    itemsAlign: "center"
}

class HomePageContent extends React.Component {
    render() {
        return (
            <Container style={mainContainer}>
                <Row>
                    <Col></Col>
                    <Col style={col} xs={6}>
                        <GoogleMapsContent></GoogleMapsContent>

                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        )
    }
}

export default HomePageContent;