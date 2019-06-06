import React from 'react';
import './EventBox.css';

function EventBox(props) {

    const style = {
      display: "flex",
      padding: ".5em",
      margin: ".1em",
      border: "1px solid grey",
      borderRadius: "3px",
      
    }

    return (
      <div className="EventBox">
        <div className="imagePic"><img src={props.image} alt="event-img" /></div>
        <div className="eventName">
          <h1>{props.name}</h1>
          <p>{props.address}</p>
          <p>{props.intro}</p>
        </div>
      </div>
    );
  }

export default EventBox;
