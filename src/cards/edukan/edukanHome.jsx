import React from 'react';
import edukanImg from '../../assets/edukan.png';

const EdukanHome = (props) => {
  return (
    <div className='edukan'>
      <h2>Edukan</h2>
      <img className='edukan__img' src={edukanImg}></img>
      <p className='edukan__content'>Application to help students manage their tasks, using Agile KanBan. It connects to Google Classroom API in order to retrieve and update their tasks, or the user can create their tasks manually inside the application. Created as final work of the class “Advanced Programming” at UFRJ.</p>
      <span className='edukan__landing'>Code: <a href='https://github.com/Arthur-Colman-Dev/edukan' target="_blank">https://github.com/Arthur-Colman-Dev/edukan</a></span>
    </div>
  )
};

export default React.memo(EdukanHome);