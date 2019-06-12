import React from 'react';
import './EventBox.css';

function EventBox(props) {

    return (
      <div className="EventBox">

        <div className="imagePic"><img src={props.image} alt="event-img" /></div>
        <div>
          <h3>{props.name}</h3>
          <p>{props.intro}</p>
          <p>{props.date}  at {props.time}</p>
          <p>{props.address} {props.postcode} {props.city}</p>

        </div>

      </div>
    );
  }

export default EventBox;
