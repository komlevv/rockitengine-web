import logoCartier from './images/cartier-logo.svg';

import videoWide1 from './videos/cartier-wide-1.mp4';
import videoWide2 from './videos/cartier-wide-2.mp4';

import videoSquare1 from './videos/cartier-square-1.mp4';
import videoSquare2 from './videos/cartier-square-2.mp4';
import videoSquare3 from './videos/cartier-square-3.mp4';
import videoSquare4 from './videos/cartier-square-4.mp4';

import imgMain from './images/cartier-main.jpg';
import imgMainThumb from './images/cartier-main-thumb.jpg';
import imgNext from './images/cartier-next.jpg';
import imgNextThumb from './images/cartier-next-thumb.jpg';

import imgWide1 from './images/cartier-wide-1.jpg';
import imgWide1Thumb from './images/cartier-wide-1-thumb.jpg';
import imgWide2 from './images/cartier-wide-2.jpg';
import imgWide2Thumb from './images/cartier-wide-2-thumb.jpg';

import imgSquare1 from './images/cartier-square-1.jpg';
import imgSquare1Thumb from './images/cartier-square-1-thumb.jpg';
import imgSquare2 from './images/cartier-square-2.jpg';
import imgSquare2Thumb from './images/cartier-square-2-thumb.jpg';
import imgSquare3 from './images/cartier-square-3.jpg';
import imgSquare3Thumb from './images/cartier-square-3-thumb.jpg';
import imgSquare4 from './images/cartier-square-4.jpg';
import imgSquare4Thumb from './images/cartier-square-4-thumb.jpg';

import { ROUTES } from '../../App/ROUTES';
import Span from '../../Span/Span';

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
