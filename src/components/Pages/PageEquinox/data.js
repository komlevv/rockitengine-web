import { ROUTES, URL_MEDIA } from '../../App/ROUTES';
import Span from '../../Span/Span';

const logoEquinox = `${URL_MEDIA}/equinox-form-logo.svg`;
const imgMain = `${URL_MEDIA}/equinox-form-main.jpg`;
const imgNext = `${URL_MEDIA}/equinox-form-next.jpg`;

export const data = {
  main: {
    logo: logoEquinox,
    h: (
      <>
        Equinox <Span>Form</Span>
      </>
    ),
    p: 'Promise of substance and style, mirrored surfaces, minimalism and an artful approach.',
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
    img: imgMain,
  },
  overview: {
    h: 'Overview',
    p:
      'Form is a creative retreat in the visionary eco-city of Arcosanti with three days of ' +
      'music, art, ideas, architecture, nature, wellness & community. RockitLab was approached ' +
      'to help design & visualize an artistic installation that debuted on Form’s desert grounds. ' +
      'Art as a moment to build brand.',
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
      h: 'Balance of Wellness, Entertainment, & Experience',
      p:
        'Inspired by the human form, the Equinox brand, ' +
        'and the landscape of Arizona’s desert, we looked ' +
        'to create a reflective sanctuary space that could ' +
        'also be used for innovative workout classes, ' +
        'meditations, sound baths, and gatherings.',
    },
    b: {
      h: 'Approach',
      p:
        'Promise of substance and style, mirrored surfaces, minimalism ' +
        'and an artful approach that incorporates the surrounding ' +
        'environment created an arresting space for attendees to get back ' +
        'to peak form.',
    },
    c: {
      h: 'Canvas for Content Creation',
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
        'Taking the form of the Equinox split ‘O’ — we created a space out of the ' +
        'brand language that didn’t feel overbearing. Branded monoliths spread around ' +
        'the main installation adding increase visual weight to the Equinox footprint.',
    },
    e: {
      h: 'Brand Film',
      p:
        'Surrounded by the desert landscape, the installation was also' +
        'leveraged to create a brand film that captured Equinox’s unique aesthetic.',
    },
    f: {
      h: 'Process',
      p:
        'The activation became a ‘best-in-class’ example companywide for how Equinox ' +
        'should create brand activations, blending workout space, wellness retreat, ' +
        'stunning installation, and content studio.',
    },
  },
  next: {
    h: 'Next Project',
    banner: {
      h: 'The Times Expert Traveller',
      p: 'Your daily business challenges and your customers’ needs.',
      img: imgNext,
      imgShort: imgNext,
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
