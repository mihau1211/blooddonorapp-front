import React from "react";
import { Container, FloatingLabel, Row, Col, Image } from "react-bootstrap";
import mz from '../logos/mz.png';
import pck from '../logos/pck.png';
import krewniacy from '../logos/krewniacy.png';
import { Link } from "react-router-dom";

const mainLabel = {
    fontSize: "26px",
    fontWeight: "bold",
    color: "White",
    marginBottom: "5px"
}

const infoLabelContainer = {
    width: "30%",
    backgroundColor: "#dc3545",
    borderRadius: "50px 50px 50px 50px",
    fontSize: "16px",
    textAlign: "center",
    itemsAlign: "center",
    height: "150%"
}

const logoCol = {
    height: "20vh",
    marginLeft: "2vw",
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    borderTop: "1px solid white"
}

const logoRow = {
}

const infoContentLabel = {
    fontSize: "24px",
    fontWeight: "bold",
    color: "white",
    marginRight: "5vw"
}

class InformationContent extends React.Component {
    render() {
        return (
            <Container>
                <Row style={{ height: "5vh" }}></Row>
                <Row style={{ marginBottom: "5vh" }}>
                    <Container >
                        <FloatingLabel style={mainLabel}>Informacje o krwiodawstwie</FloatingLabel>
                    </Container>
                </Row>
                <Row style={logoRow}>
                    <Col style={logoCol}>
                        <Link to={{
                            pathname: "https://pck.pl/edukacja/krwiodawstwo/",
                            state: { fromDashboard: false }
                        }}
                        target="_blank">
                            <Image src={pck}></Image>
                        </Link>
                    </Col>
                    <Col style={logoCol}>
                        <FloatingLabel style={infoContentLabel}> Strona internetowa Polskiego Czerwonego Krzyża. Dowiesz się z niej o historii oddawania krwi oraz poznasz jak działa krwiodawstwo.</FloatingLabel>
                    </Col>
                </Row>
                <Row style={logoRow}>
                    <Col style={logoCol}>
                        <Link to={{
                            pathname: "https://www.gov.pl/web/zdrowie/krwiodawstwo",
                            state: { fromDashboard: false }
                        }}
                        target="_blank">
                            <Image rounded={true} src={mz}></Image>
                        </Link>
                    </Col>
                    <Col style={logoCol}>
                        <FloatingLabel style={infoContentLabel}> Strona internetowa Ministerstwa Zdrowia. Poznasz tu zasady oddawania krwi, a także jak przygotować się do pierwszej donacji.</FloatingLabel>
                    </Col>
                </Row>
                <Row style={logoRow}>
                    <Col style={logoCol}>
                        <Link to={{
                            pathname: "https://krewniacy.pl",
                            state: { fromDashboard: false }
                        }}
                        target="_blank">
                            <Image src={krewniacy}></Image>
                        </Link>
                    </Col>
                    <Col style={logoCol}>
                        <FloatingLabel style={infoContentLabel}> Krewniacy to Europejska Fundacja Honorowego Dawcy Krwi, działająca na rzecz promocjii honorowego krwiodawstwa, transplantologii i zdrowego stylu życia.</FloatingLabel>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default InformationContent;