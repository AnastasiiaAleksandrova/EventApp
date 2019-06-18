import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import './Map.css';

export class MapContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      markerArr: props.markers,
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      streetViewControl: true,

    }

    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClick = this.onMapClick.bind(this);
  }

  onMarkerClick = (props, marker, e) => {
    console.log('maprker is clicked!');
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }


  onMapClick = (props) => {
    console.log('map is clicked!');
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  }

  render() {
    let center = this.props.center;
  //  console.log(this.props);
    if (this.props.selectedEvent != null) {
      center = {lat: this.props.selectedEvent.location.lat, lng: this.props.selectedEvent.location.lon};
    }

    return (
      <div className='map-wrapper' style={this.props.style}>
      <Map google={this.props.google} zoom={14} initialCenter={this.props.center} center={center} style={this.props.style} onClick={this.onMapClick} >
          {this.props.events.map((el, index) => {
            if (center.lat === el.lat && center.lng === el.lon) {
              return (
                <Marker
                  key={index}
                  position={{lat: el.lat, lng: el.lon}}
                  onClick={this.onMarkerClick}
                  icon = {{
                  url: "http://maps.google.com/mapfiles/ms/icons/blue.png"}}
                  name={el.address}/>)
            } else {
              return (

                <Marker
                  key={index}
                  position={{lat: el.lat, lng: el.lon}}
                  onClick={this.onMarkerClick}
                  /*icon = {{
                  url: "http://icons.iconarchive.com/icons/paomedia/small-n-flat/32/map-marker-icon.png"}}*/
                  name={el.address}
                />

              );

            }
          })
          }

          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onClose}
          >
            <div>
              <h4>{this.state.selectedPlace.name}</h4>
            </div>
          </InfoWindow>

      </Map>

      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: (process.env.REACT_APP_GOOGLE_API_KEY)
})(MapContainer)
