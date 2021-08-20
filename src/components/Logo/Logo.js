import React from "react";
import { Link } from "react-router-dom";
import logo from "../../content/logo/logo.jpg";
import "./Logo.css";

function Logo() {
  return (
    <div>
      <Link to="/" className="logo">
        <img src={logo} alt="logo" />
      </Link>
    </div>
  );
}

export default Logo;
