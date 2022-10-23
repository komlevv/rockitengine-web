import Span from '../../Span/Span';
import { URL_MEDIA } from '../../App/ROUTES';

export const data = {
  main: {
    h: (
      <>
        What we <Span>do</Span>
      </>
    ),
    p:
      'We partner with global businesses to help create digital products ' +
      'that transform perceptions and drive business growth.',
  },
  services: {
    h: 'Our Services',
    p: '',
    items: {
      a: {
        n: '01',
        h: '3D Visualization',
        p:
          'We transform complex design and architectural data ' +
          'into amazing 3D exterior & interior rendering projects. ' +
          'Step away from traditional 2D design and showcase ' +
          'your ideas so much better. ',
        subItems: [
          'Interior Rendering',
          'Exterior Rendering',
          'Product Visualization',
          'Architectural Visualization',
          'Spatial Design',
          'Product Design',
        ],
      },
      b: {
        n: '02',
        h: 'Visual Effects',
        p:
          'Whether for reaching your audience or for making sure ' +
          'your footage looks perfect, visual effects are essential ' +
          'today. We keep ourselves armed with the latest tools ' +
          'and tech available.',
        subItems: [
          'Compositing',
          'Camera Tracking',
          'Cleanup',
          'Look Development',
          'Set Extension',
          'Matchmove',
          'Rotoscoping',
          'Screen Replacement',
          'Object & Rig Removal',
          'Matte Painting',
        ],
      },
      c: {
        n: '03',
        h: 'Post Production',
        p:
          'We handle every aspect of post— from editorial through ' +
          'color grading and visual effects, to final delivery so you can ' +
          'concentrate on creating inspirational content.',
        subItems: [
          'Color Correction',
          'Editing',
          'Conform',
          'Post Supervision',
          'Motion Design',
          'Deliverables',
        ],
      },
      d: {
        n: '04',
        h: 'Retouching',
        p:
          'Great retouching today is largely a question of taste ' +
          'and understanding the right amount of enhancement that ' +
          'goes into creating realistic look. We follow current trends and wield ' +
          'a wide array of retouching & coloring techniques, augmented ' +
          'with 3D imagery and an eye to make it look right.',
        subItems: [
          'Beauty Retouching',
          'Product Retouching',
          'Skin Retouching',
          'Hair Retouching',
          'Makeup Retouching',
          'Silhouette Correction',
        ],
      },
      e: {
        n: '05',
        h: 'Pitch Deck Design',
        p:
          'Whether you are a startup looking to raise capital and scale, an ' +
          'agency giving an important client presentation, or a manager ' +
          'looking to make your team stand out, we can design a ' +
          'great-looking pitch deck. Send us your slides and we will ' +
          'redesign them to give your idea a compelling look.',
        subItems: [
          'Investor Pitch Deck',
          'Competition Pitch',
          'Team Presentation',
          'Internal Events Deck',
          'Elevator Pitch',
          'Vision Presentation',
        ],
      },
      f: {
        n: '06',
        h: 'Web Development',
        p:
          'If you need a new web app, an e-commerce, ' +
          'or a back-office system, we’ve got you covered. Improve ' +
          'business processes and increase profits through strategic ' +
          'software development.',
        subItems: ['Web Applications', 'Websites', 'eCommerce', 'Web Platforms'],
      },
    },
  },
  reel: { h: 'Our Reel' },
  tools: {
    h: 'Our tools',
    p:
      'We cover a vast array of technologies ' +
      'that help build solutions to your business needs.',
    items: {
      a: {
        h: 'Design',
        subItems: ['Adobe Photoshop', 'Adobe Illustrator', 'Adobe XD', 'Figma'],
      },
      b: {
        h: '3D',
        subItems: [
          'Autodesk Maya',
          'Autodesk 3ds Max',
          'zBrush',
          'Substance Painter',
          'Substance Designer',
          'PFTrack',
        ],
      },
      d: {
        h: 'Render',
        subItems: ['Fstorm Render', 'Redshift Render'],
      },
      e: {
        h: 'Post',
        subItems: [
          'Adobe Premiere',
          'Adobe After Effects',
          'Foundry Nuke',
          'DaVinci Resolve',
          'Mocha Pro',
        ],
      },
      f: {
        h: 'Software',
        subItems: ['React', 'Javascript ES6', 'Node.js', 'Python', 'HTML & CSS'],
      },
    },
  },
  projects: {
    h: 'Talent That Delivers',
    p:
      'Accumulated diverse experience. Challenging projects. Continuous learning. ' +
      "This is why you'll always get results from our team, on time. Start a project " +
      'with us to see your business grow.',
    p2: 'Check some of our projects',
  },
  contact: {
    h: 'Reach out',
    p: 'If you have an idea, we have the solution! Let’s collaborate',
    p2: 'hello@rockitengine.com',
  },
  media: {
    img: {
      wide: {
        i1: {
          src: `${URL_MEDIA}/services-main.jpg`,
          thumbnail: `${URL_MEDIA}/services-main-thumb.jpg`,
          width: 1360,
          height: 460,
        },
      },
    },
    video: {
      wide: {
        i1: {
          src: `${URL_MEDIA}/reel.mp4`,
          width: 1920,
          height: 1080,
          poster: `${URL_MEDIA}/services-reel.jpg`,
          posterThumbnail: `${URL_MEDIA}/services-reel-thumb.jpg`,
          posterWidth: 1280,
          posterHeight: 720,
        },
      },
    },
  },
};
