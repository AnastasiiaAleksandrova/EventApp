import React from 'react';


function EventBox(props) {

    return (
      <div className="EventBox">
        <div className="eventName">{props.name}</div>
        <div className="eventAddress">{props.address}</div>
        <div className="eventIntro">{props.intro}</div>
      </div>
    );
  }

export default EventBox;
