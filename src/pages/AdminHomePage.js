import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AdminSideBar from "../bars/AdminSideBar";
import TitleBar from "../bars/TitleBar";
import AdminHomeContent from "../pagecontent/AdminHomeContent";
import HomePageContent from "../pagecontent/HomePageContent";

const mainContainer = {
    height: "100vh",
    width: "100vw"
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

class AdminHomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    // setStateAsync(state) {
    //     return new Promise((resolve) => {
    //         this.setState(state, resolve)
    //     })
    // }
    
    // async componentDidMount() {
    //     await this.setStateAsync({ user: this.props.data.user, isLogged: this.props.data.isLogged })
    //     console.log(this.state.user)
    // }

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
                        <AdminSideBar></AdminSideBar>
                    </Col>
                    <Col xs={9}>
                        <AdminHomeContent user={this.props.data.user}></AdminHomeContent>
                    </Col>
                    <Col >
                        
                    </Col>
                </Row>
            </Container>

        )
    }
}

export default AdminHomePage;