import { ROUTES, URL_MEDIA } from '../../App/ROUTES';
import Span from '../../Span/Span';

const logoGGVertical = `${URL_MEDIA}/grey-goose-logo-black-v.svg`;

const imgMain = `${URL_MEDIA}/grey-goose-main.jpg`;
const imgMainThumb = `${URL_MEDIA}/grey-goose-main-thumb.jpg`;
const imgNext = `${URL_MEDIA}/grey-goose-next.jpg`;
const imgNextThumb = `${URL_MEDIA}/grey-goose-next-thumb.jpg`;

const imgWide1 = `${URL_MEDIA}/grey-goose-wide-1.jpg`;
const imgWide1Thumb = `${URL_MEDIA}/grey-goose-wide-1-thumb.jpg`;
const imgWide2 = `${URL_MEDIA}/grey-goose-wide-2.jpg`;
const imgWide2Thumb = `${URL_MEDIA}/grey-goose-wide-2-thumb.jpg`;
const imgWide3 = `${URL_MEDIA}/grey-goose-wide-3.jpg`;
const imgWide3Thumb = `${URL_MEDIA}/grey-goose-wide-3-thumb.jpg`;
const imgWide4 = `${URL_MEDIA}/grey-goose-wide-4.jpg`;
const imgWide4Thumb = `${URL_MEDIA}/grey-goose-wide-4-thumb.jpg`;
const imgWide5 = `${URL_MEDIA}/grey-goose-wide-5.jpg`;
const imgWide5Thumb = `${URL_MEDIA}/grey-goose-wide-5-thumb.jpg`;
const imgWide6 = `${URL_MEDIA}/grey-goose-wide-6.jpg`;
const imgWide6Thumb = `${URL_MEDIA}/grey-goose-wide-6-thumb.jpg`;

const imgSquare1 = `${URL_MEDIA}/grey-goose-square-1.jpg`;
const imgSquare1Thumb = `${URL_MEDIA}/grey-goose-square-1-thumb.jpg`;
const imgSquare2 = `${URL_MEDIA}/grey-goose-square-2.jpg`;
const imgSquare2Thumb = `${URL_MEDIA}/grey-goose-square-2-thumb.jpg`;

const imgSquareS1 = `${URL_MEDIA}/grey-goose-square-s-1.jpg`;
const imgSquareS1Thumb = `${URL_MEDIA}/grey-goose-square-s-1-thumb.jpg`;
const imgSquareS2 = `${URL_MEDIA}/grey-goose-square-s-2.jpg`;
const imgSquareS2Thumb = `${URL_MEDIA}/grey-goose-square-s-2-thumb.jpg`;
const imgSquareS3 = `${URL_MEDIA}/grey-goose-square-s-3.jpg`;
const imgSquareS3Thumb = `${URL_MEDIA}/grey-goose-square-s-3-thumb.jpg`;
const imgSquareS4 = `${URL_MEDIA}/grey-goose-square-s-4.jpg`;
const imgSquareS4Thumb = `${URL_MEDIA}/grey-goose-square-s-4-thumb.jpg`;
const imgSquareS5 = `${URL_MEDIA}/grey-goose-square-s-5.jpg`;
const imgSquareS5Thumb = `${URL_MEDIA}/grey-goose-square-s-5-thumb.jpg`;
const imgSquareS6 = `${URL_MEDIA}/grey-goose-square-s-6.jpg`;
const imgSquareS6Thumb = `${URL_MEDIA}/grey-goose-square-s-6-thumb.jpg`;
const imgSquareS7 = `${URL_MEDIA}/grey-goose-square-s-7.jpg`;
const imgSquareS7Thumb = `${URL_MEDIA}/grey-goose-square-s-7-thumb.jpg`;
const imgSquareS8 = `${URL_MEDIA}/grey-goose-square-s-8.jpg`;
const imgSquareS8Thumb = `${URL_MEDIA}/grey-goose-square-s-8-thumb.jpg`;
const imgSquareS9 = `${URL_MEDIA}/grey-goose-square-s-9.jpg`;
const imgSquareS9Thumb = `${URL_MEDIA}/grey-goose-square-s-9-thumb.jpg`;
const imgSquareS10 = `${URL_MEDIA}/grey-goose-square-s-10.jpg`;
const imgSquareS10Thumb = `${URL_MEDIA}/grey-goose-square-s-10-thumb.jpg`;
const imgSquareS11 = `${URL_MEDIA}/grey-goose-square-s-11.jpg`;
const imgSquareS11Thumb = `${URL_MEDIA}/grey-goose-square-s-11-thumb.jpg`;
const imgSquareS12 = `${URL_MEDIA}/grey-goose-square-s-12.jpg`;
const imgSquareS12Thumb = `${URL_MEDIA}/grey-goose-square-s-12-thumb.jpg`;

