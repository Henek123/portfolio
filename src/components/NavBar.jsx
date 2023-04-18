import React from 'react'
import './styles/NavBar.css'

export default function NavBar() {
  return (
    <nav className='nav-bar'>
      <a className='nav-btn' href='#home'>Home</a>
      <a className='nav-btn' href='#about'>About</a>
      <a className='nav-btn' href='#projects'>Projects</a>
      <a className='nav-btn' href='#contact'>Contact</a>
    </nav>
  )
}
