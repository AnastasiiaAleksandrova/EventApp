import React from 'react';
import './EventBox.css';

function EventBox(props) {
    return (
      <div className="EventBox">
        <div className="image-holder">
          <img src={props.image} alt="event-img" />
        </div>
          <p className='name'>{props.name}</p>
          <p className="date-n-time"><i class="fas fa-calendar-alt"></i><br></br>{props.date} {props.time}</p>
          <p className="address"><i class="fas fa-map-marker-alt"></i><br></br>{props.address} {props.postcode} {props.city}</p>
          <p className="intro"><i class="fas fa-info-circle"></i><br></br>{props.intro}</p>
          <p className="event-url"><i class="fas fa-link"></i></p>
      </div>
    );
  }
export default EventBox;
