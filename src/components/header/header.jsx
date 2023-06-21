import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/im3.jpg'
import HeaderSocials from './headerSocials'
import {useTyping} from 'use-typing-hook'
const header = () => {
  const typingText = useTyping("react and react Native developer", 200, 400)
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Evans Ngugi</h1>
        <h5 className="text-light">{typingText}</h5>
        <CTA/>
        <HeaderSocials/>
        <div className="me">
          <img src={ME} alt="" />
        </div>
        <a href="#contacts" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default header