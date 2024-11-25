import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import "../styles/Hero.css";

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="star-container">
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
      </div>
      <motion.div
        className="text-content"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <motion.h1
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="hero-title"
        >
          Hi, I'm <span className="highlight">Tholoana</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="hero-subtitle"
        >
          A Passionate Frontend Developer
        </motion.p>
        <Link to="projects" smooth={true} duration={1000}>
          <motion.button
            className="cta"
            whileHover={{ scale: 1.1, rotate: 10 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.button>
        </Link>
      </motion.div>
    </section>
  );
}

export default Hero;
