import React from "react";
import { FloatingLabel, Button, Col, Container, Row, Modal, Form } from "react-bootstrap";
import BootstrapTable from "react-bootstrap-table-next";
import filterFactory, { selectFilter, numberFilter, textFilter } from "react-bootstrap-table2-filter";
import paginationFactory from "react-bootstrap-table2-paginator";
import GoogleMapsContent from "./GoogleMapsContent";
import axios from 'axios';
import '../css/tableStyle.css'
import { Comparator } from "react-bootstrap-table2-filter";

const mainContainerLoad = {
    height: "30vh",
    width: "50vw",
    itemsAlign: "center",
    textAlign: "center",
    marginTop: "15vh"

}

const mainContainerData = {
    height: "60vh",
    width: "50vw",
    itemsAlign: "center",
    textAlign: "center",
    marginTop: "5vh",

}

const tableStyle = {
    marginTop: "5vh",
    overflowY: "auto",
    overflowX: "hidden",
    height: "65vh",
    width: "50vw",
    itemsAlign: "center",
    textAlign: "center"
}

const userInfoLabel = {
    fontSize: "26px",
    fontWeight: "bold"
}

const columns = [
    {
        dataField: "name",
        text: "Imię i nazwisko",
        filter: textFilter({
            placeholder: '...'
        })
    },
    {
        dataField: "age",
        text: "Wiek",
        filter: numberFilter({
            placeholder: '...',
            comparators: [Comparator.GE, Comparator.LE],
            defaultValue: { number: 0, comparator: Comparator.GE },
        })
    },
    {
        dataField: "bloodType",
        text: "Grupa krwi",
        filter: selectFilter({
            options: {
                'A Rh(+)': 'A Rh(+)',
                'A Rh(-)': 'A Rh(-)',
                'B Rh(+)': 'B Rh(+)',
                'B Rh(-)': 'B Rh(-)',
                'AB Rh(+)': 'AB Rh(+)',
                'AB Rh(-)': 'AB Rh(-)',
                '0 Rh(+)': '0 Rh(+)',
                '0 Rh(-)': '0 Rh(-)',
            },
            defaultValue: 0,
            placeholder: '...'
        })
    },
    {
        dataField: "gender",
        text: "Płeć",
        filter: selectFilter({
            options: {
                'M': 'M',
                'K': 'K',
            },
            defaultValue: 0,
            placeholder: ' '
        })
    },
    {
        dataField: "donationsNumber",
        text: "Ilość donacji",
        filter: numberFilter({
            placeholder: '...',
            comparators: [Comparator.GE, Comparator.LE],
            defaultValue: { number: 0, comparator: Comparator.GE },
        })
    },
    {
        dataField: "isAbleToDonate",
        text: "Możliwość oddania krwi",
        sort: true,
        filter: selectFilter({
            options: {
                'Tak': 'Tak',
                'Nie': 'Nie',
            },
            defaultValue: 0,
            placeholder: ' '
        })
    },
    {
        dataField: "daysToNextDonation",
        text: "Dni do następnej donacji",
        sort: true,
        filter: numberFilter({
            placeholder: '...',
            comparators: [Comparator.GE, Comparator.LE],
            defaultValue: { number: 0, comparator: Comparator.GE },
        })
    }
]

const selectRow = {
    mode: "checkbox",
    clickToSelect: true,
    style: { background: "white" }
}

class AdminMessagesContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bloodBank: [],
            data: [],
            emails: [],
            popup: false,
            messageContent: '',
            messageFooter: 'Ta wiadomość została wygenerowana automatycznie. Prosimy na nią nie odpowiadać.',
            subject: ''
        }
    }

    computeDays(date) {
        let today = new Date(Date.now());
        let lastDate = new Date(date);
        let diff = Math.floor((today.getTime() - lastDate.getTime()) / (1000 * 3600 * 24))
        let next = 56 - diff;
        if (next < 0) next = 0;
        return next;

    }

    checkDonorAge(birth) {
        let now = new Date(Date.now());
        now.setDate(15);
        let birthDate = new Date(birth);
        let years = parseInt(now.getUTCFullYear()) - parseInt(birthDate.getUTCFullYear());
        if (
            parseInt(now.getUTCMonth()) < parseInt(birthDate.getUTCMonth()) ||
            (parseInt(now.getUTCDate()) < parseInt(birthDate.getUTCDate())) && parseInt(now.getUTCMonth()) <= parseInt(birthDate.getUTCMonth())) {
            years = years - 1;
        }

        return years;
    }

    checkIfIsAbleToDonate(lastDonation) {
        let today = new Date(Date.now());
        let lastDate = new Date(lastDonation);
        let diff = Math.floor((today.getTime() - lastDate.getTime()) / (1000 * 3600 * 24))
        let next = 56 - diff;
        if (next <= 0) {
            return "Tak";
        } else {
            return "Nie";
        }
    }

    setGender(gender) {
        if (gender === 'MALE') {
            return 'M'
        } else if (gender === 'FEMALE') {
            return 'K'
        } else {
            return ' '
        }
    }

    bloodTypeChange(type) {
        switch (type) {
            case "APLUS":
                return "A Rh(+)";
            case "AMINUS":
                return "A Rh(-)";
            case "BPLUS":
                return "B Rh(+)";
            case "AMINUS":
                return "B Rh(-)";
            case "ABPLUS":
                return "AB Rh(+)";
            case "ABMINUS":
                return "AB Rh(-)";
            case "ZEROPLUS":
                return "0 Rh(+)";
            case "ZEROMINUS":
                return "0 Rh(-)";
        }
    }

    setStateAsync(state) {
        return new Promise((resolve) => {
            this.setState(state, resolve)
        })
    }

    async getBloodBank() {
        await axios.get('http://localhost:8080/bloodBank/' + this.props.user.bloodBankId)
            .then(async res => {
                const bloodBank = res.data;
                await this.setStateAsync({ bloodBank });
            }).catch(function (error) {
                console.log(error)
                this.setState({ bloodBank: [] });
            })
    }

    async prepareData(i) {
        let data = [...this.state.data, {
            id: i + 1,
            donorId: this.state.donors[i].donorId,
            name: this.state.donors[i].surname.concat(' ', this.state.donors[i].name),
            age: this.checkDonorAge(this.state.donors[i].birthdate),
            gender: this.setGender(this.state.donors[i].gender),
            bloodType: this.bloodTypeChange(this.state.donors[i].bloodType),
            isAbleToDonate: this.checkIfIsAbleToDonate(this.state.donors[i].lastDonationDate),
            donationsNumber: this.state.donors[i].donations.length,
            daysToNextDonation: this.computeDays(this.state.donors[i].lastDonationDate)
        }]
        await this.setStateAsync({ data });
    }

    async getDonorsEmail(users) {
        let array = [];
        for (let i = 0; i < users.length; i++) {
            await axios.get('http://localhost:8080/user/donor/' + users[i])
                .then(async res => {
                    const emails = res.data.email;
                    array.push(emails);
                    await this.setStateAsync({ emails: array });
                }).catch(function (error) {
                    console.log(error)
                    this.setState({ emails: [] });
                })
        }
    }

    triggerButton = async () => {
        let rows = this.node.selectionContext.selected;
        let users = [];
        for (let i = 0; i < rows.length; i++) {
            users.push(this.state.data[rows[i] - 1].donorId);
        }
        await this.getDonorsEmail(users);
        this.handleShow()
    }

    handleShow = () => {
        this.setState({ popup: true });
    }

    handleClose = () => {
        this.setState({ popup: false });
        this.setState({ messageContent: 'Drogi dawco,\npotrzebujemy twojej krwi aby udzielić pomocy potrzebującym. Jeżeli chcesz pomóc, zgłoś się do najbliższego Centrum Krwiodawstwa. Jeżeli potrzebujesz pomocy, skontaktuj się ze swoim oddziałem RCKiK.' })
    }

    handleChange = (event) => {
        this.setState({ messageContent: event.target.value });
    }

    sendEmail = async () => {
        let message = this.state.messageContent + '\n\n' + this.state.messageFooter;
        for (let i = 0; i < this.state.emails.length; i++) {
            await axios.post('http://localhost:8080/user/sendmail', {
                from: this.props.user.email,
                to: this.state.emails[i],
                subject: this.state.subject,
                message: message
            }).then(async (res) => {
                if (res.status === 200) {
                    this.setStateAsync({ popup: false })
                }
                console.log(res);
            }).catch(function (error) {
                console.log(error);
            });
        }
    }

    async componentDidMount() {
        await this.getBloodBank();
        await this.setStateAsync({ donors: this.state.bloodBank.donors });
        for (let i = 0; i < this.state.bloodBank.donors.length; i++) {
            await this.prepareData(i);
        }
        await this.setStateAsync({ messageContent: 'Drogi dawco,\npotrzebujemy twojej krwi aby udzielić pomocy potrzebującym. Jeżeli chcesz pomóc, zgłoś się do najbliższego Centrum Krwiodawstwa. Jeżeli potrzebujesz pomocy, skontaktuj się ze swoim oddziałem RCKiK.\nPozdrawiamy, ' + this.state.bloodBank.donationCenter })
        await this.setStateAsync({ subject: 'Pilna potrzeba krwi - ' + this.state.bloodBank.donationCenter })
    }

    render() {
        return (
            <Container style={mainContainerData}>
                <Row style={{ marginTop: "5vh" }}>
                    <Col></Col>
                    <Col>
                        <FloatingLabel style={userInfoLabel}>{this.state.bloodBank.donationCenter} </FloatingLabel>
                    </Col>
                    <Col></Col>
                </Row>
                <Container style={tableStyle}>
                    <BootstrapTable
                        ref={n => this.node = n}
                        keyField="id"
                        data={this.state.data}
                        columns={columns}
                        striped
                        hover
                        condensed
                        variant="dark"
                        selectRow={selectRow}
                        filter={filterFactory()}
                        pagination={paginationFactory()}
                        filterPosition="top"
                        defaultSorted={[{
                            dataField: 'daysToNextDonation',
                            order: 'asc'
                        }]}
                    />
                </Container>
                <Row>
                    <Col></Col>
                    <Col></Col>
                    <Col>
                        <Button variant="danger" onClick={this.triggerButton}>Wyślij wiadomość</Button>
                    </Col>
                </Row>
                <Modal show={this.state.popup}>
                    <Modal.Header closeButton>
                        <Modal.Title>Wyślij wiadomość do wybranych dawców</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Temat:</Form.Label>
                                <Form.Control as="textarea" onChange={this.handleChange} rows={1} defaultValue={this.state.subject}></Form.Control>
                                <Form.Label>Treść wiadomości:</Form.Label>
                                <Form.Control as="textarea" onChange={this.handleChange} rows={6} defaultValue={this.state.messageContent} /></Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                        <Button variant="danger" onClick={this.sendEmail}>
                            Wyślij
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Container>
        )
    }
}

export default AdminMessagesContent;