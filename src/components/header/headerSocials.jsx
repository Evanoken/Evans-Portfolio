import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
import {ImYoutube2} from 'react-icons/im'

const headerSocials = () => {
  return (
    <div className="header__socials">
        <a href="https:/linkedin.com" target='_blank' id='icon' rel="noreferrer"><BsLinkedin/></a>
        <a href="https:/Github.com" target='_blank' rel="noreferrer"><BsGithub/></a>
        <a href="https:/facebook.com" target='_blank' rel="noreferrer"><BsFacebook/></a>
        <a href="https:/youtube.com" target='_blank' rel="noreferrer"><ImYoutube2/></a>
    </div>
  )
}

export default headerSocials