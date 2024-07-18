import { useEffect } from 'react';
import { useConsole } from './ContextProviders/ConsoleContext';
import { Console, Contact, Footer, Skills, Projects, Experience, Education } from './Components/index';

import './App.css';

function App() {
  const { addLog } = useConsole();

  const handleKeyDown = (e) => {
    if ((e.metaKey || e.ctrlKey)) {
      if (e.key === 's') {
        e.preventDefault();
      } else if (e.key === 'b') {
        addLog("Build Succeeded");
        e.preventDefault();
      }
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  });

  return (
    <div className="app">
      <header className="app-header">
        <h1>Jordan Christensen</h1>
        <p>Welcome to my portfolio website!</p>
      </header>

      <main className="app-main">
        <Projects />
        <Skills />
        <Experience />
        <Education />
        <Contact />
      </main >

      <Footer />
      <Console />
    </div>
  );
}

export default App;