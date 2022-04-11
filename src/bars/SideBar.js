import React from "react";
import { Button, Container, Form, OverlayTrigger, Tooltip } from "react-bootstrap";
import "../css/bars.css";
import { withRouter } from 'react-router-dom';
import { BiHome, BiDonateBlood, BiHistory, BiMap, BiInfoCircle, BiLogOut } from 'react-icons/bi';

const mainContainer = {
    textAlign: "center",
    padding: "0px",
    backgroundColor: "rgb(116, 116, 116)",
    height: "90vh",
    display: "table-row",
    alignItems: "center",
    float: "left",
    borderRadius: "0px 0px 25px 0px"
}

const buttons = {

    display: "flex",
    marginTop: "5vh",
    marginLeft: "4vw"
}

const buttonSize = 40;

class SideBar extends React.Component {
    constructor(props) {
        super(props);

    }

    redirectHome = () => {
        const { history } = this.props;
        if (history) history.push('/donor')
    }

    redirectDonate = () => {
        const { history } = this.props;
        if (history) history.push('/donor/donation');
    }

    redirectHistory = () => {
        const { history } = this.props;
        if (history) history.push('/donor/history');
    }

    redirectLocation = () => {
        const { history } = this.props;
        if (history) history.push('/donor/location');
    }

    redirectInfo = () => {
        const { history } = this.props;
        if (history) history.push('/donor/info');
    }

    redirectLogout = () => {
        const { history } = this.props;
        if (history) history.push('/');
    }

    render() {
        return (
            <Container style={mainContainer}>
                <Button style={buttons} variant="danger" onClick={this.redirectHome}>
                    <BiHome size={40}></BiHome>
                </Button>
                <Button style={buttons} variant='danger' onClick={this.redirectDonate}>
                    <BiDonateBlood size={buttonSize}></BiDonateBlood>
                </Button>
                <Button style={buttons} variant='danger' onClick={this.redirectHistory}>
                    <BiHistory size={buttonSize}></BiHistory>
                </Button>
                <Button style={buttons} variant='danger' onClick={this.redirectLocation}>
                    <BiMap size={buttonSize}></BiMap>
                </Button>
                <Button style={buttons} variant='danger'>
                    <BiInfoCircle size={buttonSize} onClick={this.redirectInfo}></BiInfoCircle>
                </Button>
                <Button style={buttons} variant='danger'>
                    <BiLogOut size={buttonSize} onClick={this.redirectLogout}></BiLogOut>
                </Button>
            </Container>
        )
    }
}

export default withRouter(SideBar);