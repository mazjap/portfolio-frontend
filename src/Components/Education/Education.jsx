import './Education.css';

const defaultEducation = [
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

export default function Education() {
  const education = defaultEducation;

  return (
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
  );
}