import { ROUTES, URL_MEDIA } from '../../App/ROUTES';
import Span from '../../Span/Span';

const logoEquinox = `${URL_MEDIA}/equinox-form-logo.svg`;

const videoMain = `${URL_MEDIA}/equinox-form-video.mp4`;

const imgMain = `${URL_MEDIA}/equinox-form-main.jpg`;
const imgMainThumb = `${URL_MEDIA}/equinox-form-main-thumb.jpg`;
const imgNext = `${URL_MEDIA}/equinox-form-next.jpg`;
const imgNextThumb = `${URL_MEDIA}/equinox-form-next-thumb.jpg`;

const imgWide1 = `${URL_MEDIA}/equinox-form-wide-1.jpg`;
const imgWide1Thumb = `${URL_MEDIA}/equinox-form-wide-1-thumb.jpg`;
const imgWide2 = `${URL_MEDIA}/equinox-form-wide-2.jpg`;
const imgWide2Thumb = `${URL_MEDIA}/equinox-form-wide-2-thumb.jpg`;
const imgWide3 = `${URL_MEDIA}/equinox-form-wide-3.jpg`;
const imgWide3Thumb = `${URL_MEDIA}/equinox-form-wide-3-thumb.jpg`;
const imgWide4 = `${URL_MEDIA}/equinox-form-wide-4.jpg`;
const imgWide4Thumb = `${URL_MEDIA}/equinox-form-wide-4-thumb.jpg`;
const imgWide5 = `${URL_MEDIA}/equinox-form-wide-5.jpg`;
const imgWide5Thumb = `${URL_MEDIA}/equinox-form-wide-5-thumb.jpg`;

const imgSquare1 = `${URL_MEDIA}/equinox-form-square-1.jpg`;
const imgSquare1Thumb = `${URL_MEDIA}/equinox-form-square-1-thumb.jpg`;
const imgSquare2 = `${URL_MEDIA}/equinox-form-square-2.jpg`;
const imgSquare2Thumb = `${URL_MEDIA}/equinox-form-square-2-thumb.jpg`;

const imgSquareS1 = `${URL_MEDIA}/equinox-form-square-s-1.jpg`;
const imgSquareS1Thumb = `${URL_MEDIA}/equinox-form-square-s-1-thumb.jpg`;
const imgSquareS2 = `${URL_MEDIA}/equinox-form-square-s-2.jpg`;
const imgSquareS2Thumb = `${URL_MEDIA}/equinox-form-square-s-2-thumb.jpg`;
const imgSquareS3 = `${URL_MEDIA}/equinox-form-square-s-3.jpg`;
const imgSquareS3Thumb = `${URL_MEDIA}/equinox-form-square-s-3-thumb.jpg`;
const imgSquareS4 = `${URL_MEDIA}/equinox-form-square-s-4.jpg`;
const imgSquareS4Thumb = `${URL_MEDIA}/equinox-form-square-s-4-thumb.jpg`;
const imgSquareS5 = `${URL_MEDIA}/equinox-form-square-s-5.jpg`;
const imgSquareS5Thumb = `${URL_MEDIA}/equinox-form-square-s-5-thumb.jpg`;
const imgSquareS6 = `${URL_MEDIA}/equinox-form-square-s-6.jpg`;
const imgSquareS6Thumb = `${URL_MEDIA}/equinox-form-square-s-6-thumb.jpg`;
const imgSquareS7 = `${URL_MEDIA}/equinox-form-square-s-7.jpg`;
const imgSquareS7Thumb = `${URL_MEDIA}/equinox-form-square-s-7-thumb.jpg`;
const imgSquareS8 = `${URL_MEDIA}/equinox-form-square-s-8.jpg`;
const imgSquareS8Thumb = `${URL_MEDIA}/equinox-form-square-s-8-thumb.jpg`;

const imgSquareSD1 = `${URL_MEDIA}/equinox-form-square-sd-1.jpg`;
const imgSquareSD1Thumb = `${URL_MEDIA}/equinox-form-square-sd-1-thumb.jpg`;
const imgSquareSD2 = `${URL_MEDIA}/equinox-form-square-sd-2.jpg`;
const imgSquareSD2Thumb = `${URL_MEDIA}/equinox-form-square-sd-2-thumb.jpg`;

const imgVertical1 = `${URL_MEDIA}/equinox-form-vertical-1.jpg`;
const imgVertical1Thumb = `${URL_MEDIA}/equinox-form-vertical-1-thumb.jpg`;
const imgVertical2 = `${URL_MEDIA}/equinox-form-vertical-2.jpg`;
const imgVertical2Thumb = `${URL_MEDIA}/equinox-form-vertical-2-thumb.jpg`;
const imgVertical3 = `${URL_MEDIA}/equinox-form-vertical-3.jpg`;
const imgVertical3Thumb = `${URL_MEDIA}/equinox-form-vertical-3-thumb.jpg`;
const imgVertical4 = `${URL_MEDIA}/equinox-form-vertical-4.jpg`;
const imgVertical4Thumb = `${URL_MEDIA}/equinox-form-vertical-4-thumb.jpg`;

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
    thumbs: [
      imgMainThumb,
      imgNextThumb,
      imgWide1Thumb,
      imgWide2Thumb,
      imgWide3Thumb,
      imgWide4Thumb,
      imgWide5Thumb,
      imgSquare1Thumb,
      imgSquare2Thumb,
      imgSquareS1Thumb,
      imgSquareS2Thumb,
      imgSquareS3Thumb,
      imgSquareS4Thumb,
      imgSquareS5Thumb,
      imgSquareS6Thumb,
      imgSquareS7Thumb,
      imgSquareS8Thumb,
      imgSquareSD1Thumb,
      imgSquareSD2Thumb,
      imgVertical1Thumb,
      imgVertical2Thumb,
      imgVertical3Thumb,
      imgVertical4Thumb,
    ],
  },
};
