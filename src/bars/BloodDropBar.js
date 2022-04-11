import React from 'react';
import { Modal, Button, Container, FloatingLabel, Form, OverlayTrigger, Tooltip } from 'react-bootstrap';
import axios from 'axios';
import '../css/blooddrop.css';
import '../css/bars.css';

const mainContainer = {
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

const progressLabel = {
    marginTop: "18vh",
    fontSize: "18px",
    fontWeight: "bold",
}

const fullBloodDrop = {
    width: "8vw",
    height: "8vw",
    borderRadius: "80% 0 55% 50% / 55% 0 80% 50%",
    border: "3px solid black",
    transform: "rotate(-45deg)",
    marginTop: "4vh",
    marginLeft: "2vw",
    background: "linear-gradient(45deg, red 100%, transparent 0)",
    display: "flex"
}

const emptyBloodDrop = {
    width: "8vw",
    height: "8vw",
    borderRadius: "80% 0 55% 50% / 55% 0 80% 50%",
    border: "3px solid black",
    transform: "rotate(-45deg)",
    marginTop: "4vh",
    marginLeft: "2vw",
    background: "linear-gradient(45deg, red 0%, transparent 0)",
    display: "flex"
}

const renderGoalUpdate = props => (
    <Tooltip {...props}>Klinij aby zaktualizować cel.</Tooltip>
);

class BloodDropBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            popup: false,
            totalAmmount: 0,
            goal: 0,
            bloodDrop: {
                width: "8vw",
                height: "8vw",
                borderRadius: "80% 0 55% 50% / 55% 0 80% 50%",
                border: "3px solid black",
                transform: "rotate(-45deg)",
                marginTop: "4vh",
                marginLeft: "2vw",
                background: "linear-gradient(45deg, red 0%, transparent 0)",
                display: "flex"
            }

        }
    }

    async goalProgress(goal, current) {
        let progress = 0;
        progress = (current * 100) / goal;
        this.setStateAsync({ progress: progress })
    }

    showPopup = () => {
        this.setState({ popup: true })
    }

    async getDonor() {
        await axios.get('http://localhost:8080/donor/' + this.props.user.donorId)
            .then(res => {
                const donor = res.data;
                this.setStateAsync({ donor });
                this.setStateAsync({ totalAmmount: donor.totalDonationAmount });
                this.setStateAsync({ goal: donor.goal });
            }).catch(function (error) {
                console.log(error)
                this.setState({ donor: [] });
            })
    }

    closePopup = async () => {
        await this.setStateAsync({ goal: this.state.donor.goal, popup: false })
    }

    goalChange = async e => {
        await this.setStateAsync({ goal: e.target.value })
    }

    saveNewGoal = async () => {
        await axios({
            method: 'patch',
            url: 'http://localhost:8080/donor/' + this.state.donor.donorId,
            data: {
                goal: this.state.goal
            }
        }).catch((err) => {
            console.log(err);
        });
        await this.getDonor()
        await this.goalProgress(this.state.donor.goal, this.state.donor.totalDonationAmount);

        await this.setStateAsync({
            bloodDrop: {
                ...this.state.bloodDrop,
                background: "linear-gradient(45deg, red " + this.state.progress + "%, transparent 0)"
            }
        });

        this.setState({ popup: false })
    }

    setStateAsync(state) {
        return new Promise((resolve) => {
            this.setState(state, resolve)
        })
    }

    async componentDidMount() {
        await this.getDonor()
        await this.goalProgress(this.state.donor.goal, this.state.donor.totalDonationAmount)
        await this.setStateAsync({
            bloodDrop: {
                ...this.state.bloodDrop,
                background: "linear-gradient(45deg, red " + this.state.progress + "%, transparent 0)"
            }
        });
        console.log(this.state.progress)
    }

    render() {
        if (this.state.progress < 100) {
            return (
                <Container style={mainContainer}>
                    <Container style={labelContainer}>
                        <Form.Label style={goalLabel}>Cel donacji</Form.Label>
                    </Container>
                    <FloatingLabel style={progressLabel}>{this.state.totalAmmount}/{this.state.goal} ml</FloatingLabel>
                    <div style={this.state.bloodDrop}
                    ></div>
                    <OverlayTrigger placement="bottom" overlay={renderGoalUpdate}>
                        <Button style={button} variant="danger" onClick={this.showPopup}>Zmień cel</Button>
                    </OverlayTrigger>
                    <Modal
                        show={this.state.popup}
                        onHide={this.closePopup}
                        backdrop="static"
                        keyboard={false}
                    >
                        <Modal.Header closeButton>
                            <Modal.Title>Zmień cel</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Podaj nowy cel</Form.Label>
                                    <Form.Control type="number" placeholder="Wpisz zaktualizowany cel" min={0} defaultValue={this.state.goal} onChange={this.goalChange} />
                                </Form.Group>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="primary" onClick={this.saveNewGoal}>Zapisz</Button>
                            <Button variant="danger" onClick={this.closePopup}>Wyjdź</Button>
                        </Modal.Footer>
                    </Modal>
                </Container>
            )
        } else if(!this.state.progress) {
            return (
                <Container style={mainContainer}>
                    <Container style={labelContainer}>
                        <Form.Label style={goalLabel}>Cel donacji</Form.Label>
                    </Container>
                    <FloatingLabel style={progressLabel}>Brak donacji</FloatingLabel>
                    <div style={emptyBloodDrop}
                    ></div>
                    <OverlayTrigger placement="bottom" overlay={renderGoalUpdate}>
                        <Button style={button} variant="danger" onClick={this.showPopup}>Zmień cel</Button>
                    </OverlayTrigger>
                    <Modal
                        show={this.state.popup}
                        onHide={this.closePopup}
                        backdrop="static"
                        keyboard={false}
                    >
                        <Modal.Header closeButton>
                            <Modal.Title>Zmień cel</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Podaj nowy cel</Form.Label>
                                    <Form.Control type="number" placeholder="Wpisz zaktualizowany cel" min={0} defaultValue={this.state.goal} onChange={this.goalChange} />
                                </Form.Group>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="primary" onClick={this.saveNewGoal}>Zapisz</Button>
                            <Button variant="danger" onClick={this.closePopup}>Wyjdź</Button>
                        </Modal.Footer>
                    </Modal>
                </Container>
            )
        } else {
            return (
                <Container style={mainContainer}>
                    <Container style={labelContainer}>
                        <Form.Label style={goalLabel}>Cel donacji</Form.Label>
                    </Container>
                    <FloatingLabel style={progressLabel}>Cel osiągnięty!</FloatingLabel>
                    <div style={fullBloodDrop}
                    ></div>
                    <OverlayTrigger placement="bottom" overlay={renderGoalUpdate}>
                        <Button style={button} variant="danger" onClick={this.showPopup}>Zmień cel</Button>
                    </OverlayTrigger>
                    <Modal
                        show={this.state.popup}
                        onHide={this.closePopup}
                        backdrop="static"
                        keyboard={false}
                    >
                        <Modal.Header closeButton>
                            <Modal.Title>Zmień cel</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Podaj nowy cel</Form.Label>
                                    <Form.Control type="number" placeholder="Wpisz zaktualizowany cel" min={0} defaultValue={this.state.goal} onChange={this.goalChange} />
                                </Form.Group>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="primary" onClick={this.saveNewGoal}>Zapisz</Button>
                            <Button variant="danger" onClick={this.closePopup}>Wyjdź</Button>
                        </Modal.Footer>
                    </Modal>
                </Container>
            )
        }
    }
}

export default BloodDropBar;