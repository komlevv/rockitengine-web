import logoEquinox from './images/equinox-form-logo.svg';

import videoMain from './images/equinox-form-video.mp4';

import imgMain from './images/equinox-form-main.jpg';
import imgNext from './images/equinox-form-next.jpg';

import imgWide1 from './images/equinox-form-wide-1.jpg';
import imgWide2 from './images/equinox-form-wide-2.jpg';
import imgWide3 from './images/equinox-form-wide-3.jpg';
import imgWide4 from './images/equinox-form-wide-4.jpg';
import imgWide5 from './images/equinox-form-wide-5.jpg';

import imgSquare1 from './images/equinox-form-square-1.jpg';
import imgSquare2 from './images/equinox-form-square-2.jpg';

import imgSquareS1 from './images/equinox-form-square-s-1.jpg';
import imgSquareS2 from './images/equinox-form-square-s-2.jpg';
import imgSquareS3 from './images/equinox-form-square-s-3.jpg';
import imgSquareS4 from './images/equinox-form-square-s-4.jpg';
import imgSquareS5 from './images/equinox-form-square-s-5.jpg';
import imgSquareS6 from './images/equinox-form-square-s-6.jpg';
import imgSquareS7 from './images/equinox-form-square-s-7.jpg';
import imgSquareS8 from './images/equinox-form-square-s-8.jpg';

import imgSquareSD1 from './images/equinox-form-square-sd-1.jpg';
import imgSquareSD2 from './images/equinox-form-square-sd-2.jpg';

import imgVertical1 from './images/equinox-form-vertical-1.jpg';
import imgVertical2 from './images/equinox-form-vertical-2.jpg';
import imgVertical3 from './images/equinox-form-vertical-3.jpg';
import imgVertical4 from './images/equinox-form-vertical-4.jpg';

import { ROUTES } from '../../App/ROUTES';
import Span from '../../Span/Span';

export const data = {
  main: {
    logo: logoEquinox,
    h: (
      <>
        Equinox <Span>Form</Span>
      </>
    ),
    p: 'Promise of substance and style, mirrored surfaces, minimalism and an artful approach.',
    items: [
      {
        h: 'Industry',
        p: 'Fitness',
      },
      {
        h: 'Location',
        p: 'United States',
      },
    ],
    img: imgMain,
  },
  overview: {
    h: 'Overview',
    p:
      'Form is a creative retreat in the visionary eco-city of Arcosanti with three days of ' +
      'music, art, ideas, architecture, nature, wellness & community. RockitLab was approached ' +
      'to help design & visualize an artistic installation that debuted on Form’s desert grounds. ' +
      'Art as a moment to build brand.',
    items: {
      a: {
        n: '01',
        h: 'What we did',
        p: '',
        subItems: [
          'Installation Design',
          '3d Visualiation',
          'Look Development',
          'Creative Direction',
        ],
      },
      b: {
        n: '02',
        h: 'Tech Stack',
        p: '',
        subItems: [
          'Autodesk 3ds Max',
          'Autodesk Maya',
          'Adobe Photoshop',
          'Maxon Redshift',
          'Foundry Nuke',
          'SketchUp',
        ],
      },
    },
  },
  other: {
    a: {
      h: 'Balance of Wellness, Entertainment, & Experience',
      p:
        'Inspired by the human form, the Equinox brand, ' +
        'and the landscape of Arizona’s desert, we looked ' +
        'to create a reflective sanctuary space that could ' +
        'also be used for innovative workout classes, ' +
        'meditations, sound baths, and gatherings.',
    },
    b: {
      h: 'Approach',
      p:
        'Promise of substance and style, mirrored surfaces, minimalism ' +
        'and an artful approach that incorporates the surrounding ' +
        'environment created an arresting space for attendees to get back ' +
        'to peak form.',
    },
    c: {
      h: 'Canvas for Content Creation',
      p: '',
      items: [
        'Smoked Mirrored Surfaces',
        'Black Faux Concrete',
        'Equinox “O” Structural Letter Form',
        'Metallic Accents',
        'Minimal Language',
      ],
    },
    d: {
      h: '',
      p:
        'Taking the form of the Equinox split ‘O’ — we created a space out of the ' +
        'brand language that didn’t feel overbearing. Branded monoliths spread around ' +
        'the main installation adding increase visual weight to the Equinox footprint.',
    },
    e: {
      h: 'Brand Film',
      p:
        'Surrounded by the desert landscape, the installation was also' +
        'leveraged to create a brand film that captured Equinox’s unique aesthetic.',
    },
    f: {
      h: 'Process',
      p:
        'The activation became a ‘best-in-class’ example companywide for how Equinox ' +
        'should create brand activations, blending workout space, wellness retreat, ' +
        'stunning installation, and content studio.',
    },
  },
  next: {
    h: 'Next Project',
    banner: {
      h: 'The Times Expert Traveller',
      p: 'Your daily business challenges and your customers’ needs.',
      img: imgNext,
      imgShort: imgNext,
      logo: logoEquinox,
      fontColor: 'white',
      linkTo: ROUTES.PROJECTS_EQUINOX_F,
    },
  },
  media: {
    imgWide: [imgWide1, imgWide2, imgWide3, imgWide4, imgWide5],
    imgSquare: [imgSquare1, imgSquare2],
    imgSquareS: [
      imgSquareS1,
      imgSquareS2,
      imgSquareS3,
      imgSquareS4,
      imgSquareS5,
      imgSquareS6,
      imgSquareS7,
      imgSquareS8,
    ],
    imgSquareSD: [imgSquareSD1, imgSquareSD2],
    imgVertical: [imgVertical1, imgVertical2, imgVertical3, imgVertical4],
    video: [videoMain],
  },
};
