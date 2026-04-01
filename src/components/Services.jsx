import React from "react";
import "../style.css";

const services = [
  { icon: "🌐", title: "Web Development", desc: "Building fast, responsive websites with clean code and modern best practices." },
  { icon: "⚙️", title: "Full Stack Apps", desc: "End-to-end applications powered by React, Node.js, and MongoDB." },
  { icon: "🎨", title: "UI Design", desc: "Clean, modern interfaces that users actually enjoy using." },
];

function Services() {
  return (
    <section id="services" className="services">
      <div className="section-label">What I Offer</div>
      <div className="section-title">Services</div>
      <div className="services-grid">
        {services.map((s) => (
          <div className="service-card" key={s.title}>
            <div className="service-icon">{s.icon}</div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;