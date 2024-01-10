import {useState } from 'react';
import './SideBanner.css'
import {FaInstagram,FaLinkedin,FaFacebook } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function SideBanner() {

  const [selectedLink,setSelectedLink]=useState('Home')
  const handleInstagram=()=>{
    window.open('https://www.instagram.com/__n_th_n_/')
  }

  const handleLinkedIn=()=>{
    window.open('https://www.linkedin.com/in/nithin-p-s-5b0821240/')
  }

  const handleFacebook=()=>{
    window.open('https://www.facebook.com/nithin.ps.5851')
  }

  const handleLinks=(link)=>{
    setSelectedLink(link);
  }

  return (
    <div className='banner'>
      <header className='banner-header'>Nithin P S</header>
      <div className='index'>
        <Link to='' className='index-link' onClick={() => handleLinks('Home')}>Home</Link><br/>
        <Link to='/about' className='index-link' onClick={() => handleLinks('About Me')}>About Me</Link><br/>
        <Link to='/resume' className='index-link' onClick={() => handleLinks('Resume')}>Resume</Link><br/>
        <Link to='/contact' className='index-link' onClick={() => handleLinks('Contact')}>Contact</Link>
      </div>
      <div className='media'>
        <FaInstagram className='instagram' onClick={handleInstagram}/>&nbsp;&nbsp;
        <FaLinkedin className='linkedin' onClick={handleLinkedIn}/>&nbsp;&nbsp;
        <FaFacebook className='facebook' onClick={handleFacebook}/>&nbsp;&nbsp;
      </div>
    </div>
  )
}

export default SideBanner