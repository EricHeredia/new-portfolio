import React from 'react'
import './Contact.scss'

const Contact = () => {
  return (
    <div id="contact">
      <h2 className="large-head">Contact</h2>
      <p>Feel free to send me an E-mail at</p>
      <p className="email-text">EricDavidHeredia@gmail.com</p>
      <br />
      <p className="connect">or connect via</p>
      <br />
      <div className="link-git">
        <a href="https://linkedin.com/in/ericheredia" rel="noopener noreferrer" target="_blank"><i className="fab fa-linkedin lower"/></a>
        ||
        <a href="https://github.com/ericheredia" rel="noopener noreferrer" target="_blank"><i className="fab fa-github-square lower"/></a>
      </div>
      <p className="cpyrght">© 2017 - {new Date().getFullYear()} Eric Heredia</p>
    </div>
  )
}

export default Contact;