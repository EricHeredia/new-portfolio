import React from 'react'
import './Contact.scss'

const Contact = () => {
  return (
    <div id="contact">
      <h2 className="large-head">Contact</h2>
      <p>Feel free to send me an E-mail at</p>
      <p className="email-text">EricDavidHeredia@gmail.com</p>
      <br />
      <p className="connect">Or connect via</p>
      <br />
      <div className="link-git">
        <i className="fab fa-linkedin lower"></i>||<i className="fab fa-github-square lower"></i>
      </div>
    </div>
  )
}

export default Contact;