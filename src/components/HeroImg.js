import "./HeroImg.css"
import React from 'react'
import PhotoImg from "../assests/photo-1559163179-3fd017552229.avif"
import { Link } from 'react-router-dom';

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="full" src={PhotoImg} alt="img" />
      </div>
      <div className="contant">
        <p>Take a View</p>
        <h1>React Portfolio.</h1>
        <div>
          <Link to="/Project" className="btn">Projects</Link>
          <Link to="/Contact" className="btn-Light">Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default HeroImg