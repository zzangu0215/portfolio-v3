import React from "react";
import avatar from "../../../content/avatar/jun_avatar.png";
import "./AboutMe.css";

function AboutMe() {
  return (
    <div>
      <h1 className="about-me">About Me</h1>
      <img src={avatar} alt="avatar" className="avatar" />
    </div>
  );
}

export default AboutMe;
