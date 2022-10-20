import { ROUTES, URL_MEDIA } from '../../App/ROUTES';
import Span from '../../Span/Span';

const logoAway = `${URL_MEDIA}/away-logo.svg`;

const videoWide1 = `${URL_MEDIA}/away-wide-1.mp4`;
const videoWide2 = `${URL_MEDIA}/away-wide-2.mp4`;

const videoVertical1 = `${URL_MEDIA}/away-vertical-1.mp4`;
const videoVertical2 = `${URL_MEDIA}/away-vertical-2.mp4`;

const imgMain = `${URL_MEDIA}/away-main.jpg`;
const imgMainThumb = `${URL_MEDIA}/away-main-thumb.jpg`;
const imgNext = `${URL_MEDIA}/away-next.jpg`;
const imgNextThumb = `${URL_MEDIA}/away-next-thumb.jpg`;

const imgWide1 = `${URL_MEDIA}/away-wide-1.jpg`;
const imgWide1Thumb = `${URL_MEDIA}/away-wide-1-thumb.jpg`;
const imgWide2 = `${URL_MEDIA}/away-wide-2.jpg`;
const imgWide2Thumb = `${URL_MEDIA}/away-wide-2-thumb.jpg`;
const imgWide3 = `${URL_MEDIA}/away-wide-3.jpg`;
const imgWide3Thumb = `${URL_MEDIA}/away-wide-3-thumb.jpg`;

const imgSquareS1 = `${URL_MEDIA}/away-square-s-1.jpg`;
const imgSquareS1Thumb = `${URL_MEDIA}/away-square-s-1-thumb.jpg`;
const imgSquareS2 = `${URL_MEDIA}/away-square-s-2.jpg`;
const imgSquareS2Thumb = `${URL_MEDIA}/away-square-s-2-thumb.jpg`;
const imgSquareS3 = `${URL_MEDIA}/away-square-s-3.jpg`;
const imgSquareS3Thumb = `${URL_MEDIA}/away-square-s-3-thumb.jpg`;
const imgSquareS4 = `${URL_MEDIA}/away-square-s-4.jpg`;
const imgSquareS4Thumb = `${URL_MEDIA}/away-square-s-4-thumb.jpg`;

const imgSquareSD1 = `${URL_MEDIA}/away-square-sd-1.jpg`;
const imgSquareSD1Thumb = `${URL_MEDIA}/away-square-sd-1-thumb.jpg`;

const imgVertical1 = `${URL_MEDIA}/away-vertical-1.jpg`;
const imgVertical1Thumb = `${URL_MEDIA}/away-vertical-1-thumb.jpg`;
const imgVertical2 = `${URL_MEDIA}/away-vertical-2.jpg`;
const imgVertical2Thumb = `${URL_MEDIA}/away-vertical-2-thumb.jpg`;
const imgVertical3 = `${URL_MEDIA}/away-vertical-3.jpg`;
const imgVertical3Thumb = `${URL_MEDIA}/away-vertical-3-thumb.jpg`;
const imgVertical4 = `${URL_MEDIA}/away-vertical-4.jpg`;
const imgVertical4Thumb = `${URL_MEDIA}/away-vertical-4-thumb.jpg`;
const imgVertical5 = `${URL_MEDIA}/away-vertical-5.jpg`;
const imgVertical5Thumb = `${URL_MEDIA}/away-vertical-5-thumb.jpg`;
const imgVertical6 = `${URL_MEDIA}/away-vertical-6.jpg`;
const imgVertical6Thumb = `${URL_MEDIA}/away-vertical-6-thumb.jpg`;
const imgVertical7 = `${URL_MEDIA}/away-vertical-7.jpg`;
const imgVertical7Thumb = `${URL_MEDIA}/away-vertical-7-thumb.jpg`;
const imgVertical8 = `${URL_MEDIA}/away-vertical-8.jpg`;
const imgVertical8Thumb = `${URL_MEDIA}/away-vertical-8-thumb.jpg`;

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
