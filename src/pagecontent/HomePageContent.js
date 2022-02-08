import React from "react";
import { Col, Container, FloatingLabel, Form, ProgressBar, Row } from "react-bootstrap";

const mainContainer = {
    height: "90vh",
    width: "auto",
    backgroundColor: "silver",
    itemsAlign: "center",
    textAlign: "center"
}

const locationLabel = {
    fontSize: "26px",
    marginTop: "5vh"
}

class HomePageContent extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            user: [],
            gender: '',
            barConst: 5,
            currentValue: 5000
        }
    }

    async setBarMaxValues(){
        if(this.state.user.gender === "MALE"){
            await this.setStateAsync({barConst: 6})
        } else if(this.state.user.gender === "FEMALE"){
            await this.setStateAsync({barConst: 5})
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
            console.log(this.state.user)
            this.setBarMaxValues();
        }
    }
    
    render() {
        return (
            <Container style={mainContainer}>
                <Row style={{height:"15vh"}}>
                </Row>
                <Row >
                    <Col ></Col>
                    <Col xs={7}>
                        <FloatingLabel>HDK lv.1</FloatingLabel>
                        <ProgressBar variant='danger' now={this.state.currentValue} min={0} max={this.state.barConst * 1000}></ProgressBar>
                        <FloatingLabel>HDK lv.2</FloatingLabel>
                        <ProgressBar variant='danger' now={this.state.currentValue} min={0} max={this.state.barConst * 2000}></ProgressBar>
                        <FloatingLabel>HDK lv.3</FloatingLabel>
                        <ProgressBar variant='danger' now={this.state.currentValue} min={0} max={this.state.barConst * 3000}></ProgressBar>
                    </Col>
                    <Col ></Col>
                </Row>
            </Container>
        )
    }
}

export default HomePageContent;