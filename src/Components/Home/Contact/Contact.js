import React from 'react'
import './Contact.css'

function Contact() {
  const handleEmail=()=>{
    window.open('https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=DmwnWrRnXfHQnxNzkwmjkSgBplzvTwRgKMzwQRmKLQRVpJSdWLMQGtMRsBGdWsNztRSxjtqDNzJq')
  }
  return (
    <div className='contact'>
      Contact Me
      <div className='contact-det'>
        <h5 className='email' onClick={handleEmail}>Email: nithinps011@gmail.com</h5>
        <h5 className='phno'>Ph: +91 8139802775</h5>
      </div>
    </div>
  )
}

export default Contact 