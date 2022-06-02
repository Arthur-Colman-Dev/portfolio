import React from 'react';
import github from '../assets/github.png';
import linkedin from '../assets/linkedin.png';
import gmail from '../assets/gmail.png';

const outlineText = (text) => (<span className="outline">{text}</span>)

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
      <p>I'm an experienced software engineer, who have strong experience with {outlineText('React')}, {outlineText('Redux')}, {outlineText('NodeJS')}, {outlineText('PostgreSQL')}, {outlineText('GraphQL')}, {outlineText("REST API's")}, {outlineText('AWS')} ({outlineText('Lambda')}, {outlineText('Step Functions')}, {outlineText('DynamoDB')}, {outlineText('Cognito')}, {outlineText('SES')}, {outlineText('Cloudfront')}, {outlineText('Cloudformation')}, {outlineText('S3')}). I'm also used to build my code using {outlineText('IaC')} (Infrastructure as Code) and have experience to work with {outlineText('DevOps')}, {outlineText('CICD')} and {outlineText('Tests Development')}.</p>
      <p>My goal is to grow my tech skills as much as possible while making people lifes better.</p>
      <div className='social'>
        <a href='https://github.com/Arthur-Colman-Dev'><img src={github} /></a>
        <a href='https://www.linkedin.com/in/arthur-colman/'><img src={linkedin} /></a>
        <a href='mailto:arthuradur@gmail.com'><img src={gmail} /></a>
      </div>
  </>
  )
};

export default React.memo(HomePage);