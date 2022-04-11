import React from "react";
import { Col, Container, Row, Stack } from "react-bootstrap";
import BloodDropBar from "../bars/BloodDropBar";
import SideBar from "../bars/SideBar";
import TitleBar from "../bars/TitleBar";
import MapsContent from "../pagecontent/MapsContent";

const mainContainer = {
    height: "100vh",
    width: "100vw",
}

const titleRow = {
    width: "100vw",
    padding: "0px !important",
    margin: "0px",
    "--bs-gutter-x": "0"
}

const contentRow = {
    padding: "0px",
    margin: "0px"
}

class MapsPage extends React.Component {
    render() {
        return (
            <Container style={mainContainer}>
                <Row style={titleRow}>
                    <Col>
                        <TitleBar></TitleBar>
                    </Col>
                </Row>
                <Row style={contentRow}>
                    <Col >
                        <SideBar></SideBar>
                    </Col>
                    <Col  xs={9}>
                        <MapsContent data={this.props.data}></MapsContent>
                    </Col>
                    <Col >
                        <BloodDropBar user={this.props.data.user}></BloodDropBar>
                    </Col>
                </Row>
            </Container>

        )
    }
}

export default MapsPage;