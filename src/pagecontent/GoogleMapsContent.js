import React from "react";
import { Container } from "react-bootstrap";
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { geolocated } from "react-geolocated";

const mainContainer = {
    height: "90vh",
    display: "inline-block",
    alignItems: "center",
    float: "left",
}

const mapStyles = {
    width: '35vw',
    height: '35vw',
    position: "relative !important"
}

const contentContainer = {
    width: "35vw",
    height: "35vw",
    itemsAlign: "center"
}

const position = {
    lat: 51.94059093479898,
    lng: 15.518916699577375
}

class GoogleMapsContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            position: false
        }
    }

    componentDidMount(){
        console.log(this.props)
    }

    render() {
        return (
            <Container style={mainContainer} className="fixed-div">
                <Container style={contentContainer}>
                    <Map
                        resetBoundsOnResize={true}
                        google={this.props.google}
                        zoom={15}
                        style={mapStyles}
                        initialCenter={{
                            lat: this.props.bloodBank.latitude,
                            lng: this.props.bloodBank.longitude
                        }}
                    >
                        <Marker position={{
                            lat: this.props.bloodBank.latitude,
                            lng: this.props.bloodBank.longitude
                        }} />
                    </Map>
                </Container>
            </Container>
        )
    }
}

export default GoogleApiWrapper({})(GoogleMapsContent);