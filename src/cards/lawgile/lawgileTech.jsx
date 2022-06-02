import React from 'react';
import webpack from '../../assets/webpack-logo.png'
import react from '../../assets/react-logo.png';
import javascript from '../../assets/javascript.png';
import nodejs from '../../assets/nodejs.png';
import postgresql from '../../assets/postgresql.png';
import aws from '../../assets/aws.png';
import redux from '../../assets/redux.png';
import graphql from '../../assets/graphql.png';

const LawgileTech = (props) => {
  return (
    <div className='lawgile'>
      <h2>Product Technologies</h2>
      <div className='technologies'>
        <img src={webpack}/>
        <img src={react} />
        <img src={redux} />
        <img src={javascript} />
        <img src={nodejs} />
        <img src={postgresql} />
        <img src={aws} />
        <img src={graphql} />
      </div>
    </div>
  )
};

export default React.memo(LawgileTech);