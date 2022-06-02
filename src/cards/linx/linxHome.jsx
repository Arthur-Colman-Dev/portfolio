import React from 'react';
import linxImg from '../../assets/linx.png';

const LinxHome = (props) => {
  return (
    <div className='linx'>
      <h2>Linx</h2>
      <img className='linx__img' src={linxImg}></img>
      <div className='linx__content'>
        <p >Website to embed company's PowerBI reports, dashboards and Database informations.</p>
        <p>My work here: I started the project and developed by my own. I was abled to integrate the application with company's Azure Active Directory and host the website using Azure. To connect with Power BI and retrieve user data, I used Microsoft REST API's. The website NodeJS API was implemented using the company's server, wich I was abled to integrate with the website that was hosted in Azure.</p>
      </div>
      <span className='linx__landing'>Landing: <a href=' https://www.linx.com.br/' target="_blank"> https://www.linx.com.br/</a></span>
    </div>
  )
};

export default React.memo(LinxHome);