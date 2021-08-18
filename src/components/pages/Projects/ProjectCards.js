import React from "react";

function ProjectCards(props) {
  // const url = `process.env.PUBLIC_URL/thumbnails/${props.thumbnail}`;
  const cardBgImg = {
    backgroundImage: `url(${props.thumbnail})`,
    backgroundSize: "cover",
    borderRadius: "1em",
  };

  return (
    <div className="card-grid-space" style={cardBgImg}>
      <div className="card">
        <div>
          <a href={props.deployed_link}>
            <h1>{props.name}</h1>
          </a>
          <p>{props.description}</p>
          <a href={props.github_link}>
            <div className="date">Github Repository</div>
          </a>
          <div className="tags">
            <div className="tag">HTML</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCards;
