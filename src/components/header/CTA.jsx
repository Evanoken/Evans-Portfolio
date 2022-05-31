import React from 'react'
import CV from '../../assets/MY_CV.pdf'

const CTA = () => {
  return (
    <div className="cta">
        <a href={CV} download className='btn'>Download CV</a>
        <a href="#contacts" className='btn btn-primary'>Lets talk</a>
    </div>
  )
}

export default CTA