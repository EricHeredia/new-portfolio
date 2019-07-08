import React, { useEffect, useState } from 'react';
import Project from '../components/Project';

const ProjectContainer = () => {
    
  const [projects, setProjects] = useState();

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/EricHeredia/data-base/master/projects.json")
      .then(res => res.json())
      .then(projects => setProjects(projects))
  }, []);
  
  if (projects) {
    projects.forEach(x=>console.log(x))
  }

  return (
    <div>
      <Project />
    </div>
  )
};

export default ProjectContainer;