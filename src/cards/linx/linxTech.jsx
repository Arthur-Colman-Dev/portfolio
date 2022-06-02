import React from 'react';
import webpack from '../../assets/webpack-logo.png'
import react from '../../assets/react-logo.png';
import javascript from '../../assets/javascript.png';
import nodejs from '../../assets/nodejs.png';
import azure from '../../assets/azure.png';
import microsoft from '../../assets/microsoft.png';
import redux from '../../assets/redux.png';
import powerbi from '../../assets/powerbi.png';

const LinxTech = (props) => {
  return (
    <div className='linx'>
      <h2>Product Technologies</h2>
      <div className='technologies'>
        <img src={webpack}/>
        <img src={react} />
        <img src={redux} />
        <img src={javascript} />
        <img src={nodejs} />
        <img src={azure} />
        <img src={microsoft} />
        <img src={powerbi} />
      </div>
    </div>
  )
};

export default React.memo(LinxTech);