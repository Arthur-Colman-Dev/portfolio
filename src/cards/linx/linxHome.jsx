import React from 'react';
import linxImg from '../../assets/linx.png';

const LinxHome = (props) => {
  return (
    <div className='linx'>
      <h2>Linx</h2>
      <img className='linx__img' src={linxImg}></img>
      <p className='linx__content'>Application for company internal use. It was created in order to embed reports, dashboards and other information storage inside Microsoft Power BI and the company database. In order to work with the old company developments, the application was built using Azure and their resources.</p>
      <span className='linx__landing'>Landing: <a href=' https://www.linx.com.br/' target="_blank"> https://www.linx.com.br/</a></span>
    </div>
  )
};

export default React.memo(LinxHome);