import React from "react";
import "../style.css";

const projects = [
  {
    num: "01 — Portfolio",
    title: "My Portfolio",
    desc: "Personal developer portfolio built with React and Vite. Features responsive design, smooth animations, and a clean editorial aesthetic.",
    tags: ["React", "Vite", "CSS", "Vercel"],
    image: "/projects/portfolio.png",
    live: "https://my-portfolio-ashy-one-47.vercel.app",
    github: "https://github.com/AMSDEV345/my-portfolio",
  },
  {
    num: "02 — E-Commerce",
    title: "AMS Jersey City",
    desc: "Full-stack football jersey store with product catalogue, cart, order management, and an admin dashboard.",
    tags: ["React", "Node.js", "MongoDB", "Vercel"],
    image: "/projects/jersey.png",
    live: "https://ams-jersey-front.vercel.app",
    github: "#",
  },
  {
    num: "03 — Productivity",
    title: "TaskFlow",
    desc: "Task management app with project boards, real-time updates, and user authentication.",
    tags: ["React", "Node.js", "MongoDB", "JWT"],
    image: "/projects/taskflow.png",
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
            <div className="project-card-img">
              <img src={p.image} alt={p.title} />
            </div>
            <div className="project-card-body">
              <div className="project-num">{p.num}</div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <div className="project-tags">
                {p.tags.map((t) => (
                  <span className="project-tag" key={t}>{t}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={p.live} target="_blank" rel="noreferrer">
                  <i className="fas fa-arrow-up-right-from-square"></i> Live
                </a>
                <a href={p.github} target="_blank" rel="noreferrer">
                  <i className="fab fa-github"></i> GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;