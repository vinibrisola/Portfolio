import React from 'react'
import { BsLinkedin, BsInstagram, BsFacebook } from 'react-icons/bs';
const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/viniciusbrisola/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
      <a href="https://github.com/vinibrisola" target="_blank" rel="noreferrer"><BsFacebook /></a>
      <a href="https://www.instagram.com/vinibrisa/" target="_blank" rel="noreferrer"><BsInstagram /></a>
    </div>
  )
}

export default HeaderSocials
