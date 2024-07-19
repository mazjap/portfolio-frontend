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
    title: 'Habbit Hacker',
    language: 'Swift',
    techStack: 'UIKit, CoreData, CloudKit, Local Notifications, JTAppleCalendar',
    description: 'Habit Hacker was built by myself and one other developer over the course of one week. It is an app that reminds users to complete tasks with enough repetition to become a habit. Sends daily notifications and uses a calendar and pie chart to track progress.\n\nOn this project, I implemented CloudKit, as well as Local Notifications, the JTAppleCalendar framework, and a custom navigation bar.',
    images: [1, 2, 3, 4, 5].map(imgName => process.env.PUBLIC_URL + '/images/projects/habithacker/' + imgName + '.png'),
  },
  {
    id: 3,
    title: 'Community Calendar',
    language: 'Swift',
    techStack: 'UIKit, GraphQL, Auth0, CoreData, Notification Design Pattern',
    description: 'Worked on a cross-functional, remote team of 12 developers to build an application that connects you with the events happening within a user\'s neighborhood. It possesses an intuitive search and filter feature and the ability to add any event to your calendar or get directions in maps.\n\nOn this project, I worked on the GraphQL implementation, maps, calendar, custom search and filtering, etc.',
    images: [1, 2, 3, 4, 5, 6].map(imgName => process.env.PUBLIC_URL + '/images/projects/communitycalendar/' + imgName + '.png'),
  },
  {
    id: 4,
    title: 'Settings Prototype',
    language: 'Swift',
    techStack: 'SwiftUI',
    description: 'Built a static settings app clone to prove understanding of SwiftUI Lists, sections, forms, etc.',
    images: [1].map(imgName => process.env.PUBLIC_URL + '/images/projects/settings/' + imgName + '.png'),
  },
  {
    id: 5,
    title: 'NeoMusic',
    language: 'Swift',
    techStack: 'SwiftUI, MusicKit, ',
    description: 'A simple, but elegant music player with fun features and a design based in Neomorphism. Music is a passion of mine, so what better way to gain a better understanding of SwiftUI and custom components then making a music player.',
    images: [...[1, 2, 3, 4].map(imgName => process.env.PUBLIC_URL + '/images/projects/neomusic/' + imgName + '.PNG'), process.env.PUBLIC_URL + '/images/projects/neomusic/5.MP4'],
  },
  {
    id: 6,
    title: "2048 Clone",
    language: "Swift",
    techStack: 'SwiftUI',
    description: 'Built a 2048 clone, because I like 2048 as well as building my own versions of things.',
    images: [1, 2, 3, 4].map(imgName => process.env.PUBLIC_URL + '/images/projects/2048/' + imgName + '.png'),
  },
  {
    id: 7,
    title: "fWords",
    language: "Swift",
    techStack: 'SwiftUI',
    description: 'Built a Wordle clone, because I like Wordle, and building my own versions of things.',
    images: [1, 2, 3, 4, 5, 6].map(imgName => process.env.PUBLIC_URL + '/images/projects/fwords/' + imgName + '.png'),
  },
  {
    id: 8,
    title: "2D Ray Tracing",
    language: 'Swift',
    techStack: 'SwiftUI, UIKit',
    description: 'A ray tracer built in both UIKit and SwiftUI.',
    images: [...[1, 2, 3, 4, 5].map(imgName => process.env.PUBLIC_URL + '/images/projects/raytracing/' + imgName + '.png'), process.env.PUBLIC_URL + '/images/projects/raytracing/6.mp4'],
  },
  {
    id: 9,
    title: 'Flask Master',
    language: 'Swift',
    techStack: 'SwiftUI, StoreKit, UserDefaults',
    description: 'Flask Master is a 2D color sorting game built with accessibility (A11y) in mind. With voiceover, dynamicly colored backgrounds, and multiple difficulties, anyone can become a pro.',
    images: [1, 2, 3, 4, 5, 6, 7].map(imgName => process.env.PUBLIC_URL + '/images/projects/flaskmaster/' + imgName + '.png'),
  },
  {
    id: 10,
    title: 'Make-A-Map',
    language: 'Swift',
    techStack: 'SwiftUI, MapKit, SwiftData',
    description: 'A build-your-own map app where you can mark places of interest, add a path by tapping to connect points, or record a path as you walk a trail using user\'s location.',
    images: [
      ...[1, 2, 3].map(imgName => process.env.PUBLIC_URL + '/images/projects/makeamap/' + imgName + '.png'), 
      process.env.PUBLIC_URL + '/images/projects/makeamap/5.mp4', 
      process.env.PUBLIC_URL + '/images/projects/makeamap/6.png'
    ],
  }
];

export default function Projects() {
  // TODO: - Pull from firebase store so it's easier to update the site
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
        })}

        <p style={{ color: "#AAAAAA", fontSize: "12px", width: "80%" }}>This is just a taste of the projects I've done. There are many others that I plan to add here soon, others that I need to finish, and others still that I want to make. Check back again to see what I've been working on.</p>
      </div>
    </section>
  )
}