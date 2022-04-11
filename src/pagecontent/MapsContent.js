import { googleMapLoader } from "google-map-react";
import React from "react";
import { Col, Container, FloatingLabel, Form, Row } from "react-bootstrap";
import GoogleMapsContent from "./GoogleMapsContent";
import axios from 'axios';

const mainContainer = {
    height: "90vh",
    width: "auto",
    backgroundColor: "silver",
    itemsAlign: "center",
    textAlign: "center"
}

const locationLabel = {
    fontSize: "26px",
    marginTop: "5vh",
    fontWeight: "bold"
}

const mainLabel = {
    fontSize: "20px",
    fontWeight: "bold",
    marginTop: "3vh"
}

const informationCol = {
    textAlign: "left"
}

const nearestBloodBank = 'http://localhost:8080/donor/nearest';

class MapsContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            position: false,
            donor: [],
            bloodBank: [],
            lat: '0',
            lng: '0'
        }
    }

    setStateAsync(state) {
        return new Promise((resolve) => {
            this.setState(state, resolve)
        })
    }

    async getData(url) {
        await axios.post(url, {
            lat: this.state.lat,
            lng: this.state.lng
        }
        ).then(async (res) => {
            console.log(res.data)
            const bloodBank = res.data;
            await this.setStateAsync({ bloodBank });
            console.log(this.state.bloodBank)
        }).catch(function (error) {
            console.log(this.state.lat)
            this.setState({ bloodBank: undefined });
        });
    }

    async componentDidMount() {
        await this.setStateAsync({ user: this.props.data.user, isLogged: this.props.data.isLogged })

        navigator.geolocation.getCurrentPosition((position) => {
            this.setStateAsync({ lat: position.coords.latitude.toString(), lng: position.coords.longitude.toString() });
            this.getData(nearestBloodBank);
        });
    }

    async prepareData() {
        await this.setStateAsync({ user: this.props.data.user, isLogged: this.props.data.isLogged })

        navigator.geolocation.getCurrentPosition((position) => {
            this.setStateAsync({ lat: position.coords.latitude.toString(), lng: position.coords.longitude.toString() });
            this.getData(nearestBloodBank);
        });
    }

    render() {
        return (
            <Container style={mainContainer}>
                <Row style={{ height: "15vh" }}>
                    <Form.Label style={locationLabel}>Najbliższe Regionalne Centrum Krwiodawstwa i Krwiolecznictwa</Form.Label>
                </Row>
                <Row >
                    <Col ></Col>
                    <Col xs={9}>
                        <Row>
                            <Col xs={3}>
                                <Row style={informationCol}>
                                    <FloatingLabel style={mainLabel}>{this.state.bloodBank.donationCenter}</FloatingLabel>
                                    <FloatingLabel style={{fontWeight: "bold", marginTop: "3vh"}}>Adres:</FloatingLabel>
                                    <FloatingLabel style={{fontWeight: "bold"}}>Zyty 21</FloatingLabel>
                                    <FloatingLabel style={{fontWeight: "bold"}}>65-046 Zielona Góra</FloatingLabel>
                                    <FloatingLabel style={{fontWeight: "bold", marginTop: "3vh"}}>Telefon:</FloatingLabel>
                                    <FloatingLabel style={{fontWeight: "bold"}}>68 329 83 90</FloatingLabel>
                                    <FloatingLabel style={{fontWeight: "bold", marginTop: "3vh"}}>Email:</FloatingLabel>
                                    <FloatingLabel style={{fontWeight: "bold"}}>kontakt@rckik.zgora.pl</FloatingLabel>
                                    <FloatingLabel style={{fontWeight: "bold", marginTop: "3vh"}}>Godziny pracy:</FloatingLabel>
                                    <FloatingLabel style={{fontWeight: "bold"}}>poniedziałek 7:00 - 16:30</FloatingLabel>
                                    <FloatingLabel style={{fontWeight: "bold"}}>wtorek - piątek 7:00 - 14:00</FloatingLabel>
                                </Row>
                            </Col>
                            <Col style={{ width: "70%" }}>
                                <GoogleMapsContent bloodBank={this.state.bloodBank}></GoogleMapsContent>
                            </Col>
                        </Row>


                    </Col>
                    <Col ></Col>
                </Row>
            </Container>
        )
    }
}

export default MapsContent;