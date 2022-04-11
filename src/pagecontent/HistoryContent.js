import React from "react";
import { FloatingLabel, Button, Col, Container, Row, Spinner } from "react-bootstrap";
import BootstrapTable from "react-bootstrap-table-next";
import GoogleMapsContent from "./GoogleMapsContent";
import axios from 'axios';
import '../css/tableStyle.css'

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
    marginTop: "10vh",

}

const tableStyle = {
    marginTop: "5vh",
    overflowY: "auto",
    overflowX: "hidden",
    height: "50vh",
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
        dataField: "donationDate",
        text: "Data donacji",
        sort: true
    },
    {
        dataField: "quantity",
        text: "Objętość [ml]"
    },
    {
        dataField: "donationCenter",
        text: "RCKiK"
    }]

class HistoryContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            donations: [],
            bloodbanks: [],
            data: [],
            donor: []
        }
    }

    setStateAsync(state) {
        return new Promise((resolve) => {
            this.setState(state, resolve)
        })
    }

    async prepareData(i) {
        let donationCenter = '';
        for (let j=0; j<this.state.bloodbanks.length; j++) {
            if(this.state.donations[i].bloodBankId === this.state.bloodbanks[j].bloodBankId){
                donationCenter = this.state.bloodbanks[j].donationCenter
            }
        }
        let data = [...this.state.data, {
            id: i + 1,
            donationDate: this.state.donations[i].donationDate.slice(0, -19),
            quantity: this.state.donations[i].quantity,
            donationCenter: donationCenter
        }]
        await this.setStateAsync({ data });
    }

    refreshPage() {
        window.location.reload(false);
    }

    async componentDidMount() {
        await axios.get('http://localhost:8080/donor/' + this.props.user.donorId)
            .then(async res => {
                const donor = res.data;
                await this.setStateAsync({ donor });
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



        await axios.get('http://localhost:8080/bloodBank')
            .then(async res => {
                const bloodbanks = res.data;
                await this.setStateAsync({ bloodbanks });
            }).catch(function (error) {
                console.log(error)
                this.setStateAsync({ bloodbanks: [] });
            })

        for (let i = 0; i < this.state.donations.length; i++) {
            await this.prepareData(i);
        }
    }

    render() {
        {
            if (Object.keys(this.state.donations).length == 0) {
                return (
                    <Container style={mainContainerLoad}>
                        <Spinner style={{ marginTop: "10vh" }} animation="border" role="status" size={40}></Spinner>
                        <Row>
                            <Col></Col>
                            <Col></Col>
                            <Col>
                                <Button style={{ marginTop: "5vh" }} variant="danger" onClick={this.refreshPage}>Reload</Button>
                            </Col>
                        </Row>
                    </Container>
                )
            } else {
                return (
                    <Container style={mainContainerData}>
                        <Row style={{ marginTop: "5vh" }}>
                            <Col></Col>
                            <Col>
                                <FloatingLabel style={userInfoLabel}>Witaj {this.state.donor.name}, oddałeś krew już {this.state.donor.donations.length} razy! </FloatingLabel>
                            </Col>
                            <Col></Col>
                        </Row>
                        <Container style={tableStyle}>
                            <BootstrapTable
                                keyField="id"
                                data={this.state.data}
                                columns={columns}
                                striped
                                hover
                                condensed
                                variant="dark"
                            />
                        </Container>
                    </Container>
                )
            }
        }
    }
}

export default HistoryContent;