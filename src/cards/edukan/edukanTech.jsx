import React from 'react';
import webpack from '../../assets/webpack-logo.png'
import react from '../../assets/react-logo.png';
import javascript from '../../assets/javascript.png';
import nodejs from '../../assets/nodejs.png';
import docker from '../../assets/docker.png';
import postgresql from '../../assets/postgresql.png';
import redux from '../../assets/redux.png';
import graphql from '../../assets/graphql.png';

const EdukanTech = (props) => {
  return (
    <div className='edukan'>
      <h2>Product Technologies</h2>
      <div className='technologies'>
        <img src={webpack}/>
        <img src={react} />
        <img src={redux} />
        <img src={javascript} />
        <img src={nodejs} />
        <img src={docker} />
        <img src={postgresql} />
        <img src={graphql} />
      </div>
    </div>
  )
};

export default React.memo(EdukanTech);