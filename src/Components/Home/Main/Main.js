import React from 'react'
import './Main.css'
import SideBanner from '../SideBanner/SideBanner'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Contact from '../Contact/Contact'
import HomeLink from '../HomeLink/HomeLink'
import AboutMe from   '../AboutMe/AboutMe'
import Resume from '../Resume/Resume'

function Main() {
  return (
    <div className='main'>
      <Router>
        <SideBanner/>
        <Routes>
          <Route path='/' element={<HomeLink/>}></Route>
          <Route path='/about' element={<AboutMe/>}></Route>
          <Route path='/resume' element={<Resume/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default Main