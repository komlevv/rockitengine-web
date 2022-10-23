import { ROUTES, URL_MEDIA } from '../../App/ROUTES';
import Span from '../../Span/Span';

const logoJM = `${URL_MEDIA}/jm-upgrade-logo.svg`;
const imgMain = `${URL_MEDIA}/jm-upgrade-main.jpg`;
const imgNext = `${URL_MEDIA}/jm-upgrade-next.jpg`;

export const data = {
  main: {
    logo: logoJM,
    h: (
      <>
        Jessie Murph <Span>“Upgrade”</Span>
      </>
    ),
    p: 'An authentic performance completed with a fierce lyrical structure.',
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
    img: imgMain,
  },
  overview: {
    h: 'Overview',
    p:
      'Our partners directed “Upgrade” — a debut music video by an aspiring alternative-pop ' +
      'artist Jessie Murph. We were called upon to handle a variety of post-production tasks, ' +
      'as well as to enhance live action with the VFX of snow flurry.',
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
        'The live action footage we received incorporated several independent shots fused together to look like one seamless clip. ' +
        'To simulate the snow effect, we were to recreate the scene in 3d from scratch. Each shot was to be 3d tracked, matching real ' +
        'life lens to 3-dimensional one. We then rebuilt the venue in 3d space, where we could run the simulations for the snow ' +
        'flurry, which we would later render out and compose into the sequence. While we were busy with the 3d side of things, ' +
        'the other part of our team focused on cleaning up the footage artifacts, such as tracking markers, exit signs and light leaks, ' +
        'creating rotoscoping masks to simplify the compositing step later on.',
    },
    b: {
      h: 'Matchmoving',
      p:
        'Since live action footage was not a truly continuous sequence, varying in focal distance and position within the venue, ' +
        'each camera had to be tracked separately. Missing parts of the track were either animated by hand or interpolated. ' +
        'The cameras were later stitched together to optimize the simulation workflow.',
    },
    c: {
      h: 'Cleanup Tasks',
      p: '',
      items: ['Exit Sign Removal', 'Tracking Markers Removal', 'Light Leaks Removal'],
    },
    d: {
      h: 'Simulating Flurry',
      p: 'Autodesk Maya was used to reconstuct the scene in 3d and simulate the effect of snow flurry.',
    },
    e: {
      h: 'Look Development',
      p:
        'Our client was open to experiment with the look, so we generated a number of options for the snow motion and' +
        'for the snowflake design itself. The approved effect we arrived at was composited into the sequence, enhancing' +
        'the emotional immersion of the video.',
    },
    f: {
      h: 'Impact',
      p:
        'The final clip premiered on YouTube with 3.000.000+ views ' +
        'marking a successful video debut for the aspiring artist.',
    },
  },
  next: {
    h: 'Next Project',
    banner: {
      h: 'Jessie Murph “Upgrade”',
      p: 'An authentic performance completed with a fierce lyrical structure',
      img: imgNext,
      // imgShort: imgNextShort,
      imgShort: imgNext,
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
