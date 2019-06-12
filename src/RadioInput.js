import React from 'react';


function RadioInput(props) {

    return (
        <input className="RadioInput" type="radio" name={props.name} value={props.value} onChange={props.onChange}></input>
    );
  }

export default RadioInput;
