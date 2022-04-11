import React from "react";
import { Image, Col, Container, FloatingLabel, Form, FormLabel, ProgressBar, Row } from "react-bootstrap";
import hdk3 from '../logos/hdk3.png';
import hdk2 from '../logos/hdk2.png';
import hdk1 from '../logos/hdk1.png';
import axios from 'axios';

const mainContainer = {
    height: "90vh",
    width: "auto",
    backgroundColor: "silver",
    itemsAlign: "center",
    textAlign: "center"
}

const donorInfoContainer = {
    width: "46vw",
    backgroundColor: "#dc3545",
    borderRadius: "50px 50px 50px 50px",
    fontSize: "16px",
    textAlign: "left",
    itemsAlign: "center",
    height: "110%"
}

const userInfoData = {
    marginLeft: "5vw",
    color: "white",
    marginTop: "2px"
}

const userInfoLabel = {
    marginLeft: "5vw",
    color: "white",
    fontWeight: "bold",
    marginBottom: "2px"
}

const userInfoHeader = {
    fontSize: "26px",
    marginLeft: "5vw",
    color: "white",
    fontWeight: "bold",
    marginBottom: "2px"
}

const daysLabel = {
    fontSize: "20px",
    fontWeight: "bold",
}

const progressBar = {
    width: "80%",
    marginLeft: "10%"
}

class HomePageContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: [],
            gender: '',
            barConst: 6,
            currentValue: 5000,
            donor: [],
            gender: null,
            bloodtype: null,
            donations: []
        }
    }

    async setBarMaxValues() {
        if (this.state.donor.gender === "MALE") {
            await this.setStateAsync({ barConst: 6 })
        } else if (this.state.donor.gender === "FEMALE") {
            await this.setStateAsync({ barConst: 5 })
        }
    }

    setStateAsync(state) {
        return new Promise((resolve) => {
            this.setState(state, resolve)
        })
    }

    async genderChange() {
        if (this.state.donor.gender === "MALE") {
            await this.setStateAsync({ gender: "Mężczyzna" })
        } else if (this.state.donor.gender === "FEMALE") {
            await this.setStateAsync({ gender: "Kobieta" })
        } else {
            await this.setStateAsync({ gender: "Nieznana" })
        }
    }

    async bloodTypeChange() {
        switch (this.state.donor.bloodType) {
            case "APLUS":
                await this.setStateAsync({ bloodType: "A Rh(+)" })
                break;
            case "AMINUS":
                await this.setStateAsync({ bloodType: "A Rh(-)" })
                break;
            case "BPLUS":
                await this.setStateAsync({ bloodType: "B Rh(+)" })
                break;
            case "AMINUS":
                await this.setStateAsync({ bloodType: "B Rh(-)" })
                break;
            case "ABPLUS":
                await this.setStateAsync({ bloodType: "AB Rh(+)" })
                break;
            case "ABMINUS":
                await this.setStateAsync({ bloodType: "AB Rh(-)" })
                break;
            case "ZEROPLUS":
                await this.setStateAsync({ bloodType: "0 Rh(+)" })
                break;
            case "ZEROMINUS":
                await this.setStateAsync({ bloodType: "0 Rh(-)" })
                break;
        }
    }

    computeDays() {
        if (this.state.donations.length === 0) {
            return (
                <FloatingLabel style={daysLabel}>Nie posiadasz jeszcze donacji.</FloatingLabel>
            )
        } else {
            let today = new Date(Date.now());
            let lastDate = new Date(this.state.donations[0].donationDate);
            let diff = Math.floor((today.getTime() - lastDate.getTime()) / (1000 * 3600 * 24))
            let next = 56 - diff;
            if (next <= 0) {
                <FloatingLabel style={daysLabel}>Możesz już oddać krew!</FloatingLabel>
            } else {
                return (
                    <Container>
                        <FloatingLabel style={daysLabel}>Możesz oddać krew za: {next} dni</FloatingLabel>
                    </Container>
                )
            }
        }
    }

    async componentDidMount() {
        await axios.get('http://localhost:8080/donor/' + this.props.user.donorId)
            .then(async res => {
                const donor = res.data;
                await this.setStateAsync({ donor });
                await this.setStateAsync({
                    donor: {
                        ...this.state.donor,
                        birthdate: this.state.donor.birthdate.slice(0, -19)
                    }
                });
                this.genderChange();
                this.bloodTypeChange();
            }).catch(function (error) {
                console.log(error)
                this.setState({ donor: [] });
            })

        await axios.get('http://localhost:8080/donation/donor/' + this.props.user.donorId)
            .then(async res => {
                const donations = res.data;
                await this.setStateAsync({ donations });
            }).catch(function (error) {
                console.log(error)
                this.setStateAsync({ donations: [] });
            })

        console.log(this.state.donations[0].donationDate)

        this.computeDays()

        await this.setBarMaxValues();
    }

    async componentDidUpdate(prevProps) {
        if (this.props.user !== prevProps.user) {
            await this.setStateAsync({ user: this.props.user })
            await this.setBarMaxValues();
        }
    }

    checkIfCompleted(now, goal, level) {
        if (now >= (goal * level * 1000)) {
            let grade = '';
            switch (level) {
                case 1:
                    grade = 'III'
                    break;
                case 2:
                    grade = 'II'
                    break;
                case 3:
                    grade = 'I'
                    break;
                default:
                    grade = ''
                    break;
            }
            return (
                <FloatingLabel>Brawo, możesz już złożyć wniosek o odznakę {grade} stopnia!</FloatingLabel>
            )
        } else if (now <= 0) {
            return (
                <FloatingLabel>Nie masz żadnych donacji.</FloatingLabel>
            )
        } else {
            return (
                <FloatingLabel>{this.state.donor.totalDonationAmount} / {this.state.barConst * 1000 * level}</FloatingLabel>
            )
        }
    }

    render() {
        return (
            <Container style={mainContainer}>
                <Row style={{ height: "15vh" }}>
                </Row>
                <Row style={{ height: "15vh" }}>
                    <Col></Col>
                    <Col xs={7}>
                        <Container style={donorInfoContainer}>
                            <Row>
                                <FloatingLabel style={userInfoHeader}>Dane dawcy: </FloatingLabel>
                            </Row>
                            <Row>
                                <Col>
                                    <FloatingLabel style={userInfoLabel}>Imię: </FloatingLabel>
                                    <FloatingLabel style={userInfoData}>{this.state.donor.name}</FloatingLabel>
                                    <FloatingLabel style={userInfoLabel}>Nazwisko: </FloatingLabel>
                                    <FloatingLabel style={userInfoData}>{this.state.donor.surname}</FloatingLabel>

                                </Col>
                                <Col>
                                    <FloatingLabel style={userInfoLabel}>Data urodzenia: </FloatingLabel>
                                    <FloatingLabel style={userInfoData}>{this.state.donor.birthdate}</FloatingLabel>
                                    <FloatingLabel style={userInfoLabel}>Grupa krwi: </FloatingLabel>
                                    <FloatingLabel style={userInfoData}>{this.state.bloodType}</FloatingLabel>
                                </Col>
                                <Col>
                                    <FloatingLabel style={userInfoLabel}>Miasto: </FloatingLabel>
                                    <FloatingLabel style={userInfoData}>{this.state.donor.city}</FloatingLabel>
                                    <FloatingLabel style={userInfoLabel}>Płeć: </FloatingLabel>
                                    <FloatingLabel style={userInfoData}>{this.state.gender}</FloatingLabel>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                    <Col></Col>
                </Row>
                <Row style={{ marginTop: "5vh" }}>
                    <Col ></Col>
                    <Col >{this.computeDays()}</Col>
                    <Col >

                    </Col>
                </Row>
                <Row style={{ marginTop: "5vh" }}>
                    <Col >
                        <Image src={hdk3}></Image>
                        <FloatingLabel>Zasłużony Dawca Krwi III stopnia</FloatingLabel>
                        <ProgressBar style={progressBar} variant='danger' now={this.state.donor.totalDonationAmount} min={0} max={this.state.barConst * 1000}></ProgressBar>
                        <FloatingLabel>{this.checkIfCompleted(this.state.donor.totalDonationAmount, this.state.barConst, 1)}</FloatingLabel>
                    </Col>
                    <Col >
                        <Image src={hdk2}></Image>
                        <FloatingLabel>HDK 2</FloatingLabel>
                        <ProgressBar style={progressBar} variant='danger' now={this.state.donor.totalDonationAmount} min={0} max={this.state.barConst * 2000}></ProgressBar>
                        <FloatingLabel>{this.checkIfCompleted(this.state.donor.totalDonationAmount, this.state.barConst, 2)}</FloatingLabel>
                    </Col>
                    <Col >
                        <Image src={hdk1}></Image>
                        <FloatingLabel>HDK 1</FloatingLabel>
                        <ProgressBar style={progressBar} variant='danger' now={this.state.donor.totalDonationAmount} min={0} max={this.state.barConst * 3000}></ProgressBar>
                        <FloatingLabel>{this.checkIfCompleted(this.state.donor.totalDonationAmount, this.state.barConst, 3)}</FloatingLabel>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default HomePageContent;