import React from 'react'
import './styles/Projects.css'
import ProjectCard from './ProjectCard'
import projects from '../data.js'

export default function Projects() {
  let list = projects.map(projects => (
    <ProjectCard
      key={projects.title}
      title={projects.title}
      img={projects.img}
      descShort={projects.descShort}
      descLong={projects.descLong}
      technologies={projects.technologies}
      github={projects.github}
      live={projects.live}
    />
  ))
  console.log(projects)
  return (
    <section className='projects-section'>
      <p className='anchor' id='projects'></p>
      <h1 style={{textAlign: 'center'}}>Personal Projects</h1>
      <div className='projects-container'>
        {list}
      </div>
    </section>
  )
}