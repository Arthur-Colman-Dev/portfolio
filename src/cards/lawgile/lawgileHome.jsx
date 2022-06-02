import React from 'react';
import lawgileImg from '../../assets/lawgile.png';

const LawgileHome = (props) => {
  return (
    <div className='lawgile'>
      <h2>Lawgile</h2>
      <img className='lawgile__img' src={lawgileImg}></img>
      <div className='lawgile__content'>
      <p>Legal ERP (Enterprise Resource Planning) that uses KanBan to help lawyers routine.</p>
      <p>My work here: I started in the beggining of the project, developing main features that envolves both Front-end and Back-end development. I also worked in the development of automated tests, DevOps and the CICD.</p>
      </div>
      <span className='lawgile__landing'>Landing: <a href='https://www.lawgile.com.br' target="_blank">https://www.lawgile.com.br</a></span>
    </div>
  )
};

export default React.memo(LawgileHome);