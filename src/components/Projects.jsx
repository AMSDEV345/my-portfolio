import React from "react";
import "../style.css";

const projects = [
  {
    num: "01 — E-Commerce",
    title: "AMS Jersey City",
    desc: "Full-stack football jersey store with product catalogue, cart, order management, and an admin dashboard. 55+ jerseys across all major leagues.",
    tags: ["React", "Node.js", "MongoDB", "Vercel", "Railway"],
    live: "https://ams-jersey-front.vercel.app",
    github: "#",
  },
  {
    num: "02 — Productivity",
    title: "TaskFlow",
    desc: "Task management app with project boards, real-time updates, and user authentication. Built for teams that need a clean, distraction-free workflow.",
    tags: ["React", "Node.js", "MongoDB", "JWT"],
    live: "https://taskflow-frontend-h7a8.vercel.app",
    github: "#",
  },
];

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="section-label">Selected Work</div>
      <div className="section-title">Featured Projects</div>

      <div className="projects-grid">
        {projects.map((p) => (
          <div className="project-card" key={p.title}>
            <div className="project-num">{p.num}</div>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <div className="project-tags">
              {p.tags.map((t) => (
                <span className="project-tag" key={t}>{t}</span>
              ))}
            </div>
            <div className="project-links">
              <a href={p.live}>
                <i className="fas fa-arrow-up-right-from-square"></i> Live
              </a>
              <a href={p.github}>
                <i className="fab fa-github"></i> GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;