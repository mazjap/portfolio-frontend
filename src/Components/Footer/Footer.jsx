import React from 'react';
import './Footer.css';
import { useConsole } from '../../ContextProviders/ConsoleContext';

function Footer() {
  const currentYear = new Date().getFullYear();
  const { consoleSize } = useConsole();

  return (
    <footer className='footer' style={{ paddingBottom: (consoleSize?.height ?? 0) + 20 }}>
      <p className='footer-text'>
        &copy; 2019-{currentYear} Jordan Christensen. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;