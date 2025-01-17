import './Experience.css'

const defaultExperience = [
  {
    id: 1,
    title: 'iOS Developer',
    company: 'Wander App Inc',
    duration: 'February 2021 - October 2023',
    description: 'Worked on developing and maintaining the company\'s iOS application using Swift.\nWhat I did:\n- Transition the UIKit-based app to SwiftUI\n- Majorly improved the performance of the Mapbox map\n- Added the ability to save map tiles for offline use\n- Transitioned the app from GCD completion handler-based concurrency to async-await\n- General maintanence and bug fixing\n\nPlease note, the app now uses React Native and no longer reflects the work that I did while there.',
    website: 'https://wandermaps.com/',
    appstore: 'https://apps.apple.com/us/app/wander-maps-navigation/id1556697512'
  },
  {
    id: 2,
    title: 'iOS Developer',
    company: 'Self-Employed',
    duration: 'October 2023 - Present',
    description: 'Worked on a wide array of projects to build a stronger understanding of my tools. See the list of projects below for a taste of what I\'ve been working on.'
  },
];


export default function Experience() {
  const experience = defaultExperience.toReversed();

  return (
    <section id='experience' className='section experience-section'>
      <h2>Experience</h2>
      {experience.map(exp => {
        const descriptionParagraphs = exp.description.split('\n').map((section, index) => {
          return { key: index, text: section }
        })
        return (
          <div key={exp.id} className='experience-card'>
            <h3>{exp.title}</h3>
            <p>{exp.company ?? ''}</p>
            <p>{exp.duration}</p>
            { descriptionParagraphs.map(({key, text}) => <p key={key}>{text}</p>) }
            { exp.website && <a style={{ marginRight: '25px' }} href={exp.website}>Website</a> }
            { exp.appstore && <a href={exp.appstore}>App Store</a> }
          </div>
        )
      })}
    </section>
  );
}