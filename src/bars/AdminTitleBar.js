import React from "react";
import { Container, Row, Col, Form, Button, Nav } from "react-bootstrap";
import "../css/bars.css"
import { withRouter } from 'react-router-dom';

const mainContainer = {
    textAlign: "center",
    height: "10vh",
    margin: "0px",
    padding: "0px",
    display: "flex",
    alignItems: "center",
    borderBottom: "2px groove white",
    backgroundColor: "rgb(116, 116, 116)"
}

const labelContainer = {
    width: "18vw",
    backgroundColor: "#dc3545",
    borderRadius: "50px 50px 50px 50px"
}

const label = {
    fontSize: "26px",
    fontWeight: "bold",
    color: "white"
}

const titleRow = {
    width: "100vw",
    padding: "0px !important",
    margin: "0px",
    "--bs-gutter-x": "0"
}

class AdminTitleBar extends React.Component {
    constructor(props) {
        super(props);

    }

    redirectHome = () => {
        const { history } = this.props;
        if (history) {
            history.push('/bloodbank');
        }
    }

    render() {
        return (
            <Container style={mainContainer}>
                <Row style={titleRow}>
                    <Container style={labelContainer}>
                        <Form.Label style={label}>Blood Donor App</Form.Label>
                    </Container>
                </Row>
            </Container>
        )
    }
}

export default withRouter(AdminTitleBar);