import React from 'react';
import './EventBox.css';

function EventBox(props) {
    return (
      <div className="EventBox">
        <div className="image-holder">
          <img src={props.image} alt="event-img" />
        </div>

          <p className='name'>What:<br></br>{props.name}</p>
          <p className="timeStyle">When:{props.date} {props.time}</p>
          <p className="address">Where:<br></br>{props.address} {props.postcode} {props.city}</p>
          <p className="intro">Info:<br></br>{props.intro}</p>
          <p className="timeStyle">HERE IS GONNA BE URL FOR EVENT</p>
      </div>
    );
  }
export default EventBox;
