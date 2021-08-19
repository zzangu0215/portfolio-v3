import React from "react";
import "./Logo.css";
import logo from "../../content/logo/logo.jpg";

function Logo({ handlePageChange }) {
  return (
    <div>
      <a href="#home" class="logo" onClick={() => handlePageChange("Home")}>
        <img src={logo} alt="logo" />
      </a>
    </div>
  );
}

export default Logo;
