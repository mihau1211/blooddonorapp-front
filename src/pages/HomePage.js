import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import BloodDropBar from "../bars/BloodDropBar";
import SideBar from "../bars/SideBar";
import TitleBar from "../bars/TitleBar";
import HomePageContent from "../pagecontent/HomePageContent";

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

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    setStateAsync(state) {
        return new Promise((resolve) => {
            this.setState(state, resolve)
        })
    }
    
    async componentDidMount() {
        await this.setStateAsync({ user: this.props.data.user, isLogged: this.props.data.isLogged })
        console.log(this.state.user)
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
                    <Col style={col}>
                        <SideBar></SideBar>
                    </Col>
                    <Col style={col} xs={9}>
                        <HomePageContent user={this.state.user}></HomePageContent>
                    </Col>
                    <Col style={col}>
                        <BloodDropBar></BloodDropBar>
                    </Col>
                </Row>
            </Container>

        )
    }
}

export default HomePage;