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
      'We partner with global businesses to\u00A0help create digital products ' +
      'that transform perceptions and\u00A0drive business growth.',
  },
  services: {
    h: 'Our Services',
    p: '',
    items: {
      a: {
        n: '01',
        h: '3D Visualization',
        p:
          'We transform complex design and\u00A0architectural data ' +
          'into amazing 3D exterior &\u00A0interior rendering projects. ' +
          'Step away from traditional 2D design and\u00A0showcase ' +
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
          'Whether for\u00A0reaching your audience or for\u00A0making sure ' +
          'your footage looks perfect, visual effects are essential ' +
          'today. We keep ourselves armed with the\u00A0latest tools ' +
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
          'Object &\u00A0Rig Removal',
          'Matte Painting',
        ],
      },
      c: {
        n: '03',
        h: 'Post Production',
        p:
          'We handle every aspect of\u00A0post — from editorial through ' +
          'color grading and\u00A0visual effects, to\u00A0final delivery so you can ' +
          'concentrate on\u00A0creating inspirational content.',
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
          'Great retouching is\u00A0 all about' +
          'understanding the\u00A0right amount of\u00A0refinement which ' +
          'goes into creating realistic look. We follow current trends and\u00A0wield ' +
          'a\u00A0wide array of\u00A0retouching &\u00A0coloring techniques, augmented ' +
          'with 3D imagery and\u00A0an eye for detail to\u00A0make\u00A0it look just right.',
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
          'Whether you are a\u00A0startup looking to\u00A0raise capital and\u00A0scale, an\u00A0' +
          'agency giving an\u00A0important client presentation, or a\u00A0manager ' +
          'looking to\u00A0make your team stand out, we can design a\u00A0' +
          'great-looking pitch deck. Send us your slides and\u00A0we will ' +
          'redesign them to\u00A0give your idea a\u00A0compelling look.',
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
          'If you need a\u00A0new web app, an\u00A0e-commerce, ' +
          'or a\u00A0back-office system, we’ve got you covered. Improve ' +
          'business processes and\u00A0increase profits through strategic ' +
          'software development.',
        subItems: ['Web Applications', 'Websites', 'eCommerce', 'Web Platforms'],
      },
    },
  },
  reel: { h: 'Our Reel' },
  tools: {
    h: 'Our tools',
    p:
      'We cover a\u00A0vast array of\u00A0technologies ' +
      'that help build solutions to\u00A0your business needs.',
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
        subItems: ['React', 'Javascript ES6', 'Node.js', 'Python', 'HTML &\u00A0CSS'],
      },
    },
  },
  projects: {
    h: 'Talent That Delivers',
    p:
      'Accumulated diverse experience. Challenging projects. Continuous learning. ' +
      "This is\u00A0why you'll always get results from our team, on\u00A0time. Start a\u00A0project " +
      'with us to\u00A0see your business grow.',
    p2: 'Check some of\u00A0our projects',
  },
  contact: {
    h: 'Reach out',
    p: 'If you have an\u00A0idea, we have the\u00A0solution! Let’s collaborate',
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
