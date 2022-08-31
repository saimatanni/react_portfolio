import React from 'react'
import './footer.css'
import {BsFacebook,BsInstagram,BsTwitter} from 'react-icons/bs'
const Footer = () => {
  return (
    <footer >
      <a href="#" className='footer__logo'>SAIMA</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="about">About</a></li>
        <li><a href="experience">Experience</a></li>
        <li><a href="services">Services</a></li>
        <li><a href="portfolio">Portfolio</a></li>
        {/* <li><a href="#">Testimonial</a></li> */}
        <li><a href="#">Contact</a></li>
      </ul>

      <div className="footer__socials">
       <a href="http://facebook.com" target="_blank" rel="noopener noreferrer"><BsFacebook/></a>
       <a href="http://instagram.com" target="_blank" rel="noopener noreferrer"><BsInstagram/></a>
       <a href="http://twitter.com" target="_blank" rel="noopener noreferrer"><BsTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&Copy; Saima Tanni. All right reserved.</small>
      </div>
    </footer>
  )
}

export default Footer