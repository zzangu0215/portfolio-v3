import React from "react";
import "./Menu.css";

function Menu({ currentPage, handlePageChange }) {
  return (
    <div>
      <input
        className="menu-icon"
        type="checkbox"
        id="menu-icon"
        name="menu-icon"
      />
      <label htmlFor="menu-icon"></label>
      <nav className="nav">
        <ul className="pt-5">
          <li>
            <a href="#home" onClick={() => handlePageChange("Home")}>
              Home
            </a>
          </li>
          <li>
            <a href="#aboutme" onClick={() => handlePageChange("AboutMe")}>
              AboutMe
            </a>
          </li>
          <li>
            <a href="#projects" onClick={() => handlePageChange("Projects")}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => handlePageChange("Contact")}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Menu;
