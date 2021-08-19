import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="social_links">
        <a href="https://www.instagram.com/o0ojunny/">
          <span className="fa-stack fa-lg ig combo">
            <i className="fa fa-circle fa-stack-2x circle"></i>
            <i className="fa fa-instagram fa-stack-1x fa-inverse icon"></i>
          </span>
        </a>
        <a href="https://www.youtube.com/watch?v=UE-s-nBnt44">
          <span className="fa-stack fa-lg yt combo">
            <i className="fa fa-circle fa-stack-2x circle"></i>
            <i className="fa fa-youtube-play fa-stack-1x fa-inverse icon"></i>
          </span>
        </a>
        <a href="https://github.com/zzangu0215">
          <span className="fa-stack fa-lg yt combo">
            <i className="fa fa-circle fa-stack-2x circle"></i>
            <i className="fa fa-github fa-stack-1x fa-inverse icon"></i>
          </span>
        </a>
        <a href="https://www.linkedin.com/in/junnyzzangu/">
          <span className="fa-stack fa-lg tw combo">
            <i className="fa fa-circle fa-stack-2x circle"></i>
            <i className="fa fa-linkedin fa-stack-1x fa-inverse icon"></i>
          </span>
        </a>
      </div>
    </div>
  );
}

export default Footer;
