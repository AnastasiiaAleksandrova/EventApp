import React from 'react';


function RadioInput(props) {

    return (
      <div className="RadioInput">
        <input type="radio" name={props.name} value={props.value} onChange={props.onChange}/>
      </div>
    );
  }

export default RadioInput;
