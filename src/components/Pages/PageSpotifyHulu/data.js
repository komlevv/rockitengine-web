import logoSpotifyHuluH from './images/spotify-hulu-cannes-logo-h.svg';
import logoSpotifyHuluV from './images/spotify-hulu-cannes-logo-v.svg';

import imgMain from './images/spotify-hulu-cannes-main.jpg';
import imgMainThumb from './images/spotify-hulu-cannes-main-thumb.jpg';
import imgNext from './images/spotify-hulu-cannes-next.jpg';
import imgNextThumb from './images/spotify-hulu-cannes-next-thumb.jpg';

import imgWide1 from './images/spotify-hulu-cannes-wide-1.jpg';
import imgWide1Thumb from './images/spotify-hulu-cannes-wide-1-thumb.jpg';
import imgWide2 from './images/spotify-hulu-cannes-wide-2.jpg';
import imgWide2Thumb from './images/spotify-hulu-cannes-wide-2-thumb.jpg';
import imgWide3 from './images/spotify-hulu-cannes-wide-3.jpg';
import imgWide3Thumb from './images/spotify-hulu-cannes-wide-3-thumb.jpg';
import imgWide4 from './images/spotify-hulu-cannes-wide-4.jpg';
import imgWide4Thumb from './images/spotify-hulu-cannes-wide-4-thumb.jpg';
import imgWide5 from './images/spotify-hulu-cannes-wide-5.jpg';
import imgWide5Thumb from './images/spotify-hulu-cannes-wide-5-thumb.jpg';
import imgWide6 from './images/spotify-hulu-cannes-wide-6.jpg';
import imgWide6Thumb from './images/spotify-hulu-cannes-wide-6-thumb.jpg';

import imgSquareS1 from './images/spotify-hulu-cannes-square-s-1.jpg';
import imgSquareS1Thumb from './images/spotify-hulu-cannes-square-s-1-thumb.jpg';
import imgSquareS2 from './images/spotify-hulu-cannes-square-s-2.jpg';
import imgSquareS2Thumb from './images/spotify-hulu-cannes-square-s-2-thumb.jpg';
import imgSquareS3 from './images/spotify-hulu-cannes-square-s-3.jpg';
import imgSquareS3Thumb from './images/spotify-hulu-cannes-square-s-3-thumb.jpg';
import imgSquareS4 from './images/spotify-hulu-cannes-square-s-4.jpg';
import imgSquareS4Thumb from './images/spotify-hulu-cannes-square-s-4-thumb.jpg';
import imgSquareS5 from './images/spotify-hulu-cannes-square-s-5.jpg';
import imgSquareS5Thumb from './images/spotify-hulu-cannes-square-s-5-thumb.jpg';
import imgSquareS6 from './images/spotify-hulu-cannes-square-s-6.jpg';
import imgSquareS6Thumb from './images/spotify-hulu-cannes-square-s-6-thumb.jpg';
import imgSquareS7 from './images/spotify-hulu-cannes-square-s-7.jpg';
import imgSquareS7Thumb from './images/spotify-hulu-cannes-square-s-7-thumb.jpg';
import imgSquareS8 from './images/spotify-hulu-cannes-square-s-8.jpg';
import imgSquareS8Thumb from './images/spotify-hulu-cannes-square-s-8-thumb.jpg';

import imgSquareSD1 from './images/spotify-hulu-cannes-square-sd-1.jpg';
import imgSquareSD1Thumb from './images/spotify-hulu-cannes-square-sd-1-thumb.jpg';
import imgSquareSD2 from './images/spotify-hulu-cannes-square-sd-2.jpg';
import imgSquareSD2Thumb from './images/spotify-hulu-cannes-square-sd-2-thumb.jpg';

import imgVertical1 from './images/spotify-hulu-cannes-vertical-1.jpg';
import imgVertical1Thumb from './images/spotify-hulu-cannes-vertical-1-thumb.jpg';
import imgVertical2 from './images/spotify-hulu-cannes-vertical-2.jpg';
import imgVertical2Thumb from './images/spotify-hulu-cannes-vertical-2-thumb.jpg';

import { ROUTES } from '../../App/ROUTES';
import Span from '../../Span/Span';

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
