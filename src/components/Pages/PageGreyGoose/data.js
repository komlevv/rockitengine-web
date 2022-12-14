import { ROUTES, URL_MEDIA } from '../../App/ROUTES';
import Span from '../../Span/Span';

const logoGGVertical = `${URL_MEDIA}/grey-goose-logo-black-v.svg`;
const logoGGHorizontal = `${URL_MEDIA}/grey-goose-logo-black-h.svg`;

export const data = {
  main: {
    logo: logoGGVertical,
    h: (
      <>
        Find Your <Span>Favorite</Span>
      </>
    ),
    p: 'Experience every corner of\u00A0the\u00A0world just the\u00A0way you like it.',
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
    img: {
      src: `${URL_MEDIA}/grey-goose-main.jpg`,
      thumbnail: `${URL_MEDIA}/grey-goose-main-thumb.jpg`,
      width: 1360,
      height: 460,
    },
  },
  overview: {
    h: 'Overview',
    p:
      "For the\u00A0launch of\u00A0their 'Live Victoriously' campaign, Grey Goose challenged us to\u00A0develop and\u00A0visualize an\u00A0experiential " +
      'toolkit to\u00A0celebrate big and\u00A0small moments.  The\u00A0direction of\u00A0this creative work marks a\u00A0further evolution of\u00A0Grey Goose’s ' +
      'brand world, opting for\u00A0a\u00A0more self-aware and\u00A0sensory-oriented approach to\u00A0the\u00A0premium spirit’s brand communications.',
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
        'Grey Goose, like us, believes in\u00A0living Victoriously — treating yourself in\u00A0both ' +
        "the\u00A0big and\u00A0the\u00A0small moments in\u00A0life. Don't wait for\u00A0a\u00A0special " +
        'occasion — you are the\u00A0celebration. We designed and visualized an outdoor space ' +
        'to activate Grey Goose brand in.',
    },
    b: {
      h: 'The Toolkit',
      p:
        "Following Grey Goose 'Live Victoriously' campaign guidelines we developed a\u00A0toolkit to\u00A0help Grey Goose " +
        'connoisseurs celebrate their best moments. We 3d modeled signature bars for\u00A0Outdoor and\u00A0Indoor events together ' +
        'with a\u00A0set of\u00A0furniture and\u00A0branded accessories.',
    },
    c: {
      h: 'Process',
      p:
        'The\u00A0toolkit we created showcases the\u00A0assets in\u00A0both ' +
        'clean studio environment and\u00A0immersed in\u00A0classic outdoor and\u00A0indoor settings. Wood, metals and\u00A0plastic fused together help ' +
        'deliver a\u00A0refreshed brand image, while preserving the\u00A0authenticity of\u00A0Grey Goose.',
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
      p:
        'Experience every corner of\u00A0the\u00A0world with\u00A0the\u00A0launch of\u00A0Grey ' +
        'Goose "Live Victoriously" campaign',
      img: {
        src: `${URL_MEDIA}/grey-goose-next.jpg`,
        thumbnail: `${URL_MEDIA}/grey-goose-next-thumb.jpg`,
        width: 1360,
        height: 460,
      },
      logo: logoGGHorizontal,
      fontColor: 'white',
      linkTo: ROUTES.PROJECTS_GOOSE_F,
    },
  },
  media: {
    img: {
      wide: {
        i1: {
          src: `${URL_MEDIA}/grey-goose-wide-1.jpg`,
          thumbnail: `${URL_MEDIA}/grey-goose-wide-1-thumb.jpg`,
          width: 1360,
          height: 770,
        },
        i2: {
          src: `${URL_MEDIA}/grey-goose-wide-2.jpg`,
          thumbnail: `${URL_MEDIA}/grey-goose-wide-2-thumb.jpg`,
          width: 1360,
          height: 1490,
        },
        i3: {
          src: `${URL_MEDIA}/grey-goose-wide-3.jpg`,
          thumbnail: `${URL_MEDIA}/grey-goose-wide-3-thumb.jpg`,
          width: 670,
          height: 860,
        },
        i4: {
          src: `${URL_MEDIA}/grey-goose-wide-4.jpg`,
          thumbnail: `${URL_MEDIA}/grey-goose-wide-4-thumb.jpg`,
          width: 1360,
          height: 770,
        },
        i5: {
          src: `${URL_MEDIA}/grey-goose-wide-5.jpg`,
          thumbnail: `${URL_MEDIA}/grey-goose-wide-5-thumb.jpg`,
          width: 1360,
          height: 770,
        },
        i6: {
          src: `${URL_MEDIA}/grey-goose-wide-6.jpg`,
          thumbnail: `${URL_MEDIA}/grey-goose-wide-6-thumb.jpg`,
          width: 1360,
          height: 770,
        },
      },
      square: {
        i1: {
          src: `${URL_MEDIA}/grey-goose-square-1.jpg`,
          thumbnail: `${URL_MEDIA}/grey-goose-square-1-thumb.jpg`,
          width: 670,
          height: 670,
        },
        i2: {
          src: `${URL_MEDIA}/grey-goose-square-2.jpg`,
          thumbnail: `${URL_MEDIA}/grey-goose-square-2-thumb.jpg`,
          width: 670,
          height: 670,
        },
      },
      squareS: {
        i1: {
          src: `${URL_MEDIA}/grey-goose-square-s-1.jpg`,
          thumbnail: `${URL_MEDIA}/grey-goose-square-s-1-thumb.jpg`,
          width: 440,
          height: 440,
        },
        i2: {
          src: `${URL_MEDIA}/grey-goose-square-s-2.jpg`,
          thumbnail: `${URL_MEDIA}/grey-goose-square-s-2-thumb.jpg`,
          width: 440,
          height: 440,
        },
        i3: {
          src: `${URL_MEDIA}/grey-goose-square-s-3.jpg`,
          thumbnail: `${URL_MEDIA}/grey-goose-square-s-3-thumb.jpg`,
          width: 440,
          height: 440,
        },
        i4: {
          src: `${URL_MEDIA}/grey-goose-square-s-4.jpg`,
          thumbnail: `${URL_MEDIA}/grey-goose-square-s-4-thumb.jpg`,
          width: 440,
          height: 440,
        },
        i5: {
          src: `${URL_MEDIA}/grey-goose-square-s-5.jpg`,
          thumbnail: `${URL_MEDIA}/grey-goose-square-s-5-thumb.jpg`,
          width: 440,
          height: 440,
        },
        i6: {
          src: `${URL_MEDIA}/grey-goose-square-s-6.jpg`,
          thumbnail: `${URL_MEDIA}/grey-goose-square-s-6-thumb.jpg`,
          width: 440,
          height: 440,
        },
        i7: {
          src: `${URL_MEDIA}/grey-goose-square-s-7.jpg`,
          thumbnail: `${URL_MEDIA}/grey-goose-square-s-7-thumb.jpg`,
          width: 440,
          height: 440,
        },
        i8: {
          src: `${URL_MEDIA}/grey-goose-square-s-8.jpg`,
          thumbnail: `${URL_MEDIA}/grey-goose-square-s-8-thumb.jpg`,
          width: 440,
          height: 440,
        },
        i9: {
          src: `${URL_MEDIA}/grey-goose-square-s-9.jpg`,
          thumbnail: `${URL_MEDIA}/grey-goose-square-s-9-thumb.jpg`,
          width: 440,
          height: 440,
        },
        i10: {
          src: `${URL_MEDIA}/grey-goose-square-s-10.jpg`,
          thumbnail: `${URL_MEDIA}/grey-goose-square-s-10-thumb.jpg`,
          width: 440,
          height: 440,
        },
        i11: {
          src: `${URL_MEDIA}/grey-goose-square-s-11.jpg`,
          thumbnail: `${URL_MEDIA}/grey-goose-square-s-11-thumb.jpg`,
          width: 440,
          height: 440,
        },
        i12: {
          src: `${URL_MEDIA}/grey-goose-square-s-12.jpg`,
          thumbnail: `${URL_MEDIA}/grey-goose-square-s-12-thumb.jpg`,
          width: 440,
          height: 440,
        },
      },
      vertical: {
        i1: {
          src: `${URL_MEDIA}/grey-goose-vertical-1.jpg`,
          thumbnail: `${URL_MEDIA}/grey-goose-vertical-1-thumb.jpg`,
          width: 670,
          height: 1000,
        },
        i2: {
          src: `${URL_MEDIA}/grey-goose-vertical-2.jpg`,
          thumbnail: `${URL_MEDIA}/grey-goose-vertical-2-thumb.jpg`,
          width: 670,
          height: 1000,
        },
        i3: {
          src: `${URL_MEDIA}/grey-goose-vertical-3.jpg`,
          thumbnail: `${URL_MEDIA}/grey-goose-vertical-3-thumb.jpg`,
          width: 670,
          height: 1000,
        },
        i4: {
          src: `${URL_MEDIA}/grey-goose-vertical-4.jpg`,
          thumbnail: `${URL_MEDIA}/grey-goose-vertical-4-thumb.jpg`,
          width: 670,
          height: 1000,
        },
      },
    },
  },
};
