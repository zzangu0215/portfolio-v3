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
      <label for="menu-icon"></label>
      <nav className="nav">
        <ul className="pt-5">
          <li>
            <a href="#home" onClick={() => handlePageChange("Home")}>
              Home
            </a>
          </li>
          <li>
            <a href="#AboutMe" onClick={() => handlePageChange("AboutMe")}>
              AboutMe
            </a>
          </li>
          {/* <li>
            <a href="#home" onClick={() => handlePageChange("Home")}>
              Home
            </a>
          </li>
          <li>
            <a href="#home" onClick={() => handlePageChange("Home")}>
              Home
            </a>
          </li> */}
        </ul>
      </nav>
    </div>
  );
}

export default Menu;