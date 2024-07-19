import './Projects.css';
import ImageCarousel from '../ImageCarousel/ImageCarousel';

import pokedex1 from './projectSrc/pokedex/1.png'
import pokedex2 from './projectSrc/pokedex/2.png'
import pokedex3 from './projectSrc/pokedex/3.png'
import pokedex4 from './projectSrc/pokedex/4.png'

import habithacker1 from './projectSrc/habithacker/1.png'
import habithacker2 from './projectSrc/habithacker/2.png'
import habithacker3 from './projectSrc/habithacker/3.png'
import habithacker4 from './projectSrc/habithacker/4.png'

import communitycalendar1 from './projectSrc/communitycalendar/1.png'
import communitycalendar2 from './projectSrc/communitycalendar/2.png'
import communitycalendar3 from './projectSrc/communitycalendar/3.png'
import communitycalendar4 from './projectSrc/communitycalendar/4.png'
import communitycalendar5 from './projectSrc/communitycalendar/5.png'

import settings1 from './projectSrc/settings/1.png'

import neomusic1 from './projectSrc/neomusic/1.png'
import neomusic2 from './projectSrc/neomusic/2.png'
import neomusic3 from './projectSrc/neomusic/3.png'
import neomusic4 from './projectSrc/neomusic/4.png'
import neomusic5 from './projectSrc/neomusic/5.mp4'

import twenty48_1 from './projectSrc/2048/1.png'
import twenty48_2 from './projectSrc/2048/2.png'
import twenty48_3 from './projectSrc/2048/3.png'
import twenty48_4 from './projectSrc/2048/4.png'

import fwords1 from './projectSrc/fwords/1.png'
import fwords2 from './projectSrc/fwords/2.png'
import fwords3 from './projectSrc/fwords/3.png'
import fwords4 from './projectSrc/fwords/4.png'
import fwords5 from './projectSrc/fwords/5.png'
import fwords6 from './projectSrc/fwords/6.png'

import raytracing1 from './projectSrc/raytracing/1.png'
import raytracing2 from './projectSrc/raytracing/2.png'
import raytracing3 from './projectSrc/raytracing/3.png'
import raytracing4 from './projectSrc/raytracing/4.png'
import raytracing5 from './projectSrc/raytracing/5.png'
import raytracing6 from './projectSrc/raytracing/6.mp4'

import flaskMaster1 from './projectSrc/flaskmaster/1.png'
import flaskMaster2 from './projectSrc/flaskmaster/2.png'
import flaskMaster3 from './projectSrc/flaskmaster/3.png'
import flaskMaster4 from './projectSrc/flaskmaster/4.png'
import flaskMaster5 from './projectSrc/flaskmaster/5.png'
import flaskMaster6 from './projectSrc/flaskmaster/6.png'
import flaskMaster7 from './projectSrc/flaskmaster/7.png'

import makeamap1 from './projectSrc/makeamap/1.png'
import makeamap2 from './projectSrc/makeamap/2.png'
import makeamap3 from './projectSrc/makeamap/3.png'
import makeamap4 from './projectSrc/makeamap/4.mp4'
import makeamap5 from './projectSrc/makeamap/5.png'

