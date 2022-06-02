import React from 'react';
import webpack from '../../assets/webpack-logo.png'
import react from '../../assets/react-logo.png';
import javascript from '../../assets/javascript.png';
import nodejs from '../../assets/nodejs.png';

const WeatherTech = (props) => {
  return (
    <div className='weather'>
      <h2>Product Technologies</h2>
      <div className='technologies'>
        <img src={webpack}/>
        <img src={react} />
        <img src={javascript} />
        <img src={nodejs} />
      </div>
    </div>
  )
};

export default React.memo(WeatherTech);