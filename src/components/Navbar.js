import React from 'react';
import './Navbar.scss'

const Navbar = () => {
  return (
    <nav class="navbar">
      <ul>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="https://github.com/EricHeredia" target="_blank">Github</a>
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