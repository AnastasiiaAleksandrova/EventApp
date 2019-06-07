import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
// import Pin from './pin.png';

import Marker from './Marker/Marker';

// const Marker = ({ text }) => <div className="active" style={{
//     color: 'white',
//     backgroundImage: 'url('+ Pin + ')',
//     padding: '5px',
//     display: 'inline-flex',
//     textAlign: 'center',
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderRadius: '100%',
//     transform: 'translate(-50%, -50%)'
//   }}>{text}</div>



class Map extends Component {
 static defaultProps = {
   center: {
     lat: 60.2019475,
     lng: 24.9286974
   },
   zoom: 12,

 };
 constructor(props){
   super(props);
   // const{lat,lng} = this.props.initialCenter;
  this.state = {
     myLat: null,
     myLon: null,
     showingInfoWindow: false
 };
 }

 componentDidMount(){
   navigator.geolocation.getCurrentPosition((position) => {
     this.setState({
       myLat:position.coords.latitude,
       myLon:position.coords.longitude
     });
     console.log(position.coords.latitude, position.coords.longitude);
   });
 }

 onMarkerClick = (props) =>
     this.setState({
       showingInfoWindow: true
     });

onClose = props => {
   if (this.state.showingInfoWindow) {
     this.setState({
       showingInfoWindow: false,
     });
   }
 };

// showInfoBox = (event) =>{
//
// }
 createMapOptions(maps) {
    return {
      streetViewControl: true,
      styles: [
            {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
            {
              featureType: 'administrative.locality',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'geometry',
              stylers: [{color: '#263c3f'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'labels.text.fill',
              stylers: [{color: '#6b9a76'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{color: '#38414e'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry.stroke',
              stylers: [{color: '#212a37'}]
            },
            {
              featureType: 'road',
              elementType: 'labels.text.fill',
              stylers: [{color: '#9ca5b3'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [{color: '#746855'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [{color: '#1f2835'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'labels.text.fill',
              stylers: [{color: '#f3d19c'}]
            },
            {
              featureType: 'transit',
              elementType: 'geometry',
              stylers: [{color: '#2f3948'}]
            },
            {
              featureType: 'transit.station',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{color: '#17263c'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [{color: '#515c6d'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.stroke',
              stylers: [{color: '#17263c'}]
            }
          ]
    }
  } 

 
 render() {
   return (
     <div style={{position: 'relative', height: '94vh', width: '100%'}} >
       <GoogleMapReact
         bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY}}
         defaultCenter={this.props.center}
         defaultZoom={this.props.zoom}
         options={this.createMapOptions}
       >
         <Marker
           lat={this.myLat}
           lng={this.myLon}
           text='dddss'
           onClick={this.onMarkerClick}
           name='current location'
         />
         {/* <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          // <div>
          //   <h4>{this.state.selectedPlace.name}</h4>
          // </div>
        </InfoWindow> */}
       </GoogleMapReact>
     </div>
   );
 }
}

export default Map;
