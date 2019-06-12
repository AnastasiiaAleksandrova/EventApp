import React from 'react';
import './EventBox.css';

function EventBox(props) {
    return (
      <div className="EventBox">
        <div className="image-holder">
          <img src={props.image} alt="event-img" />
        </div>
        {/*<div>*/}
          <p className='name'>What:<br></br>{props.name}</p>
          <p className="address">Where:<br></br>{props.address}</p>
          <p className="intro">Info:<br></br>{props.intro}</p>
        {/*</div>*/}
      </div>
    );
  }
export default EventBox;
