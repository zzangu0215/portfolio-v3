import React from "react";
import ProjectCards from "./ProjectCards";
import "./Projects.css";

const projectLists = require("./project-lists");

function Projects() {
  return (
    <div>
      <h1 className="projects">Projects</h1>
      <div className="row projects">
        <div className="cards-wrapper">
          {projectLists.map((project) => (
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

// function Projects() {
//   return (
//     <div>
//       <h1 className="projects">Projects</h1>
//       <div className="cards-wrapper">
//         <div className="card-grid-space">
//           <a className="card" href="https://myknl-zap.herokuapp.com/">
//             <div>
//               <h1>MyKNL ZAP</h1>
//               <p>
//                 This app allows pet owners to be able to easily book a
//                 reservation at their local pet hotel. Users will be able to make
//                 an account with their own pet and reservation data.
//               </p>
//               <div className="date">July 2021</div>
//               <div className="tags">
//                 <div className="tag">HTML</div>
//               </div>
//             </div>
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }

export default Projects;
