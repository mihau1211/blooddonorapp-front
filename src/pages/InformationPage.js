import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import BloodDropBar from "../bars/BloodDropBar";
import InformationContent from '../pagecontent/InformationContent'
import SideBar from "../bars/SideBar";
import TitleBar from "../bars/TitleBar";

const mainContainer = {
    height: "100vh",
    width: "100vw",
    backgroundColor: "silver"
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

class InformationPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

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
                    <Col xs={9}>
                        <InformationContent></InformationContent>
                    </Col>
                    <Col >
                        <BloodDropBar user={this.props.data.user}></BloodDropBar>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default InformationPage;