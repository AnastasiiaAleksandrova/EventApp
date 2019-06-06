import React from 'react';


function EventBox(props) {

    const style = {
      padding: ".5em",
      margin: ".1em",
      border: "1px solid grey",
      borderRadius: "3px",
      display: "block"
    }
  
    return (
      <div className="EventBox" style={style}>
        <div className="eventName">{props.name}</div>
        <div className="eventAddress">{props.address}</div>
        <div className="eventIntro">{props.intro}</div>
      </div>
    );
  }

export default EventBox;