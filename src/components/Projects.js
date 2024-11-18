import React, { useState } from "react";
import "../styles/Projects.css";
import pizzaImg from "../images/pizza.png";
import learnImg from "../images/learn.png";
import weatherImg from "../images/weather.png";
import recipeImg from "../images/recipe.png";
import gameImg from "../images/game.png";
import musicImg from "../images/music.png";
import commerceImg from "../images/commerce.png";
import clockImg from "../images/clock.webp";

const projects = [
  {
    id: 1,
    title: "Slicehub",
    image: pizzaImg,
    description: "This is a description of project one.",
    liveDemo: "https://slicehub-tholoana.netlify.app",
    code: "https://github.com/Tholoana96/Slicehub",
  },
  {
    id: 2,
    title: "Letter Leap",
    image: learnImg,
    description: "This is a description of project two.",
    liveDemo: "https://nomcebo1992.github.io/Letter_Leap/",
    code: "https://github.com/Nomcebo1992/Letter_Leap",
  },
  {
    id: 3,
    title: "Weather App",
    image: weatherImg,
    description: "This is a description of project three.",
    liveDemo: "https://tholoana-weather.netlify.app",
    code: "https://github.com/Tholoana96/My_Weather_App",
  },
  {
    id: 4,
    title: "Recipe Generator",
    image: recipeImg,
    description: "This is a description of project four.",
    liveDemo: "https://myrecipe-generator.netlify.app",
    code: "https://github.com/Tholoana96/recipe-generator",
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
  {
    id: 8,
    title: "World Clock",
    image: clockImg,
    description: "This is a description of project seven.",
    liveDemo: "https://tholoana-world-clock.netlify.app",
    code: "https://github.com/Tholoana96/World-Clock",
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
