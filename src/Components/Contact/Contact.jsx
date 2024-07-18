import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <h2 className="contact-title">Get in Touch</h2>
      <div className="contact-info">
        <p className="contact-email">
          <a href="mailto:jordan.c4922@gmail.com">jordan.c4922@gmail.com</a>
        </p>
        <div className="contact-social">
          <a href="https://github.com/mazjap" target="_blank" rel="noopener noreferrer">
            <img src={process.env.PUBLIC_URL + '/images/icons/github.svg'} alt="GitHub" className="social-icon" />
          </a>
          <a href="https://www.linkedin.com/in/jordan-a-christensen/" target="_blank" rel="noopener noreferrer">
            <img src={process.env.PUBLIC_URL + '/images/icons/linkedin.svg'} alt="LinkedIn" className="social-icon" />
          </a>
          <a href="https://twitter.com/joshington_1" target="_blank" rel="noopener noreferrer">
            <img src={process.env.PUBLIC_URL + '/images/icons/twitter.svg'} alt="Twitter" className="social-icon" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;