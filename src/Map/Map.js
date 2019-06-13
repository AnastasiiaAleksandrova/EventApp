import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
<<<<<<< HEAD
<<<<<<< HEAD
import Marker from './Marker/Marker';
=======

>>>>>>> smth
=======
// import Marker from './Marker/Marker';

let Marker = () => <div><img width="25" height="20" src='./pin.png'/></div>
>>>>>>> smth

class Map extends Component {
 static defaultProps = {
   center: {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
     lat: 60.2019475,
     lng: 24.9286974

=======
    lat: 60.1847984,
    lng: 24.9389162,
>>>>>>> smth
   },
   zoom: 13,
=======
     lat: 60.2019475,
     lng: 24.9286974
   }
   zoom: 12,
>>>>>>> smth

=======
    lat: 60.1847984,
    lng: 24.9389162,
   },
   zoom: 13,
>>>>>>> smth
 };
 constructor (props){
   super(props)
   this.state = {
    myLat: null,
    myLon: null,
   }
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

// showInfoBox = (event) =>{
//
// }


 render() {
   return (
     <div style={{position: 'relative', height: '94vh', width: '100%'}} >

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
<<<<<<< HEAD
=======
            img_src={this.props.events.img_src}
>>>>>>> smth
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