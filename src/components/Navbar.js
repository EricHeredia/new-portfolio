import React from 'react';
import './Navbar.scss'
import logo from './eh.svg'

const Navbar = () => {
  return (
    <nav>
      <a className="logo" href="#top"><img src={logo} alt="ha" /></a>
      <ul>
        <li><a href="#top">Projects</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="https://github.com/EricHeredia" rel="noopener noreferrer" target="_blank">Github</a></li>
        <li><a href="google.com">Resume</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  )
};

export default Navbar;