import axios from "axios";
import React from "react";
import { Container, Form, Button, Modal } from "react-bootstrap";
import "../css/forms.css";

const mainContainer = {
    width: "30vw",
    marginTop: "20vh"
}

class DonationForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: [],
            quantity: 450,
            popup: false
        }
    }

    setStateAsync(state) {
        return new Promise((resolve) => {
            this.setState(state, resolve)
        })
    }

    async componentDidUpdate(prevProps) {
        if (this.props.user !== prevProps.user) {
            await this.setStateAsync({ user: this.props.user })
            console.log(this.state.user.donorId)
        }
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

    addDonation = async () => {
        console.log(this.state.user.donorId)
        let url = 'http://localhost:8080/donor/';
        await axios.get(url.concat(this.state.user.donorId))
            .then(res => {
                const donor = res.data;
                console.log(donor)
                this.setState({ donor: donor })
            })

        const donationData = {
            donorId: this.state.donor.donorId,
            bloodBankId: this.state.donor.bloodBankId,
            donationDate: this.state.date,
            bloodType: this.state.donor.bloodType,
            quantity: this.state.quantity
        }

        console.log(donationData)

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

    render() {
        return (
            <Container style={mainContainer}>
                <Form.Label className="form-title">Add new donation</Form.Label>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Select birth date</Form.Label>
                        <Form.Control type="date" name="dob" placeholder="Date of Birth" onChange={this.dateChange} defaultValue={"01/01/2000"}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Quantity of donation</Form.Label>
                        <Form.Control type="number" placeholder="Quantity" min={300} max={500} defaultValue={450} onChange={this.quantityChange} />
                    </Form.Group>
                    <Button variant="primary" type="button" onClick={this.addDonation}>
                        Add donation
                    </Button>
                </Form>
                <Modal
                    show={this.state.popup}
                    // onHide={this.closePopup}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Your donation was succesfully added.</Modal.Title>
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