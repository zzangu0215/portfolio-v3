import React from "react";
import ProjectCards from "./ProjectCards";
import "./Projects.css";

import projectLists from "../../../content/project-lists";

const groupProjects = projectLists.filter((project) => project.isTeamProject);
const personalProjects = projectLists.filter(
  (project) => !project.isTeamProject
);

function Projects() {
  return (
    <div>
      <h1 className="projects">Projects</h1>
      <div className="row projects">
        <h2 className="group-projects">Group Projects</h2>
        <div className="cards-wrapper">
          {groupProjects.map((project) => (
            <ProjectCards
              key={project.id}
              name={project.name}
              isTeamProject={project.isTeamProject}
              thumbnail={project.thumbnail}
              description={project.description}
              github_link={project.github_link}
              deployed_link={project.deployed_link}
              technologies={project.technologies}
            />
          ))}
        </div>

        <h2 className="personal-projects">Personal Projects</h2>
        <div className="cards-wrapper">
          {personalProjects.map((project) => (
            <ProjectCards
              key={project.id}
              name={project.name}
              isTeamProject={project.isTeamProject}
              thumbnail={project.thumbnail}
              description={project.description}
              github_link={project.github_link}
              deployed_link={project.deployed_link}
              technologies={project.technologies}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
