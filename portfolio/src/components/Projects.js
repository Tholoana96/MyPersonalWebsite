import React, { useState } from "react";
import "../styles/Projects.css";
import pizzaImg from "../images/pizza.png";
import learnImg from "../images/learn.png";
import weatherImg from "../images/weather.png";
import recipeImg from "../images/recipe.png";
import gameImg from "../images/game.png";
import musicImg from "../images/music.png";
import commerceImg from "../images/commerce.png";

const projects = [
  {
    id: 1,
    title: "Project One",
    image: pizzaImg,
    description: "This is a description of project one.",
    liveDemo: "https://live-demo-link1.com",
    code: "https://github.com/example/project-one",
  },
  {
    id: 2,
    title: "Project Two",
    image: learnImg,
    description: "This is a description of project two.",
    liveDemo: "https://live-demo-link2.com",
    code: "https://github.com/example/project-two",
  },
  {
    id: 3,
    title: "Project Three",
    image: weatherImg,
    description: "This is a description of project three.",
    liveDemo: "https://live-demo-link3.com",
    code: "https://github.com/example/project-three",
  },
  {
    id: 4,
    title: "Project Four",
    image: recipeImg,
    description: "This is a description of project four.",
    liveDemo: "https://live-demo-link4.com",
    code: "https://github.com/example/project-four",
  },
  {
    id: 5,
    title: "Project Five",
    image: gameImg,
    description: "This is a description of project five.",
    liveDemo: "https://live-demo-link5.com",
    code: "https://github.com/example/project-five",
  },
  {
    id: 6,
    title: "Project Six",
    image: musicImg,
    description: "This is a description of project six.",
    liveDemo: "https://live-demo-link6.com",
    code: "https://github.com/example/project-six",
  },
  {
    id: 7,
    title: "Project Seven",
    image: commerceImg,
    description: "This is a description of project seven.",
    liveDemo: "https://live-demo-link7.com",
    code: "https://github.com/example/project-seven",
  },
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="projects">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div
            key={project.id}
            className="project-card"
            onClick={() => setSelectedProject(project)}
          >
            <img src={project.image} className="project-image" alt="" />
          </div>
        ))}
      </div>
      {selectedProject && (
        <div className="project-modal" onClick={() => setSelectedProject(null)}>
          <div
            className="project-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={selectedProject.image} className="modal-image" alt="" />
            <h3>{selectedProject.title}</h3>
            <p>{selectedProject.description}</p>
            <div className="modal-links">
              <a
                href={selectedProject.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="modal-link"
              >
                Live Demo
              </a>
              <a
                href={selectedProject.code}
                target="_blank"
                rel="noopener noreferrer"
                className="modal-link"
              >
                View Code
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
