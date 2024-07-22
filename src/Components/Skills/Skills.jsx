import './Skills.css';

const defaultSkills = [
  'Swift',
  'Mapbox',
  'MapKit',
  'StoreKit',
  'Combine',
  'Debugging',
  'Firebase',
  'Unit & Integration Testing',
  'The Composable Architecture',
  'Objective-C',
  'WidgetKit',
  'Googling',
  'GCD & async-await',
  'Swift Package Manager', 
  'Cocoapods',
  'SwiftUI & UIKit',
  'CoreData',
  'SwiftData',
  'CloudKit',
  'REST APIs',
  'GraphQL APIs',
  'Algorithms',
  'Trello', 
  'Jira', 
  'Monday',
  'Git/Github',
  'Data Structures',
  'App Store Connect',
];

export default function Skills() {
  const skills = defaultSkills;

  return (
    <section id='skills' className='section skills-section'>
      <h2>Skills</h2>
      <ul className='skills-list'>
        {
          skills.map(skill => (
            <li key={skill}>{skill}</li>
          ))
        }
      </ul>
    </section>
  )
}