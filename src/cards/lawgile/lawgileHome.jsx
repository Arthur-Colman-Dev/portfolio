import React from 'react';
import lawgileImg from '../../assets/lawgile.png';

const LawgileHome = (props) => {
  return (
    <div className='lawgile'>
      <h2>Lawgile</h2>
      <img className='lawgile__img' src={lawgileImg}></img>
      <p className='lawgile__content'>Application to help legal companies manage their tasks, an legal ERP (Enterprise Resource Planning) that uses KanBan to help the lawyers routine.</p>
      <span className='lawgile__landing'>Landing: <a href='https://www.lawgile.com.br' target="_blank">https://www.lawgile.com.br</a></span>
    </div>
  )
};

export default React.memo(LawgileHome);