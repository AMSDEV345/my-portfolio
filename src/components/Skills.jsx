import React from "react";
import "../style.css";

const stack = [
  { icon: "fab fa-html5",    label: "HTML"       },
  { icon: "fab fa-css3-alt", label: "CSS"        },
  { icon: "fab fa-js",       label: "JavaScript" },
  { icon: "fab fa-react",    label: "React"      },
  { icon: "fab fa-node-js",  label: "Node.js"    },
  { icon: "fas fa-database", label: "MongoDB"    },
  { icon: "fab fa-git-alt",  label: "Git"        },
  { icon: "fab fa-github",   label: "GitHub"     },
];

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="section-label">Tech Stack</div>
      <div className="section-title">What I build with</div>

      <div className="skills-grid">
        {stack.map(({ icon, label }) => (
          <div className="skill-card" key={label}>
            <i className={icon}></i>
            <p>{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;