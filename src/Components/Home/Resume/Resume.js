import React from 'react'
import './Resume.css'
import {FaArrowUp } from 'react-icons/fa';

function Resume() {
    const getResume=()=>{
        window.open('https://drive.google.com/file/d/18BDWbgSU1Ydm8VF4zL73aa138l4LNTcg/view?usp=drive_link')
    }
  return (
    <div className='resume'>
        Resume
        <div className='resume-get'>
            <h5 onClick={getResume}>Click here to view my resume</h5> &nbsp;&nbsp;
            <FaArrowUp className='arrow'/>
        </div>
    </div>
  )
}

export default Resume