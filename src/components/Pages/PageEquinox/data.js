import { ROUTES, URL_MEDIA } from '../../App/ROUTES';
import Span from '../../Span/Span';

const logoEquinox = `${URL_MEDIA}/equinox-form-logo.svg`;

export const data = {
  main: {
    logo: logoEquinox,
    h: (
      <>
        Equinox <Span>Form</Span>
      </>
    ),
    p: 'Promise of\u00A0substance and\u00A0style, mirrored surfaces, minimalism and\u00A0an artful approach.',
    items: [
      {
        h: 'Industry',
        p: 'Fitness',
      },
      {
        h: 'Location',
        p: 'United States',
      },
    ],
    img: {
      src: `${URL_MEDIA}/equinox-form-main.jpg`,
      thumbnail: `${URL_MEDIA}/equinox-form-main-thumb.jpg`,
      width: 1360,
      height: 460,
    },
  },
  overview: {
    h: 'Overview',
    p:
      'Form is\u00A0a\u00A0creative retreat in\u00A0the\u00A0visionary eco-city of\u00A0Arcosanti with three days of\u00A0' +
      'music, art, ideas, architecture, nature, wellness &\u00A0community. RockitEngine was approached ' +
      'to\u00A0help design &\u00A0visualize an\u00A0artistic installation that debuted on\u00A0Form’s desert grounds. ' +
      'Art as\u00A0a\u00A0moment to\u00A0build brand.',
    items: {
      a: {
        n: '01',
        h: 'What we did',
        p: '',
        subItems: [
          'Installation Design',
          '3d Visualiation',
          'Look Development',
          'Creative Direction',
        ],
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
      h: 'Balance of\u00A0Wellness, Entertainment, &\u00A0Experience',
      p:
        'Inspired by\u00A0the\u00A0human form, the\u00A0Equinox brand, ' +
        'and the\u00A0landscape of\u00A0Arizona’s desert, we looked ' +
        'to\u00A0create a\u00A0reflective sanctuary space that could ' +
        'also be used for\u00A0innovative workout classes, ' +
        'meditations, sound baths, and\u00A0gatherings.',
    },
    b: {
      h: 'Approach',
      p:
        'We designed an\u00A0area, where substance and\u00A0style, minimalism ' +
        'and an\u00A0artful approach incorporate the\u00A0surrounding ' +
        'environment, creating an\u00A0arresting space for\u00A0attendees to\u00A0get back ' +
        'to\u00A0peak form.',
    },
    c: {
      h: 'Canvas for\u00A0Content Creation',
      p: '',
      items: [
        'Smoked Mirrored Surfaces',
        'Black Faux Concrete',
        'Equinox “O” Structural Letter Form',
        'Metallic Accents',
        'Minimal Language',
      ],
    },
    d: {
      h: '',
      p:
        'Taking the\u00A0form of\u00A0the\u00A0Equinox split ‘O’ — we created a\u00A0space out of\u00A0the\u00A0' +
        'brand language that didn’t feel overbearing. Branded monoliths spread around ' +
        'the\u00A0main installation adding increase visual weight to\u00A0the\u00A0Equinox footprint.',
    },
    e: {
      h: 'Brand Film',
      p:
        'Surrounded by\u00A0the\u00A0desert landscape, the\u00A0installation was ' +
        'leveraged to\u00A0create a\u00A0brand film that captured Equinox’s unique aesthetic.',
    },
    f: {
      h: 'Process',
      p:
        'The activation became a\u00A0‘best-in-class’ example companywide for\u00A0how Equinox ' +
        'should create brand activations, blending workout space, wellness retreat, ' +
        'stunning installation, and\u00A0content studio.',
    },
  },
  next: {
    h: 'Next Project',
    banner: {
      h: 'The Times Expert Traveller',
      p: 'Promise of\u00A0substance and\u00A0style, minimalism and\u00A0an\u00A0artful approach',
      img: {
        src: `${URL_MEDIA}/equinox-form-next.jpg`,
        thumbnail: `${URL_MEDIA}/equinox-form-next-thumb.jpg`,
        width: 1360,
        height: 460,
      },
      logo: logoEquinox,
      fontColor: 'white',
      linkTo: ROUTES.PROJECTS_EQUINOX_F,
    },
  },
  media: {
    img: {
      wide: {
        i1: {
          src: `${URL_MEDIA}/equinox-form-wide-1.jpg`,
          thumbnail: `${URL_MEDIA}/equinox-form-wide-1-thumb.jpg`,
          width: 1360,
          height: 770,
        },
        i2: {
          src: `${URL_MEDIA}/equinox-form-wide-2.jpg`,
          thumbnail: `${URL_MEDIA}/equinox-form-wide-2-thumb.jpg`,
          width: 1360,
          height: 770,
        },
        i3: {
          src: `${URL_MEDIA}/equinox-form-wide-3.jpg`,
          thumbnail: `${URL_MEDIA}/equinox-form-wide-3-thumb.jpg`,
          width: 1360,
          height: 770,
        },
        i4: {
          src: `${URL_MEDIA}/equinox-form-wide-4.jpg`,
          thumbnail: `${URL_MEDIA}/equinox-form-wide-4-thumb.jpg`,
          width: 1360,
          height: 770,
        },
      },
      square: {
        i1: {
          src: `${URL_MEDIA}/equinox-form-square-1.jpg`,
          thumbnail: `${URL_MEDIA}/equinox-form-square-1-thumb.jpg`,
          width: 670,
          height: 670,
        },
        i2: {
          src: `${URL_MEDIA}/equinox-form-square-2.jpg`,
          thumbnail: `${URL_MEDIA}/equinox-form-square-2-thumb.jpg`,
          width: 670,
          height: 670,
        },
      },
      squareS: {
        i1: {
          src: `${URL_MEDIA}/equinox-form-square-s-1.jpg`,
          thumbnail: `${URL_MEDIA}/equinox-form-square-s-1-thumb.jpg`,
          width: 440,
          height: 440,
        },
        i2: {
          src: `${URL_MEDIA}/equinox-form-square-s-2.jpg`,
          thumbnail: `${URL_MEDIA}/equinox-form-square-s-2-thumb.jpg`,
          width: 440,
          height: 440,
        },
        i3: {
          src: `${URL_MEDIA}/equinox-form-square-s-3.jpg`,
          thumbnail: `${URL_MEDIA}/equinox-form-square-s-3-thumb.jpg`,
          width: 440,
          height: 440,
        },
        i4: {
          src: `${URL_MEDIA}/equinox-form-square-s-4.jpg`,
          thumbnail: `${URL_MEDIA}/equinox-form-square-s-4-thumb.jpg`,
          width: 440,
          height: 440,
        },
        i5: {
          src: `${URL_MEDIA}/equinox-form-square-s-5.jpg`,
          thumbnail: `${URL_MEDIA}/equinox-form-square-s-5-thumb.jpg`,
          width: 440,
          height: 440,
        },
        i6: {
          src: `${URL_MEDIA}/equinox-form-square-s-6.jpg`,
          thumbnail: `${URL_MEDIA}/equinox-form-square-s-6-thumb.jpg`,
          width: 440,
          height: 440,
        },
        i7: {
          src: `${URL_MEDIA}/equinox-form-square-s-7.jpg`,
          thumbnail: `${URL_MEDIA}/equinox-form-square-s-7-thumb.jpg`,
          width: 440,
          height: 440,
        },
        i8: {
          src: `${URL_MEDIA}/equinox-form-square-s-8.jpg`,
          thumbnail: `${URL_MEDIA}/equinox-form-square-s-8-thumb.jpg`,
          width: 440,
          height: 440,
        },
      },
      squareSD: {
        i1: {
          src: `${URL_MEDIA}/equinox-form-square-sd-1.jpg`,
          thumbnail: `${URL_MEDIA}/equinox-form-square-sd-1-thumb.jpg`,
          width: 900,
          height: 440,
        },
        i2: {
          src: `${URL_MEDIA}/equinox-form-square-sd-2.jpg`,
          thumbnail: `${URL_MEDIA}/equinox-form-square-sd-2-thumb.jpg`,
          width: 900,
          height: 440,
        },
      },
      vertical: {
        i1: {
          src: `${URL_MEDIA}/equinox-form-vertical-1.jpg`,
          thumbnail: `${URL_MEDIA}/equinox-form-vertical-1-thumb.jpg`,
          width: 670,
          height: 1000,
        },
        i2: {
          src: `${URL_MEDIA}/equinox-form-vertical-2.jpg`,
          thumbnail: `${URL_MEDIA}/equinox-form-vertical-2-thumb.jpg`,
          width: 670,
          height: 1000,
        },
        i3: {
          src: `${URL_MEDIA}/equinox-form-vertical-3.jpg`,
          thumbnail: `${URL_MEDIA}/equinox-form-vertical-3-thumb.jpg`,
          width: 670,
          height: 1000,
        },
        i4: {
          src: `${URL_MEDIA}/equinox-form-vertical-4.jpg`,
          thumbnail: `${URL_MEDIA}/equinox-form-vertical-4-thumb.jpg`,
          width: 670,
          height: 1000,
        },
      },
    },
    video: {
      wide: {
        i1: {
          src: `${URL_MEDIA}/equinox-form-video.mp4`,
          width: 1920,
          height: 1080,
          poster: `${URL_MEDIA}/equinox-form-wide-5.jpg`,
          posterThumbnail: `${URL_MEDIA}/equinox-form-wide-5-thumb.jpg`,
          posterWidth: 1280,
          posterHeight: 720,
        },
      },
    },
  },
};
