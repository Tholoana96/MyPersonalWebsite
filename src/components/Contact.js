import React from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import "../styles/Contact.css";
import githubIcon from "../images/icons/email.png";
import linkedinIcon from "../images/icons/linkedin.png";
import emailIcon from "../images/icons/email.png";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData, "YOUR_USER_ID")
      .then(
        (result) => {
          console.log("Message Sent: ", result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log("Error: ", error.text);
          alert("Failed to send message.");
        }
      );
  };

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
      <form className="contact-form" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required></textarea>
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
          <img src={githubIcon} alt="GitHub" className="contact-icon" />
        </a>
        <a href="mailto:tholoana.manyane@gmail.com">
          <img src={emailIcon} alt="Email" className="contact-icon" />
        </a>
        <a href="https://www.linkedin.com/in/tholoana-m/">
          <img src={linkedinIcon} alt="Linkedin" className="contact-icon" />
        </a>
      </div>
    </section>
  );
}

export default Contact;
