import React, { Component } from 'react';
import { GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

import CurrentLocation from './CurrentLocation';


 class MapContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      markerArr: props.markers,
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      streetViewControl: true
    }
  
    // binding this to event-handler functions
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClick = this.onMapClick.bind(this);
  }
  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }
  onMapClick = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  }
  render() {
    const style = {
      width: '100%',
      height: '94vh',
      position:'relative',
      'marginLeft': 'auto',
      'marginRight': 'auto'
    }
    return (
      <CurrentLocation
        centerAroundCurrentLocation
        google={this.props.google}
        style={style}
        onClick={this.onMapClicked}
      >
    <Marker
        onClick={this.onMarkerClick}  />
         {this.props.events.map((el, index) => {
         return(
    <Marker
           
            onClick={this.onMarkerClick}
           position = {{ lat: el.lat, lng: el.lon }}
           name={ el.street_address }

            />
         )
       } )
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
      </CurrentLocation>
    );
  }
}

export default GoogleApiWrapper({
    apiKey: (process.env.REACT_APP_GOOGLE_API_KEY)
})(MapContainer);
