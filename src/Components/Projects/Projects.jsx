import './Projects.css';
import ImageCarousel from '../ImageCarousel/ImageCarousel';

const defaultProjects = [
  {
    id: 1,
    title: 'Pokédex',
    language: 'Objective-C',
    techStack: 'UIKit, UserDefaults, URLSession',
    description: 'A pokédex to catalog and learn more about all of the Pokémon users find. This solo project was made to practice mixing Objective-C and Swift, while incorporating something that I have enjoyed for years, Pokémon.',
    images: [1, 2, 3, 4].map(imgName => process.env.PUBLIC_URL + '/images/projects/pokedex/' + imgName + '.png'),
  },
  {
    id: 2,
    title: 'NeoMusic',
    language: 'Swift',
    techStack: 'SwiftUI, MusicKit, ',
    description: 'A simple, but elegant music player with fun features and a design based in Neomorphism. Music is a passion of mine, so what better way to gain a better understanding of SwiftUI and custom components then making a music player.',
    images: [...[1, 2, 3, 4].map(imgName => process.env.PUBLIC_URL + '/images/projects/neomusic/' + imgName + '.PNG'), process.env.PUBLIC_URL + '/images/projects/neomusic/5.MP4'],
  },
  {
    id: 3,
    title: 'Habbit Hacker',
    language: 'Swift',
    techStack: 'UIKit, CoreData, CloudKit, Local Notifications, JTAppleCalendar',
    description: 'Habit Hacker was built by myself and one other developer over the course of one week. It is an app that reminds users to complete tasks with enough repetition to become a habit. Sends daily notifications and uses a calendar and pie chart to track progress.\n\nOn this project, I implemented CloudKit, as well as Local Notifications, the JTAppleCalendar framework, and a custom navigation bar.',
    images: [1, 2, 3, 4, 5].map(imgName => process.env.PUBLIC_URL + '/images/projects/habithacker/' + imgName + '.png'),
  },
  {
    id: 4,
    title: 'Community Calendar',
    language: 'Swift',
    techStack: 'UIKit, GraphQL, Auth0, CoreData, Notification Design Pattern',
    description: 'Worked on a cross-functional, remote team of 12 developers to build an application that connects you with the events happening within a user\'s neighborhood. It possesses an intuitive search and filter feature and the ability to add any event to your calendar or get directions in maps.\n\nOn this project, I worked on the GraphQL implementation, maps, calendar, custom search and filtering, etc.',
    images: [1, 2, 3, 4, 5, 6].map(imgName => process.env.PUBLIC_URL + '/images/projects/communitycalendar/' + imgName + '.png'),
  },
  {
    id: 5,
    title: 'Flask Master',
    language: 'Swift',
    techStack: 'SwiftUI, StoreKit, UserDefaults',
    description: 'A simple, yet addicting game where you try to sort colors into flasks',
    images: [1, 2, 3, 4, 5].map(imgName => process.env.PUBLIC_URL + '/images/projects/flaskmaster/' + imgName + '.jpg'),
  },
];

export default function Projects() {
  const projects = defaultProjects.toReversed();

  return (
    <section className="section projects-section">
      <h2>Projects</h2>
      <div className="projects-container">
        {projects.map(project => {
          const descriptionParagraphs = project.description.split("\n").map((section, index) => {
            return { key: index, text: section }
          })
          return (
            <div key={project.id} className="project-card">
              { project.images &&
                <ImageCarousel images={project.images} />
              }
              <span style={{ color: "#999" }}>{project.language}</span>
              <h3>{project.title}</h3>
              <span style={{ fontSize: "10px"}}>{project.techStack}</span>
              {
                descriptionParagraphs.map(({key, text}) => <p key={key}>{text}</p>)
              }
            </div>
          )
        }
      )}
      </div>
    </section>
  )
}