const imgVertical1 = `${URL_MEDIA}/grey-goose-vertical-1.jpg`;
const imgVertical1Thumb = `${URL_MEDIA}/grey-goose-vertical-1-thumb.jpg`;
const imgVertical2 = `${URL_MEDIA}/grey-goose-vertical-2.jpg`;
const imgVertical2Thumb = `${URL_MEDIA}/grey-goose-vertical-2-thumb.jpg`;
const imgVertical3 = `${URL_MEDIA}/grey-goose-vertical-3.jpg`;
const imgVertical3Thumb = `${URL_MEDIA}/grey-goose-vertical-3-thumb.jpg`;
const imgVertical4 = `${URL_MEDIA}/grey-goose-vertical-4.jpg`;
const imgVertical4Thumb = `${URL_MEDIA}/grey-goose-vertical-4-thumb.jpg`;

export const data = {
  main: {
    logo: logoGGVertical,
    h: (
      <>
        Find Your <Span>Favorite</Span>
      </>
    ),
    p: 'Experience every corner of the world just the way you like it.',
    items: [
      {
        h: 'Industry',
        p: 'Beverages',
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
      "For the launch of their 'Live Victoriously' campaign, Grey Goose challenged us to develop and visualize an experiential " +
      'toolkit to celebrate big and small moments.  The direction of this creative work marks a further evolution of Grey Goose’s ' +
      'brand world, opting for a more self-aware and sensory-oriented approach to the premium spirit’s brand communications.',
    items: {
      a: {
        n: '01',
        h: 'What we did',
        p: '',
        subItems: ['Bar Design', '3d Visualiation', 'Merchandise Design', 'Creative Direction'],
      },
      b: {
        n: '02',
        h: 'Tech Stack',
        p: '',
        subItems: [
          'Autotesk 3ds Max',
          'Autodesk Maya',
          'Adobe Photoshop',
          'Maxon Redshift',
          'Foundry Nuke',
          'SketchUp',
          'Pixologic ZBrush',
          'Substance Painter',
        ],
      },
    },
  },
  other: {
    a: {
      h: 'Approach',
      p:
        'Whether it’s a promotion, an anniversary or a vacation, we’re always saving our celebrations for a big event — ' +
        'but what if you were the special occasion? And what if you decided to celebrate you today? Grey Goose, like us, ' +
        "believes in living Victoriously – treating yourself in both the big and the small moments in life.  Don't wait for a special " +
        'occasion – you are the celebration. ',
    },
    b: {
      h: 'The Toolkit',
      p:
        "Following Grey Goose 'Live Victoriously' campaign guidelines RockitLab developed a toolkit to help Grey Goose " +
        'customers celebrate their moments. We designed signature bars for Outdoor and Indoor activations together ' +
        'with a set of furniture and branded accessories.',
    },
    c: {
      h: 'Process',
      p:
        'For every bucket list activity, there’s a celebration with your name on it. The toolkit we created showcases the assets in both ' +
        'clean studio environment and immersed in classic outdoor and indoor settings. Wood, metals and plastic fused together help ' +
        'deliver a refreshed brand image, while preserving the authenticity of Grey Goose.',
    },
    d: {
      h: 'Visual Language',
      p: '',
      items: [
        'Blue Mirrored Surfaces',
        'Engraved “Grey Goose” Pattern',
        'Diverse Greenery',
        'Steel Accents',
        'Lime Wash Wood',
        'Minimalism',
      ],
    },
  },
  next: {
    h: 'Next Project',
    banner: {
      h: 'Find Your Favorite',
      p: 'Experience every corner of the world just the way you like it',
      img: imgNext,
      imgShort: imgNext,
      logo: logoGGVertical,
      fontColor: 'white',
      linkTo: ROUTES.PROJECTS_GOOSE_F,
    },
  },
  media: {
    imgWide: [imgWide1, imgWide2, imgWide3, imgWide4, imgWide5, imgWide6],
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
      imgSquareS9,
      imgSquareS10,
      imgSquareS11,
      imgSquareS12,
    ],
    momentsimgSquareSD: [],
    imgVertical: [imgVertical1, imgVertical2, imgVertical3, imgVertical4],
    video: [],
    thumbs: [
      imgMainThumb,
      imgNextThumb,
      imgWide1Thumb,
      imgWide2Thumb,
      imgWide3Thumb,
      imgWide4Thumb,
      imgWide5Thumb,
      imgWide6Thumb,
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
      imgSquareS9Thumb,
      imgSquareS10Thumb,
      imgSquareS11Thumb,
      imgSquareS12Thumb,
      imgVertical1Thumb,
      imgVertical2Thumb,
      imgVertical3Thumb,
      imgVertical4Thumb,
    ],
  },
};
