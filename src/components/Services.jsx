import React from "react";

function Services() {
  return (
    <section id="services" className="services">
      <h2>Services</h2>
      <div className="service-grid">
        <div className="service-card">
          <h3>Web Development</h3>
          <p>Building responsive websites using modern technologies.</p>
        </div>
        <div className="service-card">
          <h3>Full Stack Apps</h3>
          <p>Creating full stack applications with React, Node.js, and MongoDB.</p>
        </div>
        <div className="service-card">
          <h3>UI Design</h3>
          <p>Designing clean, modern, and user-friendly interfaces.</p>
        </div>
      </div>
    </section>
  );
}

export default Services;