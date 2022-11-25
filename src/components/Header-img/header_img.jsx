import React from 'react'
import img from "../../assets/images/main.jpeg"
import "./header_img.css"
function header_img() {
  return (
<div>
<div className='header-h1'>
      Gallery
     </div>

     <div className='header_img'>
     

        <div className="header_image">
          <img className='img' src={img} alt=""/>
        </div>
        <div className="header_image">
          <img className='img' src={img} alt=""/>
        </div>
        <div className="header_image">
          <img className='img' src={img} alt=""/>
        </div>
        <div className="header_image">
          <img className='img' src={img} alt=""/>
        </div>
        <div className="header_image">
          <img className='img' src={img} alt=""/>
        </div>
        <div className="header_image">
          <img className='img' src={img} alt=""/>
        </div>
        <div className="header_image">
          <img className='img' src={img} alt=""/>
        </div>
        <div className="header_image">
          <img className='img' src={img} alt=""/>
        </div>
        <div className="header_image">
          <img className='img' src={img} alt=""/>
        </div>
    </div>
</div>

    
  )
}

export default header_img