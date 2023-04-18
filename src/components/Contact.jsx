import React from 'react'
import './styles/Contact.css'
import GitHub from './icons/github.svg'
import Facebook from './icons/facebook.svg'
import Linkedin from './icons/linkedin.svg'
import At from './icons/at-solid.svg'

export default function Contact() {
  return (
    <section className='contact-section' id='contact'>
      <h1>Get In Touch</h1>
      <div className='icon-container'>
        <a className='hyperlink' href='https://github.com/Henek123' target='_blank' rel="noreferrer">
          <img className='icon' src={GitHub} alt='GitHub logo'></img>
        </a>
        <a className='hyperlink' href='https://www.facebook.com/artur.bieniek2' target='_blank' rel="noreferrer">
          <img className='icon' src={Facebook} alt='Facebook logo'></img>
        </a>
        <a className='hyperlink' href='https://www.linkedin.com/in/artur-bieniek-8406a9245/' target='_blank' rel="noreferrer">
          <img className='icon' src={Linkedin} alt='Linkedin logo'></img>
        </a>
        <a className='hyperlink' href='mailto:artur9724@gmail.com'>
          <img className='icon' src={At} alt='E-mail logo'></img>  
        </a>
      </div>
    </section>
  )
}
