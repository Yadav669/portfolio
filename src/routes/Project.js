import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Phero from '../components/Phero'

const Project = () => {
  return (
    <div>
     <Navbar/>
     <Phero heading="PROJECTS." text="Some of my most recent works"/>
     <Footer/>
    </div>
  )
}

export default Project
