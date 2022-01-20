import React from "react";
import { Container } from "react-bootstrap";

const mainContainer = {
    height: "90vh",
    width: "70vw",
    backgroundColor: "red",
    display: "block", 
    float: "left"
}

class HomePageContent extends React.Component {
    render() {
        return(
            <Container style={mainContainer}>
                dupa
            </Container>
        )
    }
}

export default HomePageContent;