import React from 'react'
import './Project.scss'

const Project = (props) => {
  return (
    <div className="project">
      <h2>{props.name}</h2>
      <img src={props.image} alt="test" />
      <div className="project-links vCenter">
        <a href="google.com">Link1</a>
        <a href="google.com">Link2</a>
      </div>
    </div>
  )
}

export default Project