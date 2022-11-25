import React from 'react'

import "./HeroSection.css"

import video from "../../assets/videos/video-4.mp4"

function HeroSection() {
  return (
        <div className='hero-container'>
            <video src={video} autoPlay loop muted/>
    
            <h1>Coder's Club</h1>
            <p>DR.D.Y. PATIL INSTITUTE OF ENGINEERING, MANAGEMENT AND RESEARCH </p>
            <p>PRESENT'S CODER'S CLUB</p>
     </div>

    
 )
}

export default HeroSection