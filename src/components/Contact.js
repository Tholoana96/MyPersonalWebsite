import React from "react";
import { motion } from "framer-motion";
import "../styles/Contact.css";

function Contact() {
  return (
    <section id="contact">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        Contact
      </motion.h2>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <motion.button
          type="submit"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Send Message
        </motion.button>
      </form>
      <div className="contact-links">
        <a
          href="https://github.com/Tholoana96"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a href="mailto:tholoana.manyane@gmail.com">Email</a>
        <a href="https://www.linkedin.com/in/tholoana-m/">LinkedIn</a>
      </div>
    </section>
  );
}

export default Contact;
