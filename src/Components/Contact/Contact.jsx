import React from 'react';

import { ReactComponent as Github } from './icons/github.svg'
import { ReactComponent as LinkedIn } from './icons/linkedin.svg'
import { ReactComponent as Twitter } from './icons/twitter.svg'

import './Contact.css';

function Contact() {
  return (
    <section id='contact' className='section contact-section'>
      <h2 className='contact-title'>Get in Touch</h2>
      <div className='contact-info'>
        <p className='contact-email'>
          <a href='mailto:jordan.c4922@gmail.com'>jordan.c4922@gmail.com</a>
        </p>
        <div className='contact-social'>
          <a href='https://github.com/mazjap' target='_blank' rel='noopener noreferrer'>
            <Github className='social-icon' />
          </a>
          <a href='https://www.linkedin.com/in/jordan-a-christensen/' target='_blank' rel='noopener noreferrer'>
            <LinkedIn className='social-icon' />
          </a>
          <a href='https://twitter.com/joshington_1' target='_blank' rel='noopener noreferrer'>
            <Twitter className='social-icon' />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;