const defaultProjects = [
  {
    id: 1,
    title: 'Pokédex',
    language: 'Objective-C',
    techStack: 'UIKit, UserDefaults, URLSession',
    description: 'A pokédex to catalog and learn more about all of the Pokémon users find. This solo project was made to practice mixing Objective-C and Swift, while incorporating something that I have enjoyed for years, Pokémon.',
    images: [pokedex1, pokedex2, pokedex3, pokedex4],
  },
  {
    id: 2,
    title: 'Habit Hacker',
    language: 'Swift',
    techStack: 'UIKit, CoreData, CloudKit, Local Notifications, JTAppleCalendar',
    description: 'Habit Hacker was built by myself and one other developer over the course of one week. It is an app that reminds users to complete tasks with enough repetition to become a habit. Sends daily notifications and uses a calendar and pie chart to track progress.\n\nOn this project, I implemented CloudKit, as well as Local Notifications, the JTAppleCalendar framework, and a custom navigation bar.',
    images: [habithacker1, habithacker2, habithacker3, habithacker4],
  },
  {
    id: 3,
    title: 'Community Calendar',
    language: 'Swift',
    techStack: 'UIKit, GraphQL, Auth0, CoreData, Notification Design Pattern',
    description: 'Worked on a cross-functional, remote team of 12 developers to build an application that connects you with the events happening within a user\'s neighborhood. It possesses an intuitive search and filter feature and the ability to add any event to your calendar or get directions in maps.\n\nOn this project, I worked on the GraphQL implementation, maps, calendar, custom search and filtering, etc.',
    images: [communitycalendar1, communitycalendar2, communitycalendar3, communitycalendar4, communitycalendar5],
  },
  {
    id: 4,
    title: 'Settings Prototype',
    language: 'Swift',
    techStack: 'SwiftUI',
    description: 'Built a static settings app clone to prove understanding of SwiftUI Lists, sections, forms, etc.',
    images: [settings1],
  },
  {
    id: 5,
    title: 'NeoMusic',
    language: 'Swift',
    techStack: 'SwiftUI, MusicKit',
    description: 'A simple, but elegant music player with fun features and a design based in Neomorphism. Music is a passion of mine, so what better way to gain a better understanding of SwiftUI and custom components then making a music player.',
    images: [neomusic1, neomusic2, neomusic3, neomusic4, neomusic5],
  },
  {
    id: 6,
    title: '2048 Clone',
    language: 'Swift',
    techStack: 'SwiftUI',
    description: 'Built a 2048 clone, because I like 2048 as well as building my own versions of things.',
    images: [twenty48_1, twenty48_2, twenty48_3, twenty48_4],
  },
  {
    id: 7,
    title: 'fWords',
    language: 'Swift',
    techStack: 'SwiftUI',
    description: 'Built a Wordle clone, because I like Wordle, and building my own versions of things.',
    images: [fwords1, fwords2, fwords3, fwords4, fwords5, fwords6],
  },
  {
    id: 8,
    title: '2D Ray Tracing',
    language: 'Swift',
    techStack: 'SwiftUI, UIKit',
    description: 'A ray tracer built in both UIKit and SwiftUI.',
    images: [raytracing1, raytracing2, raytracing3, raytracing4, raytracing5, raytracing6],
  },
  {
    id: 9,
    title: 'Flask Master',
    language: 'Swift',
    techStack: 'SwiftUI, StoreKit, UserDefaults',
    description: 'Flask Master is a 2D color sorting game built with accessibility (A11y) in mind. With voiceover, dynamicly colored backgrounds, and multiple difficulties, anyone can become a pro.',
    images: [flaskMaster1, flaskMaster2, flaskMaster3, flaskMaster4, flaskMaster5, flaskMaster6, flaskMaster7],
  },
  {
    id: 10,
    title: 'Make-A-Map',
    language: 'Swift',
    techStack: 'SwiftUI, MapKit, SwiftData',
    description: 'A build-your-own map app where you can mark places of interest, add a path by tapping to connect points, or record a path as you walk a trail using user\'s location.',
    images: [makeamap1, makeamap2, makeamap3, makeamap4, makeamap5],
  }
];

export default function Projects() {
  // TODO: - Pull from firebase store so it's easier to update the site
  const projects = defaultProjects.toReversed();

  return (
    <section className='section projects-section'>
      <h2>Projects</h2>
      <div className='projects-container'>
        {projects.map(project => {
          const descriptionParagraphs = project.description.split('\n').map((section, index) => {
            return { key: index, text: section }
          })
          return (
            <div key={project.id} className='project-card'>
              { project.images &&
                <ImageCarousel images={project.images} />
              }
              <span style={{ color: '#999' }}>{project.language}</span>
              <h3>{project.title}</h3>
              <span style={{ fontSize: '10px'}}>{project.techStack}</span>
              {
                descriptionParagraphs.map(({key, text}) => <p key={key}>{text}</p>)
              }
            </div>
          )
        })}

        <p style={{ color: '#AAAAAA', fontSize: '12px', width: '80%' }}>This is just a taste of the projects I've done. There are many others that I plan to add here soon, others that I need to finish, and others still that I want to make. Check back again to see what I've been working on.</p>
      </div>
    </section>
  )
}