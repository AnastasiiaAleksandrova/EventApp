import React from 'react';


function RadioInput(props) {

    const style = {
      
      margin: ".1em",
      
    }
  
    return (
      <div className="RadioInput" style={style}>
        <input type="radio" name={props.name} value={props.value} onChange={props.onChange}/>
      </div>
    );
  }

export default RadioInput;