import React from 'react'
import {BsLinkedin, BsGithub} from 'react-icons/bs'
import {FaInstagram} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='headerSocials'>
        <a href="https://www.linkedin.com/in/jakewhiteyo/" className="icon"><BsLinkedin/></a>
        <a href="https://github.com/jakewhiteyo" className="icon"><BsGithub/></a>
        <a href="https://www.instagram.com/jakewhiteyo/" className="icon"><FaInstagram/></a>
    </div>
  )
}

export default HeaderSocials