import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker/Marker';

class Map extends Component {
 static defaultProps = {
   center: {
<<<<<<< HEAD
     lat: 60.2019475,
     lng: 24.9286974

   },
   zoom: 13,
 };
 constructor (props){
   super(props)
   this.state = {
    myLat: null,
    myLon: null,
   }
=======
    lat: 60.1847984,
    lng: 24.9389162,
   },
   zoom: 13,
>>>>>>> smth
 };

 componentDidMount(){
   navigator.geolocation.getCurrentPosition((position) => {
     this.setState({
       myLat:position.coords.latitude,
       myLon:position.coords.longitude
     });
console.log(position);
   });
 };

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

<<<<<<< HEAD
 render() {
   return (
     <div style={{position: 'relative', height: '94vh', width: '100%'}} >
=======
// showInfoBox = (event) =>{
//
// }

 createMapOptions(maps) {
    return {
      streetViewControl: true,
    }
  } 
>>>>>>> smth
       <GoogleMapReact
  } 
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
            onClick={this.onMarkerClick} />
         )
       } )
 }

     <Marker
      lat={this.state.myLat}
      lng={this.state.myLon}
       />
    </GoogleMapReact>
  </div>
   );
 }
};


export default Map;
