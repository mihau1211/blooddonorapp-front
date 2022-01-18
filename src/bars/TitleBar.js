import React from "react";
import { Container, Row, Col, Button, Nav } from "react-bootstrap";
import "../css/bars.css"

class TitleBar extends React.Component {
    render() {
        return (
            <Container className="title-bar">
                <Button className='nav-button'>dupa</Button>
                <Button className='nav-button'>dupa</Button>
                <Button className='nav-button'>dupa</Button>
                <Button className='nav-button'>dupa</Button>
            </Container>
        )
    }
}

export default TitleBar;