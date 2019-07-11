import React from 'react'
import './Project.scss'

const Project = (props) => {
  //<i class="fab fa-codepen"></i>
  return (
    <div className="project">
      <h2>{props.name}</h2>
      <img src={props.image} alt="test" />
      <div className="project-links vCenter">
        <a href="google.com" className="hover-link" title="View Project"><i class="fas fa-eye"></i></a>
        <a href="google.com" className="hover-link" title="View Code"><i class="fab fa-github"></i></a>
      </div>
    </div>
  )
}

export default Project