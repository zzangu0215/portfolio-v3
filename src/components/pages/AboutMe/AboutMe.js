import React from "react";
import avatar from "../../../content/avatar/jun_avatar.png";
import "./AboutMe.css";

function AboutMe() {
  return (
    <div>
      <h1 className="about-me">About Me</h1>
      <img
        src={avatar}
        alt="avatar"
        title="tool tip"
        className="img-circle shadow up-hover avatar"
      />
      <div className="container about-wrap">
        <div className="row showcase stm-font">
          <div className="col-sm-4 hidden-xs">
            <div className="well shadow up-hover color-hover">
              <h1>
                <i className="fa fa-lightbulb-o"></i>
              </h1>
              <h2>Creative</h2>
            </div>
          </div>
          <div className="col-sm-4 hidden-xs">
            <div className="well shadow up-hover color-hover">
              <h1>
                <i className="fa fa-pencil-square-o"></i>
              </h1>
              <h2>Passionate</h2>
            </div>
          </div>
          <div className="col-sm-4 hidden-xs">
            <div className="well shadow up-hover color-hover">
              <h1>
                <i className="fa fa-code"></i>
              </h1>
              <h2>Development</h2>
            </div>
          </div>
        </div>

        <div className="row bio-container">
          <div className="col-sm-12 ">
            <h2 className="bio-header">Bio</h2>
            <p>
              Hey there. I am Jun originally from South Korea. <br />I am a full
              stack developer passionate about programing and technological
              development. I am looking forward to applying my knowledge,
              problem solving and creativity to create entertaining and easily
              accessible website!
            </p>
            <h2 className="bio-header">Skills</h2>
            <p>
              <strong>Programming Languages: </strong>
              <a href="https://www.cprogramming.com/">
                {" "}
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg"
                  alt="c"
                  width="50"
                  height="50"
                />
                {", "}
              </a>
              <a href="https://www.w3schools.com/cpp/">
                {" "}
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg"
                  alt="cplusplus"
                  width="50"
                  height="50"
                />
                {", "}
              </a>
              <a href="https://www.java.com">
                {" "}
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg"
                  alt="java"
                  width="50"
                  height="50"
                />
                {", "}
              </a>
              <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
                {" "}
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                  alt="javascript"
                  width="50"
                  height="50"
                />
                {", "}
              </a>
              <a href="https://www.mathworks.com/">
                {" "}
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/2/21/Matlab_Logo.png"
                  alt="matlab"
                  width="50"
                  height="50"
                />
                {", "}
              </a>
              <a href="https://www.python.org">
                {" "}
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
                  alt="python"
                  width="50"
                  height="50"
                />{" "}
              </a>
            </p>
            <p>
              <strong>Frontend Development: </strong>
              <a href="https://getbootstrap.com">
                {" "}
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg"
                  alt="bootstrap"
                  width="50"
                  height="50"
                />
                {", "}
              </a>
              <a href="https://www.w3schools.com/css/">
                {" "}
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                  alt="css3"
                  width="50"
                  height="50"
                />
                {", "}
              </a>
              <a href="https://www.w3.org/html/">
                {" "}
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                  alt="html5"
                  width="50"
                  height="50"
                />
                {", "}
              </a>
              <a href="https://reactjs.org/">
                {" "}
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                  alt="react"
                  width="50"
                  height="50"
                />
                {", "}
              </a>
              <a href="https://redux.js.org">
                {" "}
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg"
                  alt="redux"
                  width="40"
                  height="40"
                />
                {", "}
              </a>
              <a href="https://sass-lang.com">
                {" "}
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg"
                  alt="sass"
                  width="50"
                  height="50"
                />
                {", "}
              </a>
              <a href="https://webpack.js.org" className="skills">
                {"Webpack "}
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/d00d0969292a6569d45b06d3f350f463a0107b0d/icons/webpack/webpack-original-wordmark.svg"
                  alt="webpack"
                  width="50"
                  height="50"
                />{" "}
              </a>
            </p>
            <p>
              <strong>Backend Development: </strong>
              <a href="https://expressjs.com" className="skills">
                {"Express "}
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"
                  alt="express"
                  width="50"
                  height="50"
                />
                {", "}
              </a>
              <a href="https://graphql.org" className="skills">
                {"GraphQL "}
                <img
                  src="https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg"
                  alt="graphql"
                  width="50"
                  height="50"
                />
                {", "}
              </a>
              <a href="https://nodejs.org" className="skills">
                {"Node "}
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
                  alt="nodejs"
                  width="50"
                  height="50"
                />{" "}
              </a>
            </p>
            <p>
              <strong>Database: </strong>
              <a href="https://www.mongodb.com/" className="skills">
                {"MongoDB "}
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
                  alt="mongodb"
                  width="50"
                  height="50"
                />
                {", "}
              </a>
              <a href="https://www.mysql.com/" className="skills">
                {"MySQL "}
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg"
                  alt="mysql"
                  width="50"
                  height="50"
                />{" "}
              </a>
            </p>
            <p>
              <strong>Data Visualization: </strong>
              <a href="https://www.chartjs.org" className="skills">
                {"Chart.js "}
                <img
                  src="https://www.chartjs.org/media/logo-title.svg"
                  alt="chartjs"
                  width="50"
                  height="50"
                />{" "}
              </a>
            </p>
            <p>
              <strong>Devops: </strong>
              <a href="https://aws.amazon.com" className="skills">
                {"AWS "}
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
                  alt="aws"
                  width="50"
                  height="50"
                />
                {", "}
              </a>
              <a href="https://www.docker.com/" className="skills">
                {"Docker "}
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg"
                  alt="docker"
                  width="50"
                  height="50"
                />
                {", "}
              </a>
              <a href="https://heroku.com" className="skills">
                {"Heroku "}
                <img
                  src="https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg"
                  alt="heroku"
                  width="50"
                  height="50"
                />{" "}
              </a>
            </p>
            <p>
              <strong>Testing: </strong>
              <a href="https://jestjs.io" className="skills">
                {"Jest "}
                <img
                  src="https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg"
                  alt="jest"
                  width="50"
                  height="50"
                />{" "}
              </a>
            </p>
            <p>
              <strong>Machine Learning: </strong>
              <a href="https://opencv.org/">
                {" "}
                <img
                  src="https://www.vectorlogo.zone/logos/opencv/opencv-icon.svg"
                  alt="opencv"
                  width="50"
                  height="50"
                />{" "}
              </a>
            </p>
            <p>
              <strong>Other: </strong>
              <a href="https://www.arduino.cc/" className="skills">
                {"Arduino "}
                <img
                  src="https://cdn.worldvectorlogo.com/logos/arduino-1.svg"
                  alt="arduino"
                  width="50"
                  height="50"
                />
                {", "}
              </a>
              <a href="https://git-scm.com/" className="skills">
                {"Git "}
                <img
                  src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
                  alt="git"
                  width="50"
                  height="50"
                />{" "}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
