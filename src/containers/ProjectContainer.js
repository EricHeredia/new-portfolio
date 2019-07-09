import React, { useEffect, useState } from 'react';
import Project from '../components/Project';

const ProjectContainer = () => {
    
  const [projects, setProjects] = useState();

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/EricHeredia/data-base/master/projects.json")
      .then(res => res.json())
      .then(projects => {
        let container = [];
        for (let i = 0; i < projects.length; i++) {
          let project = projects[i];
          container.push(
            <Project 
              name={project.name}
              url={project.name}
              git={project.git}
              tech={project.tech}
              image={project.image}
            />
          )
        }
        setProjects(container)
      })
  }, []);

  return (
    <div id="projects">
      {projects}
    </div>
  )
};

export default ProjectContainer;