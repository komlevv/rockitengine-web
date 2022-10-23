import { ROUTES, URL_MEDIA } from '../../App/ROUTES';
import Span from '../../Span/Span';

const logoGGVertical = `${URL_MEDIA}/grey-goose-logo-black-v.svg`;

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
      img: {
        src: `${URL_MEDIA}/grey-goose-next.jpg`,
        thumbnail: `${URL_MEDIA}/grey-goose-next-thumb.jpg`,
        width: 1360,
        height: 460,
      },
      logo: logoGGVertical,
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
