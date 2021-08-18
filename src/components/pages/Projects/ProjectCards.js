import React from "react";
import "./Projects.css";

function ProjectCards(props) {
  return (
    <div className="cards-wrapper">
      <div className="card-grid-space">
        <a className="card" href={props.deployed_link}>
          <div>
            <h1>{props.name}</h1>
            <p>{props.description}</p>
            <a href={props.github_link}>
              <div className="date">Github</div>
            </a>
            <div className="tags">
              <div className="tag">HTML</div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default ProjectCards;
