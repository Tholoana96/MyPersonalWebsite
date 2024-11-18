import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "../styles/Navbar.css";

function Navbar() {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 500) {
        setIsNavbarVisible(false);
      } else {
        setIsNavbarVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isNavbarVisible ? "" : "navbar-hidden"}`}>
      <ul>
        <li>
          <Link to="hero" smooth duration={500}>
            HOME
          </Link>
        </li>
        <li>
          <Link to="about" smooth duration={500}>
            ABOUT
          </Link>
        </li>
        <li>
          <Link to="projects" smooth duration={500}>
            PROJECTS
          </Link>
        </li>
        <li>
          <Link to="contact" smooth duration={500}>
            CONTACT
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
