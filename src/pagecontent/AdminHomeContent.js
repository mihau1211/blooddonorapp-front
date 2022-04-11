import React from "react";
import axios from 'axios';
import { Col, Row, Container, FloatingLabel } from "react-bootstrap";

const mainLabel = {
    fontSize: "36px",
    fontWeight: "bold"
}

const mainRow = {
    marginTop: "5vh"
}

const row = {
    marginTop: "5vh",
    textAlign: "left"
}

const contentRow = {
    marginTop: "2vh",
    textAlign: "left",
    marginLeft: "2vw"
}

const label = {
    fontSize: "26px",
    marginTop: "1vh"
}

const infoContainer = {
    width: "56vw",
    backgroundColor: "#f1bec2",
    borderRadius: "50px 50px 50px 50px",
    fontSize: "16px",
    textAlign: "left",
    itemsAlign: "center",
    height: "25vh"
}

class AdminHomeContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bloodBank: [],
            donors: [],
            donations: [],
            bestDonor: [],
            bestDonorDonations: 0,
            totalAmountOfDonations: 0
        }
    }

    async componentDidMount() {
        await axios.get('http://localhost:8080/bloodBank/' + this.props.user.bloodBankId)
            .then(async res => {
                const bloodBank = res.data;
                this.setState({ bloodBank });
                this.setState({ donors: bloodBank.donors })
                this.setState({ donations: bloodBank.donations })
            }).catch(function (error) {
                console.log(error)
                this.setState({ bloodBank: [] });
            })
        let mostDonationsDonor = this.state.donors.reduce((most, donor) => most.donations.length > donor.donations.length ? most : donor);
        this.setState({ bestDonor: mostDonationsDonor })
        this.setState({
            bestDonor: {
                ...this.state.bestDonor,
                birthdate: this.state.bestDonor.birthdate.slice(0, -19)
            }
        });
        this.setState({ bestDonorDonations: this.state.bestDonor.numberOfDonations })
        let totalAmountOfDonations = 0;
        for (let i = 0; i < this.state.donations.length; i++) {
            totalAmountOfDonations += this.state.donations[i].quantity
        }
        this.setState({ totalAmountOfDonations: totalAmountOfDonations })
    }

    render() {
        return (
            <Container>
                <Row style={mainRow}>
                    <FloatingLabel style={mainLabel}>Informacje</FloatingLabel>
                </Row>
                <Row style={row}>
                    <Container style={infoContainer}>
                        <Row style={contentRow}>
                            <Col>
                                <FloatingLabel style={label}>Adres:</FloatingLabel>
                                <FloatingLabel style={label}>{this.state.bloodBank.donationCenter}</FloatingLabel>
                                <FloatingLabel style={label}>Zyty 21</FloatingLabel>
                                <FloatingLabel style={label}>65-046 Zielona Góra</FloatingLabel>
                            </Col>
                            <Col>
                                <FloatingLabel style={label}>Statystyki:</FloatingLabel>
                                <FloatingLabel style={label}>Łączna liczba dawców: {this.state.donors.length}</FloatingLabel>
                                <FloatingLabel style={label}>Łączna liczba donacji: {this.state.donations.length}</FloatingLabel>
                                <FloatingLabel style={label}>Ilość zebranej krwi: {this.state.totalAmountOfDonations / 1000} L</FloatingLabel>
                            </Col>
                            <Col>
                                <FloatingLabel style={label}>Najaktywniejszy dawca: </FloatingLabel>
                                <FloatingLabel style={label}>Imię i nazwisko: {this.state.bestDonor.name + ' ' + this.state.bestDonor.surname}</FloatingLabel>
                                <FloatingLabel style={label}>Data urodzenia: {this.state.bestDonor.birthdate}</FloatingLabel>
                                <FloatingLabel style={label}>Liczba donacji: {this.state.bestDonorDonations}</FloatingLabel>
                            </Col>
                        </Row>
                    </Container>
                </Row>
            </Container>
        )
    }
}

export default AdminHomeContent;