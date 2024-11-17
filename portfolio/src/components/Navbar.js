import React from "react";
import { Link } from "react-scroll";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="hero" smooth duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="projects" smooth duration={500}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="skills" smooth duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="contact" smooth duration={500}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
