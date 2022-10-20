import { ROUTES, URL_MEDIA } from '../../App/ROUTES';
import Span from '../../Span/Span';

const logoSpotifyHuluH = `${URL_MEDIA}/spotify-hulu-cannes-logo-h.svg`;
const logoSpotifyHuluV = `${URL_MEDIA}/spotify-hulu-cannes-logo-v.svg`;

const imgMain = `${URL_MEDIA}/spotify-hulu-cannes-main.jpg`;
const imgMainThumb = `${URL_MEDIA}/spotify-hulu-cannes-main-thumb.jpg`;
const imgNext = `${URL_MEDIA}/spotify-hulu-cannes-next.jpg`;
const imgNextThumb = `${URL_MEDIA}/spotify-hulu-cannes-next-thumb.jpg`;

const imgWide1 = `${URL_MEDIA}/spotify-hulu-cannes-wide-1.jpg`;
const imgWide1Thumb = `${URL_MEDIA}/spotify-hulu-cannes-wide-1-thumb.jpg`;
const imgWide2 = `${URL_MEDIA}/spotify-hulu-cannes-wide-2.jpg`;
const imgWide2Thumb = `${URL_MEDIA}/spotify-hulu-cannes-wide-2-thumb.jpg`;
const imgWide3 = `${URL_MEDIA}/spotify-hulu-cannes-wide-3.jpg`;
const imgWide3Thumb = `${URL_MEDIA}/spotify-hulu-cannes-wide-3-thumb.jpg`;
const imgWide4 = `${URL_MEDIA}/spotify-hulu-cannes-wide-4.jpg`;
const imgWide4Thumb = `${URL_MEDIA}/spotify-hulu-cannes-wide-4-thumb.jpg`;
const imgWide5 = `${URL_MEDIA}/spotify-hulu-cannes-wide-5.jpg`;
const imgWide5Thumb = `${URL_MEDIA}/spotify-hulu-cannes-wide-5-thumb.jpg`;
const imgWide6 = `${URL_MEDIA}/spotify-hulu-cannes-wide-6.jpg`;
const imgWide6Thumb = `${URL_MEDIA}/spotify-hulu-cannes-wide-6-thumb.jpg`;

const imgSquareS1 = `${URL_MEDIA}/spotify-hulu-cannes-square-s-1.jpg`;
const imgSquareS1Thumb = `${URL_MEDIA}/spotify-hulu-cannes-square-s-1-thumb.jpg`;
const imgSquareS2 = `${URL_MEDIA}/spotify-hulu-cannes-square-s-2.jpg`;
const imgSquareS2Thumb = `${URL_MEDIA}/spotify-hulu-cannes-square-s-2-thumb.jpg`;
const imgSquareS3 = `${URL_MEDIA}/spotify-hulu-cannes-square-s-3.jpg`;
const imgSquareS3Thumb = `${URL_MEDIA}/spotify-hulu-cannes-square-s-3-thumb.jpg`;
const imgSquareS4 = `${URL_MEDIA}/spotify-hulu-cannes-square-s-4.jpg`;
const imgSquareS4Thumb = `${URL_MEDIA}/spotify-hulu-cannes-square-s-4-thumb.jpg`;
const imgSquareS5 = `${URL_MEDIA}/spotify-hulu-cannes-square-s-5.jpg`;
const imgSquareS5Thumb = `${URL_MEDIA}/spotify-hulu-cannes-square-s-5-thumb.jpg`;
const imgSquareS6 = `${URL_MEDIA}/spotify-hulu-cannes-square-s-6.jpg`;
const imgSquareS6Thumb = `${URL_MEDIA}/spotify-hulu-cannes-square-s-6-thumb.jpg`;
const imgSquareS7 = `${URL_MEDIA}/spotify-hulu-cannes-square-s-7.jpg`;
const imgSquareS7Thumb = `${URL_MEDIA}/spotify-hulu-cannes-square-s-7-thumb.jpg`;
const imgSquareS8 = `${URL_MEDIA}/spotify-hulu-cannes-square-s-8.jpg`;
const imgSquareS8Thumb = `${URL_MEDIA}/spotify-hulu-cannes-square-s-8-thumb.jpg`;

