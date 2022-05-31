import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {AiOutlineBook} from 'react-icons/ai'
import {AiOutlineMessage} from 'react-icons/ai'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#//" onClick={()=> setActiveNav("#about")} className={activeNav===('#about'? 'active' : '')}><AiOutlineHome/></a>
    <a href="#about" onClick={()=> setActiveNav("#about")} className={activeNav===('#about'? 'active' : '')}><AiOutlineUser/></a>
      <a href="#experience" onClick={()=> setActiveNav("#about")} className={activeNav===('#about'? 'active' : '')}><AiOutlineBook/></a>
      <a href="#contacts" onClick={()=> setActiveNav("#about")} className={activeNav===('#about'? 'active' : '')}><AiOutlineMessage/></a>
    </nav>
  )
}

export default Nav