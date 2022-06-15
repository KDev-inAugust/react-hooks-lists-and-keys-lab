import React from "react";

function ProjectItem({ name, about, technologies }) {
const technologiesMap = technologies.map((index)=>{
  return(
<span key={index}>{index}</span>
  )
})

  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {technologiesMap}
      </div>
    </div>
  );
}

export default ProjectItem;
