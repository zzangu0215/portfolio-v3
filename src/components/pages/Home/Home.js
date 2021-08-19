import React from "react";
import "./Home.css";
import portfoliogif from "../../../content/gif/gif-maker.gif";

function Home({ handlePageChange }) {
  return (
    <div>
      <h1>Welcome!</h1>
      <p className="home-p">
        Thank you for coming in!
        <br />I am Jun, and am a motivated Full Stack Web Developer!
        <br />
        <br />
        Stick around for a bit, look at my interesting works!
        <br />
        <a
          href="#contact"
          onClick={() => handlePageChange("Contact")}
          className="contact-me"
        >
          Contact me
        </a>{" "}
        if you are interested in me or my projects!
        <br />
        <br />
        Check out my projects!
        <br />
        <br />
        <span>
          <a href="#projects" onClick={() => handlePageChange("Projects")}>
            <img
              src={portfoliogif}
              alt="portfolio-gif"
              className="portfolio-gif"
            />
          </a>
        </span>
      </p>
    </div>
  );
}

export default Home;
