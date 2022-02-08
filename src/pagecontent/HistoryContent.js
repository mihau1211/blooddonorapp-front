import React from "react";
import { Button, Col, Container, Form, Row, Spinner, Table } from "react-bootstrap";
import GoogleMapsContent from "./GoogleMapsContent";
import axios from 'axios';

const mainContainerLoad = {
    height: "30vh",
    width: "50vw",
    itemsAlign: "center",
    textAlign: "center",
    marginTop: "15vh",

}

const mainContainerData = {
    height: "60vh",
    width: "50vw",
    itemsAlign: "center",
    textAlign: "center",
    marginTop: "15vh",

}

const tableStyle = {
    marginTop: "5vh",
    overflowY: "auto",
    overflowX: "hidden",
    height: "50vh",
    width: "50vw",
    itemsAlign: "center",
    textAlign: "center",
    // marginTop: "15vh"
}

class HistoryContent extends React.Component {
    state = {
        donations: [],
        bloodbank: []
    }

    refreshPage() {
        window.location.reload(false);
    }

    componentDidMount() {
        axios.get('http://localhost:8080/donation/donor/2')
            .then(res => {
                const donations = res.data;
                this.setState({ donations });
                // console.log(donations)
            }).catch(function (error) {
                // console.log(error)
                this.setState({ donations: [] });
            })



        axios.get('http://localhost:8080/bloodBank/1')
            .then(res => {
                const bloodbank = res.data;
                this.setState({ bloodbank });
                // console.log(bloodbank)
            }).catch(function (error) {
                // console.log(error)
                this.setState({ bloodbank: [] });
            })
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
                                <Button style={{marginTop: "5vh"}} variant="danger" onClick={this.refreshPage}>Reload</Button>
                            </Col>
                        </Row>
                    </Container>
                )
            } else {
                return (
                    <Container style={mainContainerData}>
                        <Container style={tableStyle}>
                            <Table responsive variant="danger" striped bordered hover size="sm">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Donation date</th>
                                        <th>Quantity [ml]</th>
                                        <th>Donation center</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.donations.map((item) => {
                                        return (
                                            <tr>
                                                <td>{item.donationId}</td>
                                                <td>{item.donationDate}</td>
                                                <td>{item.quantity}</td>
                                                <td>{this.state.bloodbank.donationCenter}</td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </Table>
                        </Container>
                        <Row style={{marginTop: "5vh"}}>
                            <Col></Col>
                            <Col></Col>
                            <Col>
                                <Button style={{ width: "" }} variant="danger" onClick={this.refreshPage}>Reload</Button>
                            </Col>
                        </Row>
                    </Container>
                )
            }
        }

        // return (
        //     <Container style={mainContainer}>
        //         <Table responsive variant="danger" striped bordered hover size="sm">
        //             <thead>
        //                 <tr>
        //                     <th>#</th>
        //                     <th>Donation date</th>
        //                     <th>Quantity [ml]</th>
        //                     <th>Donation center</th>
        //                 </tr>
        //             </thead>
        //             <tbody>
        //                 {this.state.donations.map((item) => {
        //                     return (
        //                         <tr>
        //                             <td>{item.donationId}</td>
        //                             <td>{item.donationDate}</td>
        //                             <td>{item.quantity}</td>
        //                             <td>{this.state.bloodbank.donationCenter}</td>
        //                         </tr>
        //                     )
        //                 })}
        //             </tbody>
        //         </Table>
        //     </Container>
        // )
    }
}

export default HistoryContent;