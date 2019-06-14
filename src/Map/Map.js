import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import './Map.css';
import Marker from './Marker/Marker';

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 60.2019475,
      lng: 24.9286974
    },
    zoom: 12,
  };

  componentDidMount(){
    navigator.geolocation.getCurrentPosition((position) => {
      this.setState({
        myLat:position.coords.latitude,
        myLon:position.coords.longitude
      });
    });
  }

  onMarkerClick = props =>
    this.setState({
      showInfoWindow: true
    });

  onClose = props => {
    if (this.state.showInfoWindow) {
      this.setState({
        showInfoWindow: false,
      });
    }
  };

  render() {
    return (
      <div className='map-wrapper' style={this.props.style}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          options={this.createMapOptions}
        >
        {this.props.events.map((el, index) => {
          return(
            <Marker
              key={index}
              lat={el.lat}
              lng={el.lon}
              text='ХУЙ!'
              onClick={this.onMarkerClick}
            />
          )
        })}
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
