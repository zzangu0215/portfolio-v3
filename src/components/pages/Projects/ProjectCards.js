import React from "react";

function ProjectCards(props) {
  const cardBgImg = {
    backgroundImage: `url(${props.thumbnail})`,
    backgroundSize: "cover",
    borderRadius: "1em",
  };

  const projectHeader = {
    fontSize: "1.5em",
    color: "black",
    fontWeight: "bold",
    WebkitTextStroke: "1px black",
    fontFamily: "Patrick Hand",
  };

  const projectDescription = {
    color: "black",
    fontFamily: "Courier Prime",
  };

  const github = {
    fontSize: "1em",
    color: "black",
    fontFamily: "Ubuntu Mono",
  };

  return (
    <div className="card-grid-space" style={cardBgImg}>
      <div className="card">
        <div>
          <a href={props.deployed_link}>
            <h1 style={projectHeader}>{props.name}</h1>
          </a>
          <p style={projectDescription}>{props.description}</p>
          <a href={props.github_link}>
            <div className="github" style={github}>
              Github Repository
            </div>
          </a>
          <div className="tags">
            {/* <div className="tag"></div> */}
            {props.technologies.map((technology) => (
              <div className="tag">{technology}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCards;
