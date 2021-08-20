import React from "react";
import "./Home.css";
import portfoliogif from "../../../content/gif/gif-maker.gif";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Welcome, Everyone!</h1>
      <p className="home-p">
        Thank you for coming in!
        <br />
        My name is Jun. Nice to meeting you!
        <br />
        <br />
        Hang around for a bit to take a look at my interesting works!
        <br />
        <Link to="/contact" className="contact-me">
          Contact me&nbsp;
        </Link>
        if you are interested in me or my projects!
        <br />
        <br />
        Check out my projects!
        <br />
        <br />
        <span>
          <Link to="/projects">
            <img
              src={portfoliogif}
              alt="portfolio-gif"
              className="portfolio-gif"
            />
          </Link>
        </span>
      </p>
    </div>
  );
}

export default Home;
