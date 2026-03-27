import React from "react";
import "../style.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-top">
        <p className="footer-tagline">Let's build something great.</p>
        <a href="mailto:amsdev05@gmail.com" className="footer-email">
          amsdev05@gmail.com
        </a>
      </div>

      <div className="footer-divider"></div>

      <div className="footer-mid">
        <h2 className="footer-name">Mubarak<em> Lawal</em></h2>
        <div className="footer-socials">
          <a href="https://github.com/AMSDEV345" title="GitHub">
            <i className="fab fa-github"></i>
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

      <div className="footer-divider"></div>

      <div className="footer-bottom">
        <p>© 2026 Mubarak Lawal. All rights reserved.</p>
        <div className="footer-links">
          <a href="#projects">Work</a>
          <a href="#skills">Stack</a>
          <a href="#contact">Contact</a>
        </div>
      </div>

    </footer>
  );
}

export default Footer;