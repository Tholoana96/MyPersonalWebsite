import React from "react";
import { motion } from "framer-motion";
import "../styles/About.css";

function About() {
  return (
    <section id="about">
      <motion.h2
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        About Me
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        I'm a Frontend Developer with a passion for building engaging web
        applications.
      </motion.p>
    </section>
  );
}

export default About;
