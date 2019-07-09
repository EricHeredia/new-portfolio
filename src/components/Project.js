import React from 'react'
import './Project.scss'

const Project = (props) => {
  return (
    <div className="project">
      <h2>{props.name}</h2>
      <img src={props.image} alt="test" />
    </div>
  )
}

export default Project