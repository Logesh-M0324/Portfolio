import React from 'react';
import './contact.css';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { HiOutlineMail } from 'react-icons/hi';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="social-connect">
        <h2 className="contact-heading-glow">Connect with Me</h2>
        <p className="subtitle">Feel free to reach out via any of the platforms below</p>

        <div className="social-grid">
          <a
            href="https://github.com/Logesh-M0324"
            target="_blank"
            rel="noopener noreferrer"
            className="social-card"
          >
            <FaGithub className="social-icon" />
            <span>GitHub</span>
          </a>

          <a
            href="https://leetcode.com/u/LOGESH_M24/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-card"
          >
            <SiLeetcode className="social-icon" />
            <span>LeetCode</span>
          </a>

          <a
            href="https://www.linkedin.com/in/logesh-m-648512277/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-card"
          >
            <FaLinkedin className="social-icon" />
            <span>LinkedIn</span>
          </a>

          <a
            href="https://wa.me/917339281039"
            target="_blank"
            rel="noopener noreferrer"
            className="social-card"
          >
            <FaWhatsapp className="social-icon" />
            <span>WhatsApp</span>
          </a>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=logesh.m0324@gmail.com"
            className="social-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <HiOutlineMail className="social-icon" />
            <span>Gmail</span>
          </a>
        </div>
      </div><br /><br />
    </section>
  );
};

export default Contact;
