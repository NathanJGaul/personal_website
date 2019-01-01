import React from 'react';

export default (props) => (
  <div
    style={{
      border: '0.5px solid black',
      padding: '25px',
      marginLeft: '10px',
      marginRight: '10px',
      width: '250px',
      height: '340px',
    }}
  >
    <img src={props.imageSrc} alt={props.imageSrc} style={{marginBottom: '0'}}/>
    <div style={{ fontFamily: 'Lato', fontSize: 22, color: '#5A7FA9' }}>
      {props.title}
    </div>
    <div style={{ fontFamily: 'Lato', fontSize: 14 }}>
      {props.description}
    </div>
  </div>
);
