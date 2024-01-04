import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Phero from '../components/Phero'


const About = () => {
  return (
    <div>
      <Navbar/>
      <Phero heading="ABOUT." text="Im a friendly Front-End Developer"/>
      <Footer/>
    </div>
  )
}

export default About
