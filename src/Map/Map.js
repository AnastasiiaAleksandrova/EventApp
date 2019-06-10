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
     lat: 60.1847984,
     lng: 24.9389162,
   },
   zoom: 13,

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
