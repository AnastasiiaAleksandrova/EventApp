import React from 'react';
import Pin from '../pin.png';

let Marker = ({ text }) => {

    return (

      <div style={{
          color: 'white',
          backgroundImage: 'url('+ Pin + ')',
          padding: '5px',
          display: 'inline-flex',
          textAlign: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '100%',
          transform: 'translate(-50%, -50%)',
        
        }}>{text}</div>

    );
  }



 export default Marker;
