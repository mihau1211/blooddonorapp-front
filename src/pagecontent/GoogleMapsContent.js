import React from "react";
import { Container } from "react-bootstrap";
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mainContainer = {
    height: "90vh",
    width: "auto",
    display: "inline-block",
    alignItems: "center",
    float: "left",
}

const mapStyles = {
    width: '35vw',
    height: '35vw',
    // display: "flex"
}

const contentContainer = {
    width: "35vw",
    height: "35vw",
    itemsAlign: "center"
}

class GoogleMapsContent extends React.Component {
    render() {
        return (
            <Container style={mainContainer} className="fixed-div">
                <Container style={contentContainer}>
                    <Map
                        resetBoundsOnResize={true}
                        google={this.props.google}
                        zoom={14}
                        style={mapStyles}
                        initialCenter={
                            {
                                lat: 51.935619,
                                lng: 15.506186
                            }
                        }
                    />
                </Container>
            </Container>
        )
    }
}

export default GoogleApiWrapper({})(GoogleMapsContent);