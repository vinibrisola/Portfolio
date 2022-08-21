import React from 'react'
import './footer.css'
import { BsLinkedin, BsInstagram, BsFacebook } from 'react-icons/bs';
const Footer = () => {
  return (
    <footer>
     <a href="#" className="footer__logo">Vinicius Brisola Alves.</a>
     <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
     </ul>

     <div className="footer__socials">
        <a href="https://www.linkedin.com/in/viniciusbrisola/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
        <a href="https://www.facebook.com/vinicius.brisola.1/" target="_blank" rel="noreferrer"><BsFacebook /></a>
        <a href="https://www.instagram.com/vinibrisa/" target="_blank" rel="noreferrer"><BsInstagram /></a>
     </div>

     <div className="footer__copyright">
      <small>&copy; Vinicius Brisola Alves. All rights reserved.</small>
     </div>
    </footer>
  )
}

export default Footer
