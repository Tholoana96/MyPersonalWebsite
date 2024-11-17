import React from "react";
import { motion } from "framer-motion";
import "../styles/Projects.css";

const projects = [
  {
    title: "SliceHub",
    description: "A pizza delivery app with a modern UI.",
    link: "#",
  },
  {
    title: "Letter Leap",
    description: "Interactive letter-learning game for kids.",
    link: "#",
  },
  {
    title: "Weather App",
    description: "A weather forecasting app using APIs.",
    link: "#",
  },
  {
    title: "Recipe Generator",
    description: "Discover recipes based on available ingredients.",
    link: "#",
  },
];

function Projects() {
  return (
    <section id="projects">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Projects
      </motion.h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            className="project-card"
            key={index}
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            whileHover={{ scale: 1.05 }}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
