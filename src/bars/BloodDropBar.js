import React from 'react';
import { Button, Container, Form, OverlayTrigger, Tooltip } from 'react-bootstrap';
import '../css/blooddrop.css';
import '../css/bars.css';

const mainContainer = {
    // width: "15vw",
    // height: "60vh",
    // marginTop: "15vh",
    // marginLeft: "84vw",
    // position: "absolute",
    // backgroundColor: "rgb(116, 116, 116)",
    // display: "table-row",
    // borderRadius: "50px 0px 50px 0px",
    // padding: "0px"
    textAlign: "center",
    padding: "0px",
    backgroundColor: "rgb(116, 116, 116)",
    height: "90vh",
    display: "table-row",
    alignItems: "center",
    float: "left",
    borderRadius: "0px 0px 0px 25px"
}

const labelContainer = {
    marginTop: "5vh",
    width: "11vw",
    backgroundColor: "#dc3545",
    borderRadius: "50px 50px 50px 50px"
}

const goalLabel = {
    fontSize: "20px",
    fontWeight: "bold",
    color: "white"
}

const button = {
    marginTop: "5vh"
}

const renderGoalUpdate = props => (
    <Tooltip {...props}>Click here to update your donation.</Tooltip>
);

class BloodDropBar extends React.Component {
    render() {
        return (
            <Container style={mainContainer}>
                <Container style={labelContainer}>
                    <Form.Label style={goalLabel}>Donation goal</Form.Label>
                </Container>
                <div className="blood-drop"></div>
                <OverlayTrigger placement="bottom" overlay={renderGoalUpdate}>
                    <Button style={button} variant="danger">Update</Button>
                </OverlayTrigger>
            </Container>
        )
    }
}

export default BloodDropBar;