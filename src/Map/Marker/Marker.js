import React from 'react';
import  Pin  from '../pin.svg';
import EventBox from 'C:/Users/s1900169/summer-project/events-app/src/EventBox';

let Marker = ({ text }) => {
<<<<<<< HEAD
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
          <EventBox   name={'HELLLOOOOO'}/>
          </div>
        )
      };
=======

    return (

      <div style={{
          color: 'red',
          backgroundImage: 'url('+ Pin + ')',
          padding: '5px',
          display: 'inline-flex',
          textAlign: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '100%',
          transform: 'translate(-50%, -50%)',
        
        }}>{text}</div>

    );
  }


>>>>>>> smth

 export default Marker;
