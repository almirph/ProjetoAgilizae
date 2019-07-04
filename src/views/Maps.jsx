import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import { style } from 'variables/Variables.jsx';
import axios from 'axios';
import { Button } from "semantic-ui-react";
import ReactDOM from "react-dom";

class Maps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      bares: [],
      posiCentral: {
        lat: -21.772688,
        lon: -43.349609
      }
    }
  }

  componentWillMount() {
    axios.get('http://localhost:3000/Bares').then(res => {
      const bares = res.data;
      console.log(bares);
      this.setState({ bares }, () => {
        this.retornaPosiMeio();
      });
    });
  }

  renderMarker() {
    return this.state.bares.map(bar => {
      return <Marker key={bar.id} name={bar.nome} id={bar.id} position={{ lat: bar.coordenadas.lat, lng: bar.coordenadas.lon }} onClick={this.onMarkerClick} />
    });
  }

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }

    

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };

  retornaPosiMeio() {
    let length = this.state.bares.length;

    let contLat = 0;
    let contLon = 0;

    for (let i = 0; i < length; i++) {
      contLat += this.state.bares[i].coordenadas.lat;
      contLon += this.state.bares[i].coordenadas.lat;
    }

    contLat = contLat / length;
    contLon = contLon / length;

    this.setState({
      posiCentral: {
        lat: contLat,
        lon: contLon
      }
    })
  }

  handleClick(e) {
    console.log(this.props)
    this.props.history.push(`/user/profile/${this.state.selectedPlace.id}`)
  }

  render() {
    return (
      <Map google={this.props.google} zoom={14} style={{ height: '800px' }} initialCenter={{
        lat: this.state.posiCentral.lat,
        lng: this.state.posiCentral.lon
      }}>

        {this.renderMarker()}

        <InfoWindow marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
          <div>
            <h6>{this.state.selectedPlace.name}</h6>
            <div id="iwckkeaemen" />
          </div>
        </InfoWindow>
      </Map>
    );
  }
}


export default GoogleApiWrapper({
  apiKey: "AIzaSyB-h0Dx7oiooKeDjXeZJGrnYNmbsnF2tCI"
})(Maps);