const imgSquareSD1 = `${URL_MEDIA}/spotify-hulu-cannes-square-sd-1.jpg`;
const imgSquareSD1Thumb = `${URL_MEDIA}/spotify-hulu-cannes-square-sd-1-thumb.jpg`;
const imgSquareSD2 = `${URL_MEDIA}/spotify-hulu-cannes-square-sd-2.jpg`;
const imgSquareSD2Thumb = `${URL_MEDIA}/spotify-hulu-cannes-square-sd-2-thumb.jpg`;

const imgVertical1 = `${URL_MEDIA}/spotify-hulu-cannes-vertical-1.jpg`;
const imgVertical1Thumb = `${URL_MEDIA}/spotify-hulu-cannes-vertical-1-thumb.jpg`;
const imgVertical2 = `${URL_MEDIA}/spotify-hulu-cannes-vertical-2.jpg`;
const imgVertical2Thumb = `${URL_MEDIA}/spotify-hulu-cannes-vertical-2-thumb.jpg`;

export const data = {
  main: {
    accent: 'red',
    logo: logoSpotifyHuluH,
    h: (
      <>
        Spotify <sup>x</sup> Hulu <Span>Cannes Lions</Span>
      </>
    ),
    p: 'Celebration of the finest in storytelling, culture, and entertainment.',
    items: [
      {
        h: 'Industry',
        p: 'Streaming',
      },
      {
        h: 'Location',
        p: 'France',
      },
    ],
    img: imgMain,
  },
  overview: {
    h: 'Overview',
    p:
      'RockitEngine helped envision a one-of-a-kind experience for Spotify and Hulu at Cannes Lions. With a brief to inspire guest’s ' +
      'discovery through spatial design, we designed and rendered a concept that celebrated the natural landscape ' +
      "of Cannes and the chateau's unique architecture.",
    items: {
      a: {
        n: '01',
        h: 'What we did',
        p: '',
        subItems: ['Spatial Design', '3d Visualiation', 'Look Development', 'Art Direction'],
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
      h: '',
      p:
        'Chateau Saint-Georges is a private historical ' +
        'property on the hights of Grasse, with ' +
        'commending sea view over the valley. ' +
        'Its sublime location and 44 hectares of vines ' +
        'in a single stretch make it perfect for hosting ' +
        'the event. To convey the mood of the chateau, ' +
        'RockitEngine recreated the chateau as a 3d ' +
        'environment and made sure the lighting ' +
        'perfectly matched real life experience.',
    },
    b: {
      h: 'Triumph of Creativity',
      p:
        'Thousands have descended upon the French Riviera for the annual Cannes Lions Festival of Creativity. Artists, podcasters ' +
        'and influencers all set to join each other in relevant conversations and to celebrate all the creative potential that streaming ' +
        'has to offer. Spotify and Hulu did just that, co-hosting a kickoff gathering to toast the best in storytelling, culture, ' +
        'and entertainment.',
    },
    c: {
      h: 'Visual Tone',
      p: '',
      items: ['White Solid Wood', 'Matte Steel', 'White Metal', 'Off White Fabrics', 'Faux Stone'],
    },
    d: {
      h: 'Impact',
      p:
        'An evening to remember which set a pitch-perfect ' +
        'tone for a week of collaboration and inspiration.',
    },
  },
  next: {
    h: 'Next Project',
    banner: {
      h: (
        <>
          Spotify <sup>x</sup> Hulu Cannes Lions
        </>
      ),
      p: 'Celebration of the finest in storytelling, culture, and entertainment.',
      img: imgNext,
      imgShort: imgNext,
      logo: logoSpotifyHuluV,
      fontColor: 'white',
      linkTo: ROUTES.PROJECTS_SPOTIFY_HULU_C,
    },
  },
  media: {
    imgWide: [imgWide1, imgWide2, imgWide3, imgWide4, imgWide5, imgWide6],
    imgSquare: [],
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
    imgVertical: [imgVertical1, imgVertical2],
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
    ],
  },
};
