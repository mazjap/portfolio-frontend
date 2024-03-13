import React from 'react';
import Console from './Console';
import { useConsole } from './ConsoleContext';

import './App.css';

function App() {
    const { addLog } = useConsole();

    const handleKeyDown = (e) => {
        if ((e.metaKey || e.ctrlKey)) {
            if (e.key === 's') {
                e.preventDefault(); // Prevent the default behavior
            } else if (e.key === 'b') {
                addLog("Build Succeeded");
                e.preventDefault();
            }
        }
    };
    
    React.useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    });

    return (
        <div className="app">
            <header className="app-header">
                <h1>Jordan Christensen</h1>
                <p>iOS Developer</p>
                <p>Dedicated to crafting elegant solutions in the world of iOS apps.</p>
            </header>
            <main>
                <section className="section">
                    <h2>Resume</h2>
                    <p>A glimpse into my professional journey and the skills I bring to the table.</p>
                    <a href="path/to/your/resume.pdf" target="_blank" rel="noopener noreferrer">Download Resume</a>
                </section>
                <section className="section">
                    <h2>Blog</h2>
                    <article>
                        <h3>Exploring SwiftUI's Latest Features</h3>
                        <p>June 10, 2024 - SwiftUI continues to evolve, and with its latest update, we're introduced to a slew of new capabilities that streamline the development process...</p>
                        <a href="#">Read more</a>
                    </article>
                    <article>
                        <h3>Understanding Combine for Reactive Swift</h3>
                        <p>May 22, 2024 - Combine is a declarative Swift API for processing values over time. These concepts are fundamental for modern iOS apps, and here's how you can grasp and apply them...</p>
                        <a href="#">Read more</a>
                    </article>
                </section>
                <section className="section">
                    <h2>Projects</h2>
                    <div className="project">
                        <h3>Weather Now</h3>
                        <p>An intuitive app providing real-time weather updates and forecasts. Developed with Swift, leveraging CoreLocation for local weather data.</p>
                    </div>
                    <div className="project">
                        <h3>Meal Planner</h3>
                        <p>A daily meal planning app that helps users track their nutrition and caloric intake, built using SwiftUI and integrated with HealthKit.</p>
                    </div>
                </section>
                <Console/>
            </main>
        </div>
    );
}

export default App;