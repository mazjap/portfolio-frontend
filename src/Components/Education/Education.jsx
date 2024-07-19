import './Education.css';

const defaultEducation = [
  {
    id: 1,
    degree: 'Web Development Certification',
    university: 'Mountainland Technical College',
    duration: '2020 - 2021 (1 year)',
    link: 'https://mtec.edu/programs/web-programming-development/'
  },
  {
    id: 2,
    degree: 'iOS Development Certification',
    university: 'Bloom Institute of Technology (formerly Lambda School)',
    duration: '2019 - 2020 (1 year)',
    link: 'https://www.bloomtech.com/'
  },
  {
    id: 3,
    degree: 'AP Computer Science',
    university: 'Shanghai American School (上海美国学校)',
    duration: '2016 - 2018 (2 years)',
    link: 'https://www.saschina.org/'
  },
];

export default function Education() {
  const education = defaultEducation;

  return (
    <section className='section education-section'>
      <h2>Education</h2>
      {education.map((edu) => (
        <div key={edu.id} className='education-card'>
          <h3>{edu.degree}</h3>
          <p>{edu.university}</p>
          <p>{edu.duration}</p>
          { edu.link && (
            <a href={edu.link}>Learn More</a>
          )}
        </div>
      ))}
    </section>
  );
}