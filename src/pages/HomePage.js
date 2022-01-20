import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import BloodDropBar from "../bars/BloodDropBar";
import SideBar from "../bars/SideBar";
import TitleBar from "../bars/TitleBar";
import HomePageContent from "../pagecontent/HomePageContent";

const mainContainer = {
    width: "100vw", 
    maxWidth: "100vw"
}

const childContainers = {
    display: "flex",
    width: "100vw",
    float: "left"
}

const col = {
    padding: "0px"
}

class HomePage extends React.Component {
    render() {
        return (
            <Container style={mainContainer}>
                <TitleBar></TitleBar>
                    <Row>
                        <Col>
                            <SideBar></SideBar>
                        </Col>
                        <Col style={col}>
                            <HomePageContent> </HomePageContent>
                        </Col>
                        <Col>
                            <BloodDropBar></BloodDropBar>
                        </Col>
                    </Row>
            </Container>

        )
    }
}

export default HomePage;