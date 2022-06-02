import React from 'react';
import weatherImg from '../../assets/weather.png';

const WeatherHome = (props) => {
  return (
    <div className='weather'>
      <h2>Weather App</h2>
      <img className='weather__img' src={weatherImg}></img>
      <p className='weather__content'>Website that returns to the user information about the temperature over the week at the desired city, country or district. This application uses external API’s of graphs and data collection using the latitude and longitude  of the chosen place.</p>
      <span className='weather__landing'>Website: <a href='https://arthur-colman-dev.github.io/Weather-App' target="_blank">https://arthur-colman-dev.github.io/Weather-App</a></span>
      <span className='weather__landing'>Code: <a href='https://github.com/Arthur-Colman-Dev/Weather-App' target="_blank">https://github.com/Arthur-Colman-Dev/Weather-App</a></span>
    </div>
  )
};

export default React.memo(WeatherHome);