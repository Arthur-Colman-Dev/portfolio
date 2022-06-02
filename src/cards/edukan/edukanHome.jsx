import React from 'react';
import edukanImg from '../../assets/edukan.png';

const EdukanHome = (props) => {
  return (
    <div className='edukan'>
      <h2>Edukan</h2>
      <img className='edukan__img' src={edukanImg}></img>
      <div className='edukan__content'>
        <p>Application to help students manage their tasks, using Agile KanBan.</p>
        <p>My work here: The project was built for the final work of the Class "Advanced Programming" at UFRJ (Federal University of Rio de Janeiro). It connects to users Google Classroom API in order to retrieve and update their tasks, or the user can create their tasks manually inside the application. I developed the Front-end and my teammate developed the Back-end of the project.</p>
      </div>
      <span className='edukan__landing'>Code: <a href='https://github.com/Arthur-Colman-Dev/edukan' target="_blank">https://github.com/Arthur-Colman-Dev/edukan</a></span>
    </div>
  )
};

export default React.memo(EdukanHome);