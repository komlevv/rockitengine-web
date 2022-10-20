import { ROUTES, URL_MEDIA } from '../../App/ROUTES';
import Span from '../../Span/Span';

const logoCartier = `${URL_MEDIA}/cartier-logo.svg`;

const videoWide1 = `${URL_MEDIA}/cartier-wide-1.mp4`;
const videoWide2 = `${URL_MEDIA}/cartier-wide-2.mp4`;

const videoSquare1 = `${URL_MEDIA}/cartier-square-1.mp4`;
const videoSquare2 = `${URL_MEDIA}/cartier-square-2.mp4`;
const videoSquare3 = `${URL_MEDIA}/cartier-square-3.mp4`;
const videoSquare4 = `${URL_MEDIA}/cartier-square-4.mp4`;

const imgMain = `${URL_MEDIA}/cartier-main.jpg`;
const imgMainThumb = `${URL_MEDIA}/cartier-main-thumb.jpg`;
const imgNext = `${URL_MEDIA}/cartier-next.jpg`;
const imgNextThumb = `${URL_MEDIA}/cartier-next-thumb.jpg`;

const imgWide1 = `${URL_MEDIA}/cartier-wide-1.jpg`;
const imgWide1Thumb = `${URL_MEDIA}/cartier-wide-1-thumb.jpg`;
const imgWide2 = `${URL_MEDIA}/cartier-wide-2.jpg`;
const imgWide2Thumb = `${URL_MEDIA}/cartier-wide-2-thumb.jpg`;

const imgSquare1 = `${URL_MEDIA}/cartier-square-1.jpg`;
const imgSquare1Thumb = `${URL_MEDIA}/cartier-square-1-thumb.jpg`;
const imgSquare2 = `${URL_MEDIA}/cartier-square-2.jpg`;
const imgSquare2Thumb = `${URL_MEDIA}/cartier-square-2-thumb.jpg`;
const imgSquare3 = `${URL_MEDIA}/cartier-square-3.jpg`;
const imgSquare3Thumb = `${URL_MEDIA}/cartier-square-3-thumb.jpg`;
const imgSquare4 = `${URL_MEDIA}/cartier-square-4.jpg`;
const imgSquare4Thumb = `${URL_MEDIA}/cartier-square-4-thumb.jpg`;

export const data = {
  main: {
    logo: logoCartier,
    h: (
      <>
        Clash de <Span>Cartier</Span>
      </>
    ),
    p: 'More powerful and confident than ever before, serious spirit with original charm.',
    items: [
      {
        h: 'Industry',
        p: 'Jewelry',
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
      'Clash de Cartier, jewelry that simultaneously champions and eschews classic forms, that balances clean design with an excess ' +
      'of energy, and a serious spirit with original charm. Our partner produced a video starring one of the collection’s pieces ' +
      'and called on us to handle retouching & color of the edit.',
    items: {
      a: {
        n: '01',
        h: 'What we did',
        p: '',
        subItems: ['Nail Retouch', 'Skin Retouch', 'Product Retouch', 'Color Correction'],
      },
      b: {
        n: '02',
        h: 'Tech Stack',
        p: '',
        subItems: ['Foundry Nuke', 'Mocha Pro', 'Adobe Photoshop', 'DaVinci Resolve'],
      },
    },
  },
  other: {
    a: {
      h: 'Independent, Elegant, and Instantly Recognizable',
      p:
        'We made skin-tones smooth, removed excessive wrinkles and blemishes, repaired ' +
        'skin texture where was necessary, and made sure nail polish was perfect in texture and in color.' +
        'The edit was color graded to reflect Cartier confident and powerful vibe.',
    },
    b: {
      h: 'Impact',
      p:
        'Clash De Cartier is a house icon. A collection that deeply explores intricacies in geometry, ' +
        'dualities, fine jewellery mechanics and most importantly, imbuing a clash of attitudes. ' +
        'RockitEngine helped Cartier realise their vision of visual rhythm, aesthetic charm ' +
        'and intensive elegance.',
    },
  },
  next: {
    h: 'Next Project',
    banner: {
      h: 'Clash de Cartier',
      p: 'An aesthetic code, a balancing act, a daring embodiment of dualities.',
      img: imgNext,
      imgShort: imgNext,
      logo: logoCartier,
      fontColor: 'white',
      linkTo: ROUTES.PROJECTS_CARTIER_CLASH,
    },
  },
  media: {
    imgWide: [imgWide1, imgWide2],
    imgSquare: [imgSquare1, imgSquare2, imgSquare3, imgSquare4],
    imgSquareS: [],
    imgSquareSD: [],
    imgVertical: [],
    video: [videoWide1, videoWide2],
    videoVertical: [],
    videoSquare: [videoSquare1, videoSquare2, videoSquare3, videoSquare4],
    thumbs: [
      imgMainThumb,
      imgNextThumb,
      imgWide1Thumb,
      imgWide2Thumb,
      imgSquare1Thumb,
      imgSquare2Thumb,
      imgSquare3Thumb,
      imgSquare4Thumb,
    ],
  },
};
