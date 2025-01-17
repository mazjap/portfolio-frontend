import { useEffect } from 'react';
import { useConsole } from '../ContextProviders/ConsoleContext';
import { Console, Contact, Footer, Skills, Projects, Experience, Education, Header } from '../Components/index';

export default function Home() {
  const { addLog } = useConsole();

  const handleKeyDown = (e) => {
    if ((e.metaKey || e.ctrlKey)) {
      if (e.key === 's') {
        e.preventDefault();
      } else if (e.key === 'b') {
        addLog('Build Succeeded');
        e.preventDefault();
      }
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  });

  return (
    <div className='app'>
      <Header title="Jordan Christensen" subtitle="Welcome to my portfolio website" />

      <main className='app-main'>
        <Experience />
        <Projects />
        <Skills />
        <Education />
      </main >

      <Contact />
      <Footer />
      <Console />
    </div>
  );
}