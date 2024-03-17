import { useEffect } from 'react';
import Console from './Console';
import { useConsole } from './ConsoleContext';

import './App.css';

function App() {
    const { addLog, consoleSize } = useConsole();

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

    const projects = [
        {
            id: 1,
            title: 'iOS App - Weather Forecast',
            description: 'A weather forecasting app that provides accurate weather information based on location.',
            image: 'weather-app.jpg',
        },
        {
            id: 2,
            title: 'iOS Game - Space Invaders',
            description: 'A classic space-themed game where players defend against invading aliens.',
            image: 'space-invaders.jpg',
        },
        // Add more project objects as needed
    ];

    const skills = [
        'Swift',
        'SwiftUI',
        'UIKit',
        'Core Data',
        // Add more skills as needed
    ];

    const experience = [
        {
            id: 1,
            title: 'iOS Developer Intern',
            company: 'XYZ Company',
            duration: 'June 2022 - August 2022',
            description: 'Worked on developing and maintaining iOS applications using Swift and UIKit.',
        },
        {
            id: 2,
            title: 'Freelance iOS Developer',
            company: 'ABC Agency',
            duration: 'January 2021 - Present',
            description: 'Collaborated with clients to develop customized iOS applications that meet their specific needs.',
        },
        // Add more experience objects as needed
    ];

    const education = [
        {
            id: 1,
            degree: 'Bachelor of Science in Computer Science',
            university: 'XYZ University',
            duration: '2018 - 2022',
        },
        {
            id: 2,
            degree: 'iOS Development Certification',
            university: 'Online Course',
            duration: '2020',
        },
        // Add more education objects as needed
    ];

    return (
        <div className="app">
            <header className="app-header">
                <h1>My Portfolio</h1>
                <p>Welcome to my portfolio website!</p>
            </header>

            <main className="app-main" style={{ marginBottom : consoleSize?.height ?? 0 }}>
                <section className="section projects-section">
                    <h2>Projects</h2>
                    <div className="projects-container">
                        {projects.map((project) => (
                            <div key={project.id} className="project-card">
                                <img src={project.image} alt={project.title} />
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="section skills-section">
                    <h2>Skills</h2>
                    <ul className="skills-list">
                        {skills.map((skill) => (
                            <li key={skill}>{skill}</li>
                        ))}
                    </ul>
                </section>

                <section className="section experience-section">
                    <h2>Experience</h2>
                    {experience.map((exp) => (
                        <div key={exp.id} className="experience-card">
                            <h3>{exp.title}</h3>
                            <p>{exp.company}</p>
                            <p>{exp.duration}</p>
                            <p>{exp.description}</p>
                        </div>
                    ))}
                </section>

                <section className="section education-section">
                    <h2>Education</h2>
                    {education.map((edu) => (
                        <div key={edu.id} className="education-card">
                            <h3>{edu.degree}</h3>
                            <p>{edu.university}</p>
                            <p>{edu.duration}</p>
                        </div>
                    ))}
                </section>
            </main >
            <Console />
        </div>
    );
}

export default App;