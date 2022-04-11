import axios from "axios";
import React from "react";
import { Dropdown, Container, Form, Button, Modal, DropdownButton } from "react-bootstrap";
import "../css/forms.css";

const mainContainer = {
    width: "30vw",
    marginTop: "20vh"
}

class DonationForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            donor: [],
            bloodBanks: [],
            choosedBank: {
                id: 0,
                name: 'Wybierz'
            },
            quantity: 450,
            popup: false
        }
    }

    setStateAsync(state) {
        return new Promise((resolve) => {
            this.setState(state, resolve)
        })
    }

    quantityChange = e => {
        this.setState({ quantity: e.target.value })
    }

    dateChange = e => {
        this.setState({ date: e.target.value })
    }

    closePopup = () => {
        this.setState({ popup: false })
    }

    async getDonor() {
        await axios.get('http://localhost:8080/donor/' + this.props.user.donorId)
            .then(async res => {
                const donor = res.data;
                await this.setStateAsync({ donor });
            }).catch(function (error) {
                console.log(error)
            })
    }

    async getBloodBanks() {
        await axios.get('http://localhost:8080/bloodBank/')
            .then(async res => {
                const bloodBanks = res.data;
                await this.setStateAsync({ bloodBanks })
            }).catch((err) => {
                return err;
            });
    }

    addDonation = async () => {
        await this.getDonor();
        const donationData = {
            donorId: this.state.donor.donorId,
            bloodBankId: this.state.choosedBank.id,
            donationDate: this.state.date,
            bloodType: this.state.donor.bloodType,
            quantity: this.state.quantity
        }

        await axios({
            method: 'POST',
            url: 'http://localhost:8080/donation',
            data: donationData
        }).then((res) => {
            if (res.status === 201) {
                this.setState({ popup: true })
            }
        }).catch((err) => {
            return err;
        });
    }

    handleDropdownClick = async (e) => {
        this.setStateAsync({
            choosedBank: {
                id: e.target.id,
                name: e.target.text
            }
        })
    }

    async componentDidMount() {
        await this.getBloodBanks()
    }

    render() {
        return (
            <Container style={mainContainer}>
                <Form.Label className="form-title">Dodaj nową donację</Form.Label>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Miejsce donacji</Form.Label>
                        <DropdownButton variant="danger" title={this.state.choosedBank.name}>
                            {this.state.bloodBanks.map((bank, index) => {
                                return <Dropdown.Item
                                    key={bank.bloodBankId}
                                    id={bank.bloodBankId}
                                    onClick={this.handleDropdownClick}
                                >
                                    {bank.donationCenter}
                                </Dropdown.Item>
                            })}
                        </DropdownButton>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Data donacji</Form.Label>
                        <Form.Control type="date" name="dob" onChange={this.dateChange} defaultValue={"01/01/2000"} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Objętość donacji</Form.Label>
                        <Form.Control type="number" placeholder="Quantity" min={300} max={500} defaultValue={450} onChange={this.quantityChange} />
                    </Form.Group>
                    <Button variant="danger" type="button" onClick={this.addDonation}>
                        Dodaj donację
                    </Button>
                </Form>
                <Modal
                    show={this.state.popup}
                    onHide={this.closePopup}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Udało się dodać donację.</Modal.Title>
                    </Modal.Header>
                    <Modal.Footer>
                        <Button variant="danger" onClick={this.closePopup}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </Container>
        )
    }
}

export default DonationForm;