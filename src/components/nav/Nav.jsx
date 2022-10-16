import React from 'react'
import './nav.css'
import {AiFillHome, AiFillPhone} from 'react-icons/ai'
import {BsFillPersonFill} from 'react-icons/bs'
import {MdWork} from 'react-icons/md'
import {useState} from 'react'

const Nav = () => {
    const [activeNav, setActiveNav] = useState('#')
    return (
    <nav>
        <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiFillHome/></a>
        <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><BsFillPersonFill/></a>
        <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><MdWork/></a>
        <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><AiFillPhone/></a>
    </nav>
  )
}

export default Nav