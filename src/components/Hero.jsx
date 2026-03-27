import React from "react";
import "../style.css";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-inner">

        {/* Left — text */}
        <div className="hero-content">

          <div className="hero-label">Available for work</div>

          <h1>
            Mubarak<br />
            <em>Lawal</em>
          </h1>

          <p className="hero-role">Full-Stack Developer</p>

          <p className="hero-desc">
            Building scalable, high-performance web apps with flawless UIs. React, Node.js, MongoDB.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn-primary">
              <i className="fas fa-arrow-down"></i> View Work
            </a>
            <a href="/cv.pdf" className="btn-outline">
              <i className="fas fa-file-arrow-down"></i> Download CV
            </a>
          </div>

          <div className="hero-socials">
            <a href="https://github.com/AMSDEV345" title="GitHub">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/ams-muzee-9b39873a8?utm_source=share_via&utm_content=profile&utm_medium=member_ios" title="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://www.instagram.com/amsdev00?igsh=MWUzczdhdjcwNjB5eg%3D%3D&utm_source=qr" title="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.tiktok.com/@muzeedev" title="TikTok">
              <i className="fab fa-tiktok"></i>
            </a>
            <a href="https://www.facebook.com/share/1AxLbUHfzS/?mibextid=wwXIfr" title="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://x.com/ams_dev2?s=21" title="X">
              <i className="fab fa-x-twitter"></i>
            </a>
            <a href="https://wa.me/2348128425129" title="WhatsApp">
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>

        </div>

        {/* Right — photo */}
        <div className="hero-photo-wrap">
          <div className="hero-photo-frame">
            <img src="/mubarak.jpg" alt="Mubarak Lawal" className="hero-photo" />
            <div className="hero-photo-glow"></div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;