import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AdminSideBar from "../bars/AdminSideBar";
import AdminMessagesContent from "../pagecontent/AdminMessagesContent";
import AdminTitleBar from "../bars/AdminTitleBar";

const mainContainer = {
    height: "100vh",
    width: "100vw",
    // maxWidth: "100vw",
    // padding: "0px"
    // backgroundColor: "red"
}

const titleRow = {
    width: "100vw",
    padding: "0px !important",
    // flex: "0 0",
    margin: "0px",
    "--bs-gutter-x": "0"
    // backgroundColor: "red",
}

const contentRow = {
    // width: "100vw",
    padding: "0px",
    // flex: "1 0",
    margin: "0px"
}

const col = {
    // width: "100vw",
    // padding: "0px",
    // flex: "1 0",
    // margin: "0px",
    // backgroundColor: "grey",
    // border: "1px solid black"
}

class AdminMessagePage extends React.Component {
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
                        <AdminTitleBar></AdminTitleBar>
                    </Col>
                </Row>
                <Row style={contentRow}>
                    <Col style={col}>
                        <AdminSideBar></AdminSideBar>
                    </Col>
                    <Col style={col} xs={9}>
                        <AdminMessagesContent user={this.props.data.user}></AdminMessagesContent>
                    </Col>
                    <Col style={col}>
                        
                    </Col>
                </Row>
            </Container>

        )
    }
}

export default AdminMessagePage;