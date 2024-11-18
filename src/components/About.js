import React from "react";
import { motion } from "framer-motion";
import "../styles/About.css";

function About() {
  return (
    <section id="about" className="about-me">
      <div className="content">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          About Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          I am a passionate and self-driven Frontend Developer with a keen eye
          for design and a love for building interactive, user-friendly
          applications. I specialize in HTML, CSS, JavaScript, React, and more!
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          My goal is to create seamless, responsive websites that not only look
          great but provide a top-notch user experience. I’m always excited to
          learn new technologies and stay up to date with industry trends.
        </motion.p>
        <div className="skills-background">
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="skills-heading"
          >
            My Skills
          </motion.h3>

          <div className="skills">
            <div className="skill">
              <img src="path/to/html-icon.png" alt="" />
              <span>HTML</span>
            </div>
            <div className="skill">
              <img src="path/to/css-icon.png" alt="" />
              <span>CSS</span>
            </div>
            <div className="skill">
              <img src="path/to/js-icon.png" alt="" />
              <span>JavaScript</span>
            </div>
            <div className="skill">
              <img src="path/to/react-icon.png" alt="" />
              <span>React</span>
            </div>
            <div className="skill">
              <img src="path/to/firebase-icon.png" alt="" />
              <span>Firebase</span>
            </div>
            <div className="skill">
              <img src="path/to/git-icon.png" alt="" />
              <span>Git</span>
            </div>
            <div className="skill">
              <img src="path/to/jquery-icon.png" alt="" />
              <span>jQuery</span>
            </div>
            <div className="skill">
              <img src="path/to/sass-icon.png" alt="" />
              <span>Sass</span>
            </div>
            <div className="skill">
              <img src="path/to/restapi-icon.png" alt="" />
              <span>REST API</span>
            </div>
            <div className="skill">
              <img src="path/to/responsive-icon.png" alt="" />
              <span>Responsive Design</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
