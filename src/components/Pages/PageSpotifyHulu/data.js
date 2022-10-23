import { ROUTES, URL_MEDIA } from '../../App/ROUTES';
import Span from '../../Span/Span';

const logoSpotifyHuluH = `${URL_MEDIA}/spotify-hulu-cannes-logo-h.svg`;
const logoSpotifyHuluV = `${URL_MEDIA}/spotify-hulu-cannes-logo-v.svg`;
const imgMain = `${URL_MEDIA}/spotify-hulu-cannes-main.jpg`;
const imgNext = `${URL_MEDIA}/spotify-hulu-cannes-next.jpg`;

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
    img: {
      wide: {
        i1: {
          src: `${URL_MEDIA}/spotify-hulu-cannes-wide-1.jpg`,
          thumbnail: `${URL_MEDIA}/spotify-hulu-cannes-wide-1-thumb.jpg`,
          width: 1280,
          height: 720,
        },
        i2: {
          src: `${URL_MEDIA}/spotify-hulu-cannes-wide-2.jpg`,
          thumbnail: `${URL_MEDIA}/spotify-hulu-cannes-wide-2-thumb.jpg`,
          width: 1280,
          height: 720,
        },
        i3: {
          src: `${URL_MEDIA}/spotify-hulu-cannes-wide-3.jpg`,
          thumbnail: `${URL_MEDIA}/spotify-hulu-cannes-wide-3-thumb.jpg`,
          width: 1280,
          height: 720,
        },
        i4: {
          src: `${URL_MEDIA}/spotify-hulu-cannes-wide-4.jpg`,
          thumbnail: `${URL_MEDIA}/spotify-hulu-cannes-wide-4-thumb.jpg`,
          width: 1280,
          height: 720,
        },
        i5: {
          src: `${URL_MEDIA}/spotify-hulu-cannes-wide-5.jpg`,
          thumbnail: `${URL_MEDIA}/spotify-hulu-cannes-wide-5-thumb.jpg`,
          width: 1280,
          height: 720,
        },
        i6: {
          src: `${URL_MEDIA}/spotify-hulu-cannes-wide-6.jpg`,
          thumbnail: `${URL_MEDIA}/spotify-hulu-cannes-wide-6-thumb.jpg`,
          width: 1280,
          height: 720,
        },
      },
      squareS: {
        i1: {
          src: `${URL_MEDIA}/spotify-hulu-cannes-square-s-1.jpg`,
          thumbnail: `${URL_MEDIA}/spotify-hulu-cannes-square-s-1-thumb.jpg`,
          width: 440,
          height: 440,
        },
        i2: {
          src: `${URL_MEDIA}/spotify-hulu-cannes-square-s-2.jpg`,
          thumbnail: `${URL_MEDIA}/spotify-hulu-cannes-square-s-2-thumb.jpg`,
          width: 440,
          height: 440,
        },
        i3: {
          src: `${URL_MEDIA}/spotify-hulu-cannes-square-s-3.jpg`,
          thumbnail: `${URL_MEDIA}/spotify-hulu-cannes-square-s-3-thumb.jpg`,
          width: 440,
          height: 440,
        },
        i4: {
          src: `${URL_MEDIA}/spotify-hulu-cannes-square-s-4.jpg`,
          thumbnail: `${URL_MEDIA}/spotify-hulu-cannes-square-s-4-thumb.jpg`,
          width: 440,
          height: 440,
        },
        i5: {
          src: `${URL_MEDIA}/spotify-hulu-cannes-square-s-5.jpg`,
          thumbnail: `${URL_MEDIA}/spotify-hulu-cannes-square-s-5-thumb.jpg`,
          width: 440,
          height: 440,
        },
        i6: {
          src: `${URL_MEDIA}/spotify-hulu-cannes-square-s-6.jpg`,
          thumbnail: `${URL_MEDIA}/spotify-hulu-cannes-square-s-6-thumb.jpg`,
          width: 440,
          height: 440,
        },
        i7: {
          src: `${URL_MEDIA}/spotify-hulu-cannes-square-s-7.jpg`,
          thumbnail: `${URL_MEDIA}/spotify-hulu-cannes-square-s-7-thumb.jpg`,
          width: 440,
          height: 440,
        },
        i8: {
          src: `${URL_MEDIA}/spotify-hulu-cannes-square-s-8.jpg`,
          thumbnail: `${URL_MEDIA}/spotify-hulu-cannes-square-s-8-thumb.jpg`,
          width: 440,
          height: 440,
        },
      },
      squareSD: {
        i1: {
          src: `${URL_MEDIA}/spotify-hulu-cannes-square-sd-1.jpg`,
          thumbnail: `${URL_MEDIA}/spotify-hulu-cannes-square-sd-1-thumb.jpg`,
          width: 900,
          height: 440,
        },
        i2: {
          src: `${URL_MEDIA}/spotify-hulu-cannes-square-sd-2.jpg`,
          thumbnail: `${URL_MEDIA}/spotify-hulu-cannes-square-sd-2-thumb.jpg`,
          width: 900,
          height: 440,
        },
      },
      vertical: {
        i1: {
          src: `${URL_MEDIA}/spotify-hulu-cannes-vertical-1.jpg`,
          thumbnail: `${URL_MEDIA}/spotify-hulu-cannes-vertical-1-thumb.jpg`,
          width: 670,
          height: 1000,
        },
        i2: {
          src: `${URL_MEDIA}/spotify-hulu-cannes-vertical-2.jpg`,
          thumbnail: `${URL_MEDIA}/spotify-hulu-cannes-vertical-2-thumb.jpg`,
          width: 670,
          height: 1000,
        },
      },
    },
  },
};
