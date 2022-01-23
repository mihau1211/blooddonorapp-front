import React from "react";
import { Col, Container, Form, Row, Table } from "react-bootstrap";
import GoogleMapsContent from "./GoogleMapsContent";

const mainContainer = {
    height: "60vh",
    width: "50vw",
    itemsAlign: "center",
    textAlign: "center",
    marginTop: "15vh",
    overflowY: "scroll",
    overflowX: "hidden"

}

const locationLabel = {
    fontSize: "26px",
    marginTop: "5vh"
}

const tableStyle = {
}

class HistoryContent extends React.Component {
    render() {
        return (
            <Container style={mainContainer}>
                <Table responsive variant="danger" scrollY style={tableStyle} striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Donation date</th>
                            <th>Quantity [ml]</th>
                            <th>Donation center</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>test</td>
                            <td>donor</td>
                            <td>01/02/2001</td>
                            <td>450</td>
                            <td>Zielona Góra</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>test</td>
                            <td>donor</td>
                            <td>01/02/2001</td>
                            <td>450</td>
                            <td>Zielona Góra</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>test</td>
                            <td>donor</td>
                            <td>01/02/2001</td>
                            <td>450</td>
                            <td>Zielona Góra</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>test</td>
                            <td>donor</td>
                            <td>01/02/2001</td>
                            <td>450</td>
                            <td>Zielona Góra</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>test</td>
                            <td>donor</td>
                            <td>01/02/2001</td>
                            <td>450</td>
                            <td>Zielona Góra</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>test</td>
                            <td>donor</td>
                            <td>01/02/2001</td>
                            <td>450</td>
                            <td>Zielona Góra</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>test</td>
                            <td>donor</td>
                            <td>01/02/2001</td>
                            <td>450</td>
                            <td>Zielona Góra</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>test</td>
                            <td>donor</td>
                            <td>01/02/2001</td>
                            <td>450</td>
                            <td>Zielona Góra</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>test</td>
                            <td>donor</td>
                            <td>01/02/2001</td>
                            <td>450</td>
                            <td>Zielona Góra</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>test</td>
                            <td>donor</td>
                            <td>01/02/2001</td>
                            <td>450</td>
                            <td>Zielona Góra</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>test</td>
                            <td>donor</td>
                            <td>01/02/2001</td>
                            <td>450</td>
                            <td>Zielona Góra</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>test</td>
                            <td>donor</td>
                            <td>01/02/2001</td>
                            <td>450</td>
                            <td>Zielona Góra</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>test</td>
                            <td>donor</td>
                            <td>01/02/2001</td>
                            <td>450</td>
                            <td>Zielona Góra</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>test</td>
                            <td>donor</td>
                            <td>01/02/2001</td>
                            <td>450</td>
                            <td>Zielona Góra</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>test</td>
                            <td>donor</td>
                            <td>01/02/2001</td>
                            <td>450</td>
                            <td>Zielona Góra</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>test</td>
                            <td>donor</td>
                            <td>01/02/2001</td>
                            <td>450</td>
                            <td>Zielona Góra</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>test</td>
                            <td>donor</td>
                            <td>01/02/2001</td>
                            <td>450</td>
                            <td>Zielona Góra</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>test</td>
                            <td>donor</td>
                            <td>01/02/2001</td>
                            <td>450</td>
                            <td>Zielona Góra</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>test</td>
                            <td>donor</td>
                            <td>01/02/2001</td>
                            <td>450</td>
                            <td>Zielona Góra</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>test</td>
                            <td>donor</td>
                            <td>01/02/2001</td>
                            <td>450</td>
                            <td>Zielona Góra</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>test</td>
                            <td>donor</td>
                            <td>01/02/2001</td>
                            <td>450</td>
                            <td>Zielona Góra</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>test</td>
                            <td>donor</td>
                            <td>01/02/2001</td>
                            <td>450</td>
                            <td>Zielona Góra</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>test</td>
                            <td>donor</td>
                            <td>01/02/2001</td>
                            <td>450</td>
                            <td>Zielona Góra</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>test</td>
                            <td>donor</td>
                            <td>01/02/2001</td>
                            <td>450</td>
                            <td>Zielona Góra</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>test</td>
                            <td>donor</td>
                            <td>01/02/2001</td>
                            <td>450</td>
                            <td>Zielona Góra</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>test</td>
                            <td>donor</td>
                            <td>01/02/2001</td>
                            <td>450</td>
                            <td>Zielona Góra</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>test</td>
                            <td>donor</td>
                            <td>01/02/2001</td>
                            <td>450</td>
                            <td>Zielona Góra</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>test</td>
                            <td>donor</td>
                            <td>01/02/2001</td>
                            <td>450</td>
                            <td>Zielona Góra</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>test</td>
                            <td>donor</td>
                            <td>01/02/2001</td>
                            <td>450</td>
                            <td>Zielona Góra</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>test</td>
                            <td>donor</td>
                            <td>01/02/2001</td>
                            <td>450</td>
                            <td>Zielona Góra</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>test</td>
                            <td>donor</td>
                            <td>01/02/2001</td>
                            <td>450</td>
                            <td>Zielona Góra</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>test</td>
                            <td>donor</td>
                            <td>01/02/2001</td>
                            <td>450</td>
                            <td>Zielona Góra</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>test</td>
                            <td>donor</td>
                            <td>01/02/2001</td>
                            <td>450</td>
                            <td>Zielona Góra</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>test</td>
                            <td>donor</td>
                            <td>01/02/2001</td>
                            <td>450</td>
                            <td>Zielona Góra</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>test</td>
                            <td>donor</td>
                            <td>01/02/2001</td>
                            <td>450</td>
                            <td>Zielona Góra</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>test</td>
                            <td>donor</td>
                            <td>01/02/2001</td>
                            <td>450</td>
                            <td>Zielona Góra</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>test</td>
                            <td>donor</td>
                            <td>01/02/2001</td>
                            <td>450</td>
                            <td>Zielona Góra</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>test</td>
                            <td>donor</td>
                            <td>01/02/2001</td>
                            <td>450</td>
                            <td>Zielona Góra</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>test</td>
                            <td>donor</td>
                            <td>01/02/2001</td>
                            <td>450</td>
                            <td>Zielona Góra</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        )
    }
}

export default HistoryContent;