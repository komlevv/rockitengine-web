import { ROUTES, URL_MEDIA } from '../../App/ROUTES';
import Span from '../../Span/Span';

const logoSpotifyHuluH = `${URL_MEDIA}/spotify-hulu-cannes-logo-h.svg`;
const logoSpotifyHuluV = `${URL_MEDIA}/spotify-hulu-cannes-logo-v.svg`;

export const data = {
  main: {
    accent: 'red',
    logo: logoSpotifyHuluH,
    h: (
      <>
        Spotify <sup>x</sup> Hulu <Span>Cannes Lions</Span>
      </>
    ),
    p: 'Celebration of\u00A0the\u00A0finest in\u00A0storytelling, culture, and\u00A0entertainment.',
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
    img: {
      src: `${URL_MEDIA}/spotify-hulu-cannes-main.jpg`,
      thumbnail: `${URL_MEDIA}/spotify-hulu-cannes-main-thumb.jpg`,
      width: 1360,
      height: 460,
    },
  },
  overview: {
    h: 'Overview',
    p:
      'RockitEngine helped envision a\u00A0one-of-a-kind experience for\u00A0Spotify and\u00A0Hulu at\u00A0Cannes Lions. With a\u00A0brief to\u00A0inspire guest’s ' +
      'discovery through spatial design, we designed and\u00A0rendered a\u00A0concept which celebrated natural landscape ' +
      "of Cannes and\u00A0the\u00A0chateau's unique architecture.",
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
        'Chateau Saint-Georges is\u00A0a\u00A0private historical property on\u00A0the\u00A0hights ' +
        'of\u00A0Grasse. Its sublime location, commending sea view over the\u00A0valley, made ' +
        'it perfect for\u00A0hosting the\u00A0event. To\u00A0convey the\u00A0mood ' +
        'of\u00A0the\u00A0chateau, we recreated the\u00A0space as\u00A0a\u00A03d ' +
        'environment and\u00A0simulated the\u00A0lighting ' +
        'to perfectly match real life experience.',
    },
    b: {
      h: 'Triumph of\u00A0Creativity',
      p:
        'Thousands have descended upon the\u00A0French Riviera for\u00A0the\u00A0annual Cannes Lions ' +
        'Festival of\u00A0Creativity. Artists, podcasters and influencers all set to\u00A0join each ' +
        'other in\u00A0relevant conversations and\u00A0to\u00A0celebrate all the\u00A0creative potential ' +
        'that streaming has to\u00A0offer. We supplemented the space with branded installations, ' +
        'helping activate Spotify and Hulu brands',
    },
    c: {
      h: 'Visual Tone',
      p: '',
      items: ['White Solid Wood', 'Matte Steel', 'White Metal', 'Off White Fabrics', 'Faux Stone'],
    },
    d: {
      h: 'Impact',
      p:
        'We were glad to partake in the Spotify and Hulu venture. The result of our collaboration was ' +
        'an evening to\u00A0remember, which set a\u00A0pitch-perfect tone for\u00A0a\u00A0week ' +
        'of\u00A0creativity and\u00A0inspiration.',
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
      p: 'Celebration of\u00A0the\u00A0finest in\u00A0storytelling, culture, and\u00A0entertainment',
      img: {
        src: `${URL_MEDIA}/spotify-hulu-cannes-next.jpg`,
        thumbnail: `${URL_MEDIA}/spotify-hulu-cannes-next-thumb.jpg`,
        width: 1360,
        height: 460,
      },
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
