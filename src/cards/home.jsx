import React from 'react';
import github from '../assets/github.png';
import linkedin from '../assets/linkedin.png';
import gmail from '../assets/gmail.png';

const HomePage = (props) => {
  return (
    <>
      <div className='home-card__avatar__img'/>
      <h2 className='home-card__title'>I'm Arthur Colman</h2>
      <div className='home-card__subtitle'>
        <span className='home-card__subtitle__divider'/>
        <span className='home-card__subtitle__content'>Full Stack Developer</span>
        <span className='home-card__subtitle__divider'/>
      </div>
      <p>I'm an experienced software engineer, who have strong experience with Front-end frameworks (<span className="outline">React</span>, <span className="outline">Redux</span>) and with the development of serverless applications using <span className="outline">GraphQL</span>, <span className="outline">PostgresSQL</span>, and <span className="outline">AWS</span>.</p>
      <p>My goal is to grow my tech skills as much as possible while making people lifes better, I would love to work with some complex application or feature that would take me to the other level.</p>
      <div className='social'>
        <a href='https://github.com/Arthur-Colman-Dev'><img src={github} /></a>
        <a href='https://www.linkedin.com/in/arthur-colman/'><img src={linkedin} /></a>
        <a href='mailto:arthuradur@gmail.com'><img src={gmail} /></a>
      </div>
  </>
  )
};

export default React.memo(HomePage);