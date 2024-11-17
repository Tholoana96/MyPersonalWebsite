import React from "react";
import { motion } from "framer-motion";
import "../styles/Skills.css";

const skills = [
  { name: "HTML", level: 90 },
  { name: "CSS", level: 85 },
  { name: "JavaScript", level: 80 },
  { name: "React", level: 75 },
];

function Skills() {
  return (
    <section id="skills">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        Skills
      </motion.h2>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <div className="skill-item" key={index}>
            <motion.div
              className="skill-name"
              initial={{ width: 0 }}
              animate={{ width: `${skill.level}%` }}
              transition={{ duration: 1.5, delay: index * 0.2 }}
            >
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
