import logoAway from './images/away-logo.svg';

import videoWide1 from './videos/away-wide-1.mp4';
import videoWide2 from './videos/away-wide-2.mp4';

import videoVertical1 from './videos/away-vertical-1.mp4';
import videoVertical2 from './videos/away-vertical-2.mp4';

import imgMain from './images/away-main.jpg';
import imgMainThumb from './images/away-main-thumb.jpg';
import imgNext from './images/away-next.jpg';
import imgNextThumb from './images/away-next-thumb.jpg';

import imgWide1 from './images/away-wide-1.jpg';
import imgWide1Thumb from './images/away-wide-1-thumb.jpg';
import imgWide2 from './images/away-wide-2.jpg';
import imgWide2Thumb from './images/away-wide-2-thumb.jpg';
import imgWide3 from './images/away-wide-3.jpg';
import imgWide3Thumb from './images/away-wide-3-thumb.jpg';

import imgSquareS1 from './images/away-square-s-1.jpg';
import imgSquareS1Thumb from './images/away-square-s-1-thumb.jpg';
import imgSquareS2 from './images/away-square-s-2.jpg';
import imgSquareS2Thumb from './images/away-square-s-2-thumb.jpg';
import imgSquareS3 from './images/away-square-s-3.jpg';
import imgSquareS3Thumb from './images/away-square-s-3-thumb.jpg';
import imgSquareS4 from './images/away-square-s-4.jpg';
import imgSquareS4Thumb from './images/away-square-s-4-thumb.jpg';

import imgSquareSD1 from './images/away-square-sd-1.jpg';
import imgSquareSD1Thumb from './images/away-square-sd-1-thumb.jpg';

import imgVertical1 from './images/away-vertical-1.jpg';
import imgVertical1Thumb from './images/away-vertical-1-thumb.jpg';
import imgVertical2 from './images/away-vertical-2.jpg';
import imgVertical2Thumb from './images/away-vertical-2-thumb.jpg';
import imgVertical3 from './images/away-vertical-3.jpg';
import imgVertical3Thumb from './images/away-vertical-3-thumb.jpg';
import imgVertical4 from './images/away-vertical-4.jpg';
import imgVertical4Thumb from './images/away-vertical-4-thumb.jpg';
import imgVertical5 from './images/away-vertical-5.jpg';
import imgVertical5Thumb from './images/away-vertical-5-thumb.jpg';
import imgVertical6 from './images/away-vertical-6.jpg';
import imgVertical6Thumb from './images/away-vertical-6-thumb.jpg';
import imgVertical7 from './images/away-vertical-7.jpg';
import imgVertical7Thumb from './images/away-vertical-7-thumb.jpg';
import imgVertical8 from './images/away-vertical-8.jpg';
import imgVertical8Thumb from './images/away-vertical-8-thumb.jpg';

import { ROUTES } from '../../App/ROUTES';
import Span from '../../Span/Span';

export const data = {
  main: {
    logo: logoAway,
    h: (
      <>
        “AKA” <Span>Service</Span>
      </>
    ),
    p: 'Away “AKA” campaign showcasing the newest personalization offerings.',
    items: [
      {
        h: 'Industry',
        p: 'Luggage',
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
      'Away was looking to develop and produce a new campaign to kick off the luggage brand’s “Personalization” service ' +
      'for its line of Carry-Ons and Everywhere Bags. Our partner, responsible for creative and production, approached ' +
      'us with the task to execute retouching and color correction of the campaign.',
    items: {
      a: {
        n: '01',
        h: 'What we did',
        p: '',
        subItems: ['Product Retouch', 'Beauty Retouch', 'Color Correction', 'Rotoscoping'],
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
      h: 'Luggage Built to Transform Modern Travel',
      p:
        'The campaign wanted to convey that personalizing your luggage/travel ' +
        'goods lets you express your travel style in a whole new way by celebrating who ' +
        'you are, where you’ve been, and where you’re headed next.',
    },
    b: {
      h: 'Process',
      p:
        'Sometimes color spills all over the place. We took special care color-correcting every tiny detail of the product to ensure video ' +
        'and photography perfectly matched real life samples. Multiple rotoscoping masks were creted in Mocha Pro and transfered down ' +
        'the pipeline so the team could control each color with fine-grained precision.',
    },
    c: {
      h: 'Impact',
      p:
        'Through imagery and film, the campaign told the story of five main characters who used only three letters to express their ' +
        'personalities and add unique touches to their personal travel uniforms. The resulting images ran across social, OOH, media web, ' +
        'mailers, and in-store print.',
    },
  },
  next: {
    h: 'Next Project',
    banner: {
      h: '“AKA” Service',
      p: 'Away “AKA” campaign to showcasing the newest personalization offerings.',
      img: imgNext,
      imgShort: imgNext,
      logo: logoAway,
      fontColor: 'white',
      linkTo: ROUTES.PROJECTS_AWAY_PS,
    },
  },
  media: {
    imgWide: [imgWide1, imgWide2, imgWide3],
    imgSquare: [],
    imgSquareS: [imgSquareS1, imgSquareS2, imgSquareS3, imgSquareS4],
    imgSquareSD: [imgSquareSD1],
    imgVertical: [
      imgVertical1,
      imgVertical2,
      imgVertical3,
      imgVertical4,
      imgVertical5,
      imgVertical6,
      imgVertical7,
      imgVertical8,
    ],
    video: [videoWide1, videoWide2],
    videoVertical: [videoVertical1, videoVertical2],
    thumbs: [
      imgMainThumb,
      imgNextThumb,
      imgWide1Thumb,
      imgWide2Thumb,
      imgWide3Thumb,
      imgSquareS1Thumb,
      imgSquareS2Thumb,
      imgSquareS3Thumb,
      imgSquareS4Thumb,
      imgSquareSD1Thumb,
      imgVertical1Thumb,
      imgVertical2Thumb,
      imgVertical3Thumb,
      imgVertical4Thumb,
      imgVertical5Thumb,
      imgVertical6Thumb,
      imgVertical7Thumb,
      imgVertical8Thumb,
    ],
  },
};
