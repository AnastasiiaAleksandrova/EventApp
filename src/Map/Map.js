import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';


const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 60.2019475,
      lng: 24.9286974
    },
    zoom: 12
  };




  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '798px', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key:'AIzaSyC505dBD4vPoZ8ToSq9KBqQCHSHXNAYRVM'}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>

      </div>
    );
  }
}

export default Map;
