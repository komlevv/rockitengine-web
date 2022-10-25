import { ROUTES, URL_MEDIA } from '../../App/ROUTES';
import Span from '../../Span/Span';

const logoJM = `${URL_MEDIA}/jm-upgrade-logo.svg`;

export const data = {
  main: {
    logo: logoJM,
    h: (
      <>
        Jessie Murph <Span>“Upgrade”</Span>
      </>
    ),
    p: 'An authentic performance completed with a\u00A0fierce lyrical structure.',
    items: [
      {
        h: 'Industry',
        p: 'Music',
      },
      {
        h: 'Location',
        p: 'United States',
      },
    ],
    img: {
      src: `${URL_MEDIA}/jm-upgrade-main.jpg`,
      thumbnail: `${URL_MEDIA}/jm-upgrade-main-thumb.jpg`,
      width: 1360,
      height: 460,
    },
  },
  overview: {
    h: 'Overview',
    p:
      'Our partners directed “Upgrade” — a\u00A0debut music video by\u00A0an aspiring alternative-pop ' +
      'artist Jessie Murph. We were called upon to\u00A0handle a\u00A0variety of\u00A0post-production tasks, ' +
      'as\u00A0well as\u00A0to\u00A0enhance live action with the\u00A0VFX of\u00A0snow flurry.',
    items: {
      a: {
        n: '01',
        h: 'What we did',
        p: '',
        subItems: [
          '3d Camera Tracking',
          'Matchmoving',
          'Snow Simulation',
          'Compositing',
          'Color Correction',
          'Cleanup',
        ],
      },
      b: {
        n: '02',
        h: 'Tech Stack',
        p: '',
        subItems: [
          'Autodesk Maya',
          'Maxon Redshift',
          'Adobe Premiere',
          'Foundry Nuke',
          'Adobe Photoshop',
          'Pixel Farm PFTrack',
        ],
      },
    },
  },
  other: {
    a: {
      h: 'Process',
      p:
        'The live action footage we received incorporated several independent shots fused together to\u00A0look like one seamless clip. ' +
        'To simulate the\u00A0snow effect, we were to\u00A0recreate the\u00A0scene in\u00A03d from scratch. Each shot was to\u00A0be 3d tracked, matching real ' +
        'life lens to\u00A03-dimensional one. We then rebuilt the\u00A0venue in\u00A03d space, where we could run the\u00A0simulations for\u00A0the\u00A0snow ' +
        'flurry, which we would later render out and\u00A0compose into the\u00A0sequence. While we were busy with the\u00A03d side of\u00A0things, ' +
        'the\u00A0other part of\u00A0our team focused on\u00A0cleaning\u00A0up the\u00A0footage artifacts, such as\u00A0tracking markers, exit signs and\u00A0light leaks, ' +
        'creating rotoscoping masks to\u00A0simplify the\u00A0compositing step later on.',
    },
    b: {
      h: 'Matchmoving',
      p:
        'Since live action footage was not a\u00A0truly continuous sequence, varying in\u00A0focal distance and\u00A0position within the\u00A0venue, ' +
        'each camera had to\u00A0be tracked separately. Missing parts of\u00A0the\u00A0track were either animated by\u00A0hand or interpolated. ' +
        'The cameras were later stitched together to\u00A0optimize the\u00A0simulation workflow.',
    },
    c: {
      h: 'Cleanup Tasks',
      p: '',
      items: ['Exit Sign Removal', 'Tracking Markers Removal', 'Light Leaks Removal'],
    },
    d: {
      h: 'Simulating Flurry',
      p: 'Autodesk Maya was used to\u00A0reconstuct the\u00A0scene in\u00A03d and\u00A0simulate the\u00A0effect of\u00A0snow flurry.',
    },
    e: {
      h: 'Look Development',
      p:
        'Our client was open to\u00A0experiment with the\u00A0look, so we generated a\u00A0number of\u00A0options for\u00A0the\u00A0snow motion and' +
        'for the\u00A0snowflake design itself. the\u00A0approved effect we arrived at\u00A0was composited into the\u00A0sequence, enhancing' +
        'the\u00A0emotional immersion of\u00A0the\u00A0video.',
    },
    f: {
      h: 'Impact',
      p:
        'The final clip premiered on\u00A0YouTube with 3.000.000+ views ' +
        'marking a\u00A0successful video debut for\u00A0the\u00A0aspiring artist.',
    },
  },
  next: {
    h: 'Next Project',
    banner: {
      h: 'Jessie Murph “Upgrade”',
      p: 'An authentic performance completed with a\u00A0fierce lyrical structure',
      img: {
        src: `${URL_MEDIA}/jm-upgrade-next.jpg`,
        thumbnail: `${URL_MEDIA}/jm-upgrade-next-thumb.jpg`,
        width: 1360,
        height: 460,
      },
      logo: logoJM,
      fontColor: 'white',
      linkTo: ROUTES.PROJECTS_JM_UPGRADE,
    },
  },
  media: {
    img: {
      wide: {
        i6: {
          src: `${URL_MEDIA}/jm-upgrade-wide-6.jpg`,
          thumbnail: `${URL_MEDIA}/jm-upgrade-wide-6-thumb.jpg`,
          width: 1360,
          height: 770,
        },
      },
      square: {
        i1: {
          src: `${URL_MEDIA}/jm-upgrade-square-1.jpg`,
          thumbnail: `${URL_MEDIA}/jm-upgrade-square-1-thumb.jpg`,
          width: 670,
          height: 670,
        },
        i2: {
          src: `${URL_MEDIA}/jm-upgrade-square-2.jpg`,
          thumbnail: `${URL_MEDIA}/jm-upgrade-square-2-thumb.jpg`,
          width: 670,
          height: 670,
        },
        i3: {
          src: `${URL_MEDIA}/jm-upgrade-square-3.jpg`,
          thumbnail: `${URL_MEDIA}/jm-upgrade-square-3-thumb.jpg`,
          width: 670,
          height: 670,
        },
        i4: {
          src: `${URL_MEDIA}/jm-upgrade-square-4.jpg`,
          thumbnail: `${URL_MEDIA}/jm-upgrade-square-4-thumb.jpg`,
          width: 670,
          height: 670,
        },
        i5: {
          src: `${URL_MEDIA}/jm-upgrade-square-5.jpg`,
          thumbnail: `${URL_MEDIA}/jm-upgrade-square-5-thumb.jpg`,
          width: 670,
          height: 670,
        },
        i6: {
          src: `${URL_MEDIA}/jm-upgrade-square-6.jpg`,
          thumbnail: `${URL_MEDIA}/jm-upgrade-square-6-thumb.jpg`,
          width: 670,
          height: 670,
        },
      },
      squareS: {
        i1: {
          src: `${URL_MEDIA}/jm-upgrade-square-s-1.jpg`,
          thumbnail: `${URL_MEDIA}/jm-upgrade-square-s-1-thumb.jpg`,
          width: 440,
          height: 440,
        },
        i2: {
          src: `${URL_MEDIA}/jm-upgrade-square-s-2.jpg`,
          thumbnail: `${URL_MEDIA}/jm-upgrade-square-s-2-thumb.jpg`,
          width: 440,
          height: 440,
        },
        i3: {
          src: `${URL_MEDIA}/jm-upgrade-square-s-3.jpg`,
          thumbnail: `${URL_MEDIA}/jm-upgrade-square-s-3-thumb.jpg`,
          width: 440,
          height: 440,
        },
        i4: {
          src: `${URL_MEDIA}/jm-upgrade-square-s-4.jpg`,
          thumbnail: `${URL_MEDIA}/jm-upgrade-square-s-4-thumb.jpg`,
          width: 440,
          height: 440,
        },
        i5: {
          src: `${URL_MEDIA}/jm-upgrade-square-s-5.jpg`,
          thumbnail: `${URL_MEDIA}/jm-upgrade-square-s-5-thumb.jpg`,
          width: 440,
          height: 440,
        },
        i6: {
          src: `${URL_MEDIA}/jm-upgrade-square-s-6.jpg`,
          thumbnail: `${URL_MEDIA}/jm-upgrade-square-s-6-thumb.jpg`,
          width: 440,
          height: 440,
        },
      },
      vertical: {
        i1: {
          src: `${URL_MEDIA}/jm-upgrade-vertical-1.jpg`,
          thumbnail: `${URL_MEDIA}/jm-upgrade-vertical-1-thumb.jpg`,
          width: 670,
          height: 800,
        },
      },
    },
    video: {
      wide: {
        i1: {
          src: `${URL_MEDIA}/jm-upgrade-wide-1.mp4`,
          width: 1920,
          height: 1080,
          poster: `${URL_MEDIA}/jm-upgrade-wide-1.jpg`,
          posterThumbnail: `${URL_MEDIA}/jm-upgrade-wide-1-thumb.jpg`,
          posterWidth: 1280,
          posterHeight: 720,
        },
        i2: {
          src: `${URL_MEDIA}/jm-upgrade-wide-2.mp4`,
          width: 1920,
          height: 1080,
          poster: `${URL_MEDIA}/jm-upgrade-wide-2.jpg`,
          posterThumbnail: `${URL_MEDIA}/jm-upgrade-wide-2-thumb.jpg`,
          posterWidth: 1280,
          posterHeight: 720,
        },
        i3: {
          src: `${URL_MEDIA}/jm-upgrade-wide-3.mp4`,
          width: 1920,
          height: 1080,
          poster: `${URL_MEDIA}/jm-upgrade-wide-3.jpg`,
          posterThumbnail: `${URL_MEDIA}/jm-upgrade-wide-3-thumb.jpg`,
          posterWidth: 1280,
          posterHeight: 720,
        },
        i4: {
          src: `${URL_MEDIA}/jm-upgrade-wide-4.mp4`,
          width: 1920,
          height: 1080,
          poster: `${URL_MEDIA}/jm-upgrade-wide-4.jpg`,
          posterThumbnail: `${URL_MEDIA}/jm-upgrade-wide-4-thumb.jpg`,
          posterWidth: 1280,
          posterHeight: 720,
        },
        i5: {
          src: `${URL_MEDIA}/jm-upgrade-wide-5.mp4`,
          width: 1920,
          height: 1080,
          poster: `${URL_MEDIA}/jm-upgrade-wide-5.jpg`,
          posterThumbnail: `${URL_MEDIA}/jm-upgrade-wide-5-thumb.jpg`,
          posterWidth: 1280,
          posterHeight: 720,
        },
      },
    },
  },
};
