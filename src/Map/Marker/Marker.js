import React from 'react';
import  Pin  from '../pin.svg';

let Marker = ({ text }) => {
  return (
    <div style={{
      color: 'red',
      width: '30px',
      height: 'auto',
      padding: '20px'
      }}><img src={Pin} onMouseEnter={someHandler}/>
    </div>
      );
    }

    function someHandler(e) {
        e.preventDefault();
        console.log('The link was clicked.');
        return (
          <div style={{
              color: 'red',
              width: '20px',
              height: '20px',
              padding: '20px',
              zIndex: '999'
            }}>
          </div>
        )
      };

 export default Marker;