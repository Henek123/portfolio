import React from 'react'
import './styles/About.css'
import photo from './img/profile.png'

export default function About() {
  return (
    <section className='about-section'>
      <p className='anchor' id='about'></p>
      <div className='about-container'>
        <div>
          <h2 style={{width: '100%', marginBottom: '0.5em'}}>About</h2>
          <p className='about-desc'>
            Hello! My name is Artur and I'm beginner frontend developer.
            I've started learning web development in summer 2022 mainly from free courses on-line and documentation.
            Currently I'm building personal projects and looking for a first job as junior frontend developer.
            I am interested in astrophysics and technological innovations.
            In my free time I read fantasy and sci-fi books and train in the gym. 
          </p>
          <div className='skills-container'>
            <h2 style={{width: '100%', marginTop: '0.5em', marginLeft: '10px'}}>Technologies:</h2>
            <p className='skill'>HTML</p>
            <p className='skill'>CSS</p>
            <p className='skill'>JavaScript</p>
            <p className='skill'>Responsive Web Design</p>
            <p className='skill'>React.js</p>
            <p className='skill'>d3.js</p>
            <p className='skill'>GitHub</p>
            <p className='skill'>MS Office</p>
            <p className='skill'>Rest API</p>
            <p className='skill'>GraphQl</p>
          </div>
        </div>
        <img className='photo' src={photo} alt='myself'></img>
     </div>
    </section>
  )
}
