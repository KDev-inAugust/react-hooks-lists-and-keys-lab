import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  const projectMap = projects.map((index)=>{
    return (<ProjectItem key={index.id} name={index.name} about={index.about} technologies={index.technologies}/>)
  })
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {projectMap}
        </div>
    </div>
  );
}

export default ProjectList;
