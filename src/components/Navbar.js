import React from 'react';
import './Navbar.scss'

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="https://github.com/EricHeredia" rel="noopener noreferrer" target="_blank">Github</a>
        </li>
        <li>
          <a href="google.com">Resume</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  )
};

export default Navbar;