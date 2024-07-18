import './Projects.css';

const defaultProjects = [
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
  // TODO: - Add projects
];

export default function Projects() {
  const projects = defaultProjects;

  return (
    <section className="section projects-section">
      <h2>Projects</h2>
      <div className="projects-container">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}