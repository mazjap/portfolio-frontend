import "./Experience.css"

const defaultExperience = [
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
  // TODO: - Add experience
];

export default function Experience() {
  const experience = defaultExperience;

  return (
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
  );
}