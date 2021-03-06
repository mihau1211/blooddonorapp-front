import React from "react";
import { Col, Container, Row, Stack } from "react-bootstrap";
import BloodDropBar from "../bars/BloodDropBar";
import SideBar from "../bars/SideBar";
import TitleBar from "../bars/TitleBar";
import DonationForm from "../forms/DonationForm";
import HistoryContent from "../pagecontent/HistoryContent";
import MapsContent from "../pagecontent/MapsContent";

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


class HistoryPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount(){
        // console.log(this.props)
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
                        <HistoryContent user={this.props.data.user}></HistoryContent>
                    </Col>
                    <Col >
                        <BloodDropBar user={this.props.data.user}></BloodDropBar>
                    </Col>
                </Row>
            </Container>

        )
    }
}

export default HistoryPage;