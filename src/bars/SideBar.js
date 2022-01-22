import React from "react";
import { Button, Container, Form, OverlayTrigger, Tooltip } from "react-bootstrap";
import "../css/bars.css"
import { BiDonateBlood, BiHistory, BiMap, BiInfoCircle, BiLogOut } from 'react-icons/bi';

const mainContainer = {
    // width: "15vw",
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

const renderLogoutToolyip = props => (
    <Tooltip {...props}>Logout.</Tooltip>
);

class SideBar extends React.Component {
    render() {
        return (
            <Container style={mainContainer}>
                <OverlayTrigger overlay={renderDonationTooltip}>
                    <Button style={buttons} variant='danger'>
                        <BiDonateBlood size={buttonSize}></BiDonateBlood>
                    </Button>
                </OverlayTrigger>
                <OverlayTrigger overlay={renderHistoryTooltip}>
                    <Button style={buttons} variant='danger'>
                        <BiHistory size={buttonSize}></BiHistory>
                    </Button>
                </OverlayTrigger>
                <OverlayTrigger overlay={renderLocalizationTooltip}>
                    <Button style={buttons} variant='danger'>
                        <BiMap size={buttonSize}></BiMap>
                    </Button>
                </OverlayTrigger>
                <OverlayTrigger overlay={renderInfoTooltip}>
                    <Button style={buttons} variant='danger'>
                        <BiInfoCircle size={buttonSize}></BiInfoCircle>
                    </Button>
                </OverlayTrigger>
                <OverlayTrigger overlay={renderLogoutToolyip}>
                    <Button style={buttons} variant='danger'>
                        <BiLogOut size={buttonSize}></BiLogOut>
                    </Button>
                </OverlayTrigger>
            </Container>
        )
    }
}

export default SideBar;