import React from 'react'
import './HomeLink.css'
import profileimg from '../../../Assets/prof.png'
import {FaPhone,FaFacebookMessenger} from 'react-icons/fa';

function HomeLink() {
  return (
    <div className='home'>
        <header className='name'>MY NAME IS <br/>NITHIN P S...</header>
        <h4 className='subheader'>Python Full-Stack Developer</h4>
        <img className='profilepic' src={profileimg} alt="" />
        <div className='con-info'>
          <FaPhone className='con-icon'/>&nbsp;&nbsp;8139802775&nbsp;&nbsp;&nbsp;&nbsp;
          <FaFacebookMessenger className='con-icon'/>&nbsp;&nbsp;nithinps011@gmail.com
        </div>
    </div>
  )
  }

export default HomeLink 