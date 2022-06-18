import React from 'react'
import {useRef} from 'react'
import './contacts.css'
import {MdOutlineMail} from 'react-icons/md'
import {FaWhatsappSquare} from 'react-icons/fa'
import emailjs from 'emailjs-com'
import { useState } from 'react'
const Contacts = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_o9glo17', 'template_xaho0lq', formRef.current, 'Z4WyAG3JOwpW1oTTe')
      e.target.reset()
      .then((result) => {
          console.log(result.text);
          setDone(true);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id='contacts'>
      <h5>Get Intouch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>evansprojectsdev@gmail.com</h5>
            <a href="mailto:evansprojectsdev@gmail.com">Send a message</a>
          </article>
          <article className="contact__option">
            <FaWhatsappSquare className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+254796427629</h5>
            <a href="https://api.whatsapp.com/send?phone+254796427629" target="_blank" rel="noreferrer">Send a message</a>
          </article>
        </div>
        <form ref={formRef} onSubmit={sendEmail}>
          <input type="text" name="name" id="" placeholder='Your Full Name' required/>
          <input type="email" name="email" id="" placeholder='Your Email' required/>
          <textarea name="message" id="" rows="7" placeholder='Write Your message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>{
            done && <p>Thanks for your message </p>
          }
        </form>
      </div>
    </section>
  )
}

export default Contacts