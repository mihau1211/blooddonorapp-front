import React from "react";
import { Button, Container, Form, OverlayTrigger, Tooltip } from "react-bootstrap";
import "../css/bars.css"
import { BiDonateBlood, BiHistory, BiMap, BiInfoCircle } from 'react-icons/bi';

const mainContainer = {
    width: "14vw",
    textAlign: "center"
}

const buttons = {
    display: "flex",
    marginTop: "5vh",
    marginLeft: "4vw"
}

const renderDonationTooltip = props => (
    <Tooltip {...props}>Lets donate some blood!</Tooltip>
);

const renderHistoryTooltip = props => (
    <Tooltip {...props}>Check history of your donations.</Tooltip>
);

const renderLocalizationTooltip = props => (
    <Tooltip {...props}>Wanna find some blood bank?</Tooltip>
);

const renderInfoTooltip = props => (
    <Tooltip {...props}>Check some info about blood donating.</Tooltip>
);

class SideBar extends React.Component {
    render() {
        return (
            <Container style={mainContainer} className="side-bar">
                <OverlayTrigger overlay={renderDonationTooltip}>
                    <Button style={buttons} variant='danger'>
                        <BiDonateBlood size={30}></BiDonateBlood>
                    </Button>
                </OverlayTrigger>
                <OverlayTrigger overlay={renderHistoryTooltip}>
                    <Button style={buttons} variant='danger'>
                        <BiHistory size={30}></BiHistory>
                    </Button>
                </OverlayTrigger>
                <OverlayTrigger overlay={renderLocalizationTooltip}>
                    <Button style={buttons} variant='danger'>
                        <BiMap size={30}></BiMap>
                    </Button>
                </OverlayTrigger>
                <OverlayTrigger overlay={renderInfoTooltip}>
                    <Button style={buttons} variant='danger'>
                        <BiInfoCircle size={30}></BiInfoCircle>
                    </Button>
                </OverlayTrigger>
            </Container>
        )
    }
}

export default SideBar;