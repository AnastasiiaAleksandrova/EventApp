import React from 'react';
import { isPatternLike } from '@babel/types';

function EventBox(props) {

    const style = {
      padding: ".5em",
      margin: ".1em",
      backgroundColor: "pink",
      display: "block"
    }
  
    return (
      <div className="EventBox" style={style}>
        <p>{props.name}</p>
        <p>{props.description}</p>
      </div>
    );
  }

export default EventBox;