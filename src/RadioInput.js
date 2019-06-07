import React from 'react';


function RadioInput(props) {

    return (
      <span className="RadioInput">
        <input type="radio" name={props.name} value={props.value} onChange={props.onChange}/>
      </span>
    );
  }

export default RadioInput;
