import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/im3.jpg'
import HeaderSocials from './headerSocials'
import UseTypingEffect from 'use-typing-effect'
const header = () => {
  const typingText = UseTypingEffect(['react', 'and', 'react Native developer'])
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