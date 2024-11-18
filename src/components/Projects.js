import React, { useState } from "react";
import "../styles/Projects.css";
import pizzaImg from "../images/pizza.jpg";
import learnImg from "../images/learn.jpg";
import weatherImg from "../images/weather.jpg";
import recipeImg from "../images/recipe.jpg";
import gameImg from "../images/game.jpg";
import musicImg from "../images/music.jpg";
import commerceImg from "../images/commerce.jpg";
import clockImg from "../images/clock.webp";

const projects = [
  {
    id: 1,
    title: "Slicehub",
    image: pizzaImg,
    description:
      "A pizza ordering application that allows users to customize their pizzas, choose from a menu of delicious options, and place orders conveniently. The app streamlines the ordering process with an intuitive interface.",
    liveDemo: "https://slicehub-tholoana.netlify.app",
    code: "https://github.com/Tholoana96/Slicehub",
  },
  {
    id: 2,
    title: "Letter Leap",
    image: learnImg,
    description:
      " A collaborative project focused on creating an engaging, interactive alphabet learning application. The app combines learning alphabets with animations to make learning enjoyable.",
    liveDemo: "https://nomcebo1992.github.io/Letter_Leap/",
    code: "https://github.com/Nomcebo1992/Letter_Leap",
  },
  {
    id: 3,
    title: "Weather App",
    image: weatherImg,
    description:
      "A user-friendly weather application that delivers accurate real-time weather updates, leveraging a simple and clean interface for ease of use.",
    liveDemo: "https://tholoana-weather.netlify.app",
    code: "https://github.com/Tholoana96/My_Weather_App",
  },
  {
    id: 4,
    title: "Recipe Generator",
    image: recipeImg,
    description:
      "An interactive application that generates random recipes based on user-selected ingredients, making cooking more creative and fun.",
    liveDemo: "https://myrecipe-generator.netlify.app",
    code: "https://github.com/Tholoana96/recipe-generator",
  },
  {
    id: 5,
    title: "Rocket Blast",
    image: gameImg,
    description:
      "An arcade-style game where players dodge asteroids with a rocket, showcasing interactive gameplay and responsive design using jQuery and HTML5 Canvas.",
    liveDemo: "https://live-demo-link5.com",
    code: "https://github.com/Tholoana96/RocketBlast",
  },
  {
    id: 6,
    title: "TuneScout",
    image: musicImg,
    description:
      " A music discovery app that lets users explore the top songs of the day, search for their favorite tracks, and listen to song previews using the Last.fm API.",
    liveDemo: "https://live-demo-link6.com",
    code: "https://github.com/Tholoana96/TuneScout",
  },
  {
    id: 7,
    title: "Pinspired",
    image: commerceImg,
    description:
      "An e-commerce platform where users can explore and purchase unique pins and patches. Built with React and Firebase, it offers a seamless browsing and checkout experience with real-time inventory tracking.",
    liveDemo: "https://live-demo-link7.com",
    code: "https://github.com/Tholoana96/Pinspired",
  },
  {
    id: 8,
    title: "World Clock",
    image: clockImg,
    description:
      "A world clock application that allows users to track time across multiple time zones in real-time. It provides an intuitive interface for effortless time management globally.",
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
