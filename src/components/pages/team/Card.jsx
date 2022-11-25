import { Email, Instagram, LinkedIn } from '@mui/icons-material'
import React from 'react'

import './Card.css'



function Card(props) {
 

  return (
    <div className="card">

      <div className="image">
        <img className='image-img' src={props.image} alt="" />
      </div>


      <div className="info">
        <div className="card-name">{props.name}</div>
        <div className="department">{props.post}</div>

        <div class='social-icons'>
         <Instagram/>
         <LinkedIn/>
         <Email/>
          
        </div>
      </div>
</div>
  )
}

export default Card