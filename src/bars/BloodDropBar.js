import React from 'react';
import { Container } from 'react-bootstrap';
import '../css/blooddrop.css';
import '../css/bars.css';

const mainContainer = {
    width: "16vw",
    height: "90vh",
    marginLeft: "84vw"
}

class BloodDropBar extends React.Component {
    render() {
        return(
            <Container className='blood-bar' style={mainContainer}>
                <div className="blood-drop"></div>
            </Container>
        )
    }
}

export default BloodDropBar;