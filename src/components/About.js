import React from "react";
import { motion } from "framer-motion";
import "../styles/About.css";
import htmlIcon from "../images/icons/html-5.png";
import cssIcon from "../images/icons/css-3.png";
import javascriptIcon from "../images/icons/java-script.png";
import reactIcon from "../images/icons/react.png";
import firebaseIcon from "../images/icons/fire.png";
import gitIcon from "../images/icons/git.png";
import jqueryIcon from "../images/icons/jquery.png";
import sassIcon from "../images/icons/sass.png";
import restIcon from "../images/icons/api.png";
import responsiveIcon from "../images/icons/cross-platform.png";

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
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="skills-heading"
          >
            My Skills
          </motion.h2>

          <div className="skills">
            <div className="skill">
              <img src={htmlIcon} alt="" />
              <span>HTML5</span>
            </div>
            <div className="skill">
              <img src={cssIcon} alt="" />
              <span>CSS3</span>
            </div>
            <div className="skill">
              <img src={javascriptIcon} alt="" />
              <span>JavaScript (ES6+)</span>
            </div>
            <div className="skill">
              <img src={reactIcon} alt="" />
              <span>React</span>
            </div>
            <div className="skill">
              <img src={firebaseIcon} alt="" />
              <span>Firebase</span>
            </div>
            <div className="skill">
              <img src={gitIcon} alt="" />
              <span>Git</span>
            </div>
            <div className="skill">
              <img src={jqueryIcon} alt="" />
              <span>jQuery</span>
            </div>
            <div className="skill">
              <img src={sassIcon} alt="" />
              <span>Sass</span>
            </div>
            <div className="skill">
              <img src={restIcon} alt="" />
              <span>REST API</span>
            </div>
            <div className="skill">
              <img src={responsiveIcon} alt="" />
              <span>Responsive Design</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
