import React from "react";
import "../style.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <span>//</span> Mubarak
      </div>
      <div className="nav-links">
        <a href="#projects">Work</a>
        <a href="#skills">Stack</a>
        <a href="#contact">Contact</a>
        <a href="/cv.pdf" className="nav-cta">Resume</a>
      </div>
    </nav>
  );
}

export default Navbar; 