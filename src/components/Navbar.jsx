import React, { useState } from "react";
import "../style.css";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-logo"><span>//</span> Mubarak</div>

      <div className="nav-links">
        <a href="#projects">Work</a>
        <a href="#skills">Stack</a>
        <a href="#contact">Contact</a>
        <a href="/cv.pdf" className="nav-cta">Resume</a>
      </div>

      <button className={`nav-hamburger ${open ? "open" : ""}`} onClick={() => setOpen(!open)}>
        <span></span><span></span><span></span>
      </button>

      {open && (
        <div className="nav-mobile" onClick={() => setOpen(false)}>
          <a href="#projects">Work</a>
          <a href="#skills">Stack</a>
          <a href="#contact">Contact</a>
          <a href="/cv.pdf" className="nav-cta">Resume</a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;