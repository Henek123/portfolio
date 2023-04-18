import React from 'react'
import './styles/ProjectCard.css'

export default function ProjectCard(props) {
  const list = props.technologies.map(element => (
    <p className='skill'>{element}</p>
  ))
  return (
    <>
      <section className='project'>
        <div className='project-details'>
          <h1>{props.title}</h1>
          <h2 className='description'>{props.descShort}</h2>
          <p className='project-desc'>{props.descLong}</p>
          <h2>Used Technologies:</h2>
          <div className='skills-container'>
            {list}
          </div>
          <p style={{margin: '0.5em 0'}}><a className='project-link' target='_blank' rel="noreferrer" href={props.live}>Live version: {props.live}</a></p>
          <p style={{margin: '0.5em 0'}}><a className='project-link' target='_blank' rel="noreferrer" href={props.github}>Repository: {props.github}</a></p>
        </div>
        <img src={props.img} alt={`Preview of ${props.title.toLowerCase()} project`} className='preview'/>
      </section>
    </>
  )
}
