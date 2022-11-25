import React from 'react'
import './Footer.css';
import {
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaMailBulk,
  FaFacebookF,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-section-top'>
        <span className='top-quote'>do what you can't!</span>
        <span className='top-auther'>- casey neistat</span>
      </div>
      <div className='footer-section-mid'>
        <div className='align-icons'>
          <a href='#git' target="_blank">
            <FaGithub className='fa-icons' />
          </a>
        </div>
        <div className='align-icons'>
          <a href='#linkedin' target="_blank">
            <FaLinkedinIn className='fa-icons' />
          </a>
        </div>
        <div className='align-icons'>
          <a href='#twitter' target="_blank">
            <FaTwitter className='fa-icons' />
          </a>
        </div>
        <div className='align-icons'>
          <a href='#insta' target="_blank">
            <FaInstagram className='fa-icons' />
          </a>
        </div>
        <div className='align-icons'>
          <a href='#facebook' target="_blank">
            <FaFacebookF className='fa-icons' />
          </a>
        </div>
        <div className='align-icons'>
          <a href='#mail' target="_blank">
            <FaMailBulk className='fa-icons' />
          </a>
        </div>
      </div>
      <div className='footer-section-bot'>
        <hr className='bot-linebreak' />
        <span className='span1'>this website is created by coders club of D.Y Patil Institude under the guidance of core committee</span>
        <span className='span2'>All right reserved &copy;2022</span>
        
      </div>
      
    </div>
  )
}

export default Footer