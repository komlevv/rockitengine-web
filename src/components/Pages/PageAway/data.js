import { ROUTES, URL_MEDIA } from '../../App/ROUTES';
import Span from '../../Span/Span';

const logoAway = `${URL_MEDIA}/away-logo.svg`;
const imgMain = `${URL_MEDIA}/away-main.jpg`;
const imgNext = `${URL_MEDIA}/away-next.jpg`;

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
    img: {
      wide: {
        i3: {
          src: `${URL_MEDIA}/away-wide-3.jpg`,
          thumbnail: `${URL_MEDIA}/away-wide-3-thumb.jpg`,
          width: 1360,
          height: 770,
        },
      },
      squareS: {
        i1: {
          src: `${URL_MEDIA}/away-square-s-1.jpg`,
          thumbnail: `${URL_MEDIA}/away-square-s-1-thumb.jpg`,
          width: 440,
          height: 440,
        },
        i2: {
          src: `${URL_MEDIA}/away-square-s-2.jpg`,
          thumbnail: `${URL_MEDIA}/away-square-s-2-thumb.jpg`,
          width: 440,
          height: 440,
        },
        i3: {
          src: `${URL_MEDIA}/away-square-s-3.jpg`,
          thumbnail: `${URL_MEDIA}/away-square-s-3-thumb.jpg`,
          width: 440,
          height: 440,
        },
        i4: {
          src: `${URL_MEDIA}/away-square-s-4.jpg`,
          thumbnail: `${URL_MEDIA}/away-square-s-4-thumb.jpg`,
          width: 440,
          height: 440,
        },
      },
      squareSD: {
        i1: {
          src: `${URL_MEDIA}/away-square-sd-1.jpg`,
          thumbnail: `${URL_MEDIA}/away-square-sd-1-thumb.jpg`,
          width: 900,
          height: 440,
        },
      },
      vertical: {
        i3: {
          src: `${URL_MEDIA}/away-vertical-3.jpg`,
          thumbnail: `${URL_MEDIA}/away-vertical-3-thumb.jpg`,
          width: 670,
          height: 1000,
        },
        i4: {
          src: `${URL_MEDIA}/away-vertical-4.jpg`,
          thumbnail: `${URL_MEDIA}/away-vertical-4-thumb.jpg`,
          width: 670,
          height: 1000,
        },
        i5: {
          src: `${URL_MEDIA}/away-vertical-5.jpg`,
          thumbnail: `${URL_MEDIA}/away-vertical-5-thumb.jpg`,
          width: 670,
          height: 1000,
        },
        i6: {
          src: `${URL_MEDIA}/away-vertical-6.jpg`,
          thumbnail: `${URL_MEDIA}/away-vertical-6-thumb.jpg`,
          width: 670,
          height: 1000,
        },
        i7: {
          src: `${URL_MEDIA}/away-vertical-7.jpg`,
          thumbnail: `${URL_MEDIA}/away-vertical-7-thumb.jpg`,
          width: 670,
          height: 1000,
        },
        i8: {
          src: `${URL_MEDIA}/away-vertical-8.jpg`,
          thumbnail: `${URL_MEDIA}/away-vertical-8-thumb.jpg`,
          width: 670,
          height: 1000,
        },
      },
    },
    video: {
      wide: {
        i1: {
          src: `${URL_MEDIA}/away-wide-1.mp4`,
          width: 1920,
          height: 1080,
          poster: `${URL_MEDIA}/away-wide-1.jpg`,
          posterThumbnail: `${URL_MEDIA}/away-wide-1-thumb.jpg`,
          posterWidth: 1280,
          posterHeight: 720,
        },
        i2: {
          src: `${URL_MEDIA}/away-wide-2.mp4`,
          width: 1920,
          height: 1080,
          poster: `${URL_MEDIA}/away-wide-2.jpg`,
          posterThumbnail: `${URL_MEDIA}/away-wide-2-thumb.jpg`,
          posterWidth: 1280,
          posterHeight: 720,
        },
      },
      vertical: {
        i1: {
          src: `${URL_MEDIA}/away-vertical-1.mp4`,
          width: 670,
          height: 1000,
          poster: `${URL_MEDIA}/away-vertical-1.jpg`,
          posterThumbnail: `${URL_MEDIA}/away-vertical-1-thumb.jpg`,
          posterWidth: 670,
          posterHeight: 1000,
        },
        i2: {
          src: `${URL_MEDIA}/away-vertical-2.mp4`,
          width: 670,
          height: 1000,
          poster: `${URL_MEDIA}/away-vertical-2.jpg`,
          posterThumbnail: `${URL_MEDIA}/away-vertical-2-thumb.jpg`,
          posterWidth: 670,
          posterHeight: 1000,
        },
      },
    },
  },
};
