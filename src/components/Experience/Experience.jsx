import React from 'react'
import './Experience.css'
import {BsPatchCheck} from 'react-icons/bs'

const Experince = () => {
  return (
    <section id='experience'>
      <h5>Skills I have</h5>
      <h2>My Experience</h2>
      <div className="container experince__container">
        <div className="experience__fronted">
          <h3>Fronted development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheck className='experience__details-icon'/>
              <div>
                <h4>HTML</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheck className='experience__details-icon'/>
              <div>
              <h4>CSS</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheck className='experience__details-icon'/>
              <div>
              <h4>Javascript</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheck className='experience__details-icon'/>
              <div>
              <h4>Bootstrap</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheck className='experience__details-icon'/>
              <div>
              <h4>Tailwind</h4>
              <small className="text-light">Basic</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheck className='experience__details-icon'/>
              <div>
              <h4>REACT</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>

          </div>
        </div>
        <div className="experience__backened">
          <h3>Backened development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheck className='experience__details-icon'/>
              <div>
              <h4>Node JS</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheck className='experience__details-icon'/>
              <div>
              <h4>PHP</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheck className='experience__details-icon'/>
              <div>
                <div>
                <h4>MongoDB</h4>
              <small className="text-light">Intermediate</small>
                </div>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheck className='experience__details-icon'/>
              <div>
              <h4>MySQL</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details-icon">
              <BsPatchCheck className='experience'/>
              <div>
              <h4>Java</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheck className='experience__details-icon'/>
              <div>
              <h4>Python</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Experince