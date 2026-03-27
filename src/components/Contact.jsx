import React from "react";
import "../style.css";

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="section-label">Get In Touch</div>
      <div className="section-title">Let's work together</div>

      <div className="contact-layout">

        <div className="contact-copy">
          <p>
            Open to remote work, freelance gigs, collabs, and full-time roles. Got a project? Let’s chat!
          </p>

          <a href="mailto:amsdev05@gmail.com" className="contact-email">
            amsdev05@gmail.com
          </a>

          <a
            href="https://wa.me/2348128425129?text=Hi%20Mubarak%2C%20I%20saw%20your%20portfolio%20and%20I%27d%20like%20to%20work%20with%20you."
            className="whatsapp-btn"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-whatsapp"></i> Chat on WhatsApp
          </a>
        </div>

        <form className="contact-form">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Tell me about your project…"></textarea>
          <button
            type="button"
            onClick={() =>
              window.open(
                "https://wa.me/2348128425129?text=Hi%20Mubarak%2C%20I%20saw%20your%20portfolio%20and%20I%27d%20like%20to%20work%20with%20you.",
                "_blank"
              )
            }
          >
            <i className="fab fa-whatsapp"></i> Send via WhatsApp
          </button>
        </form>

      </div>
    </section>
  );
}

export default Contact;