import React from 'react';
import '../CSS/Contact.css'; // Import the CSS file for custom styles
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact</h1>
      <form className="contact-form">
        <input type="text" placeholder="Name" className="contact-input" />
        <input type="text" placeholder="Address" className="contact-input" />
        <input type="email" placeholder="Email" className="contact-input" />
        <input type="tel" placeholder="Phone Number" className="contact-input" />
      </form>
      <div className="social-icons">
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
          <FaGithub className="icon" />
        </a>
        <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="icon" />
        </a>
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="icon" />
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="icon" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
