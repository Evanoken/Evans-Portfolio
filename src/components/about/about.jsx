import React from 'react'
import './about.css'
import ME from '../../assets/im4.jpg'
import {AiOutlineFolderAdd} from 'react-icons/ai'

const about = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__image">
            <img src={ME} alt="myself" />
          </div>
  </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <AiOutlineFolderAdd className='about__icon'/>
              <h5>projects</h5>
              <small>My portfolio and other react projects</small>
            </article>
          </div>
          <p>I am Evans Ngugi, a student at Kirinyaga University pursuing Bachelor of Science in Computer Science.
            Am a developer in react and together with other libraries 
            of javascript. am also an intermediate programmer in java and C++ 
            </p>
            <a href="#contacts" className='btn btn-primary'>Lets talk</a>
        </div> 
       </div>
    </section>
  )
}


export default about