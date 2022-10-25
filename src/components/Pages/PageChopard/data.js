import { ROUTES, URL_MEDIA } from '../../App/ROUTES';
import Span from '../../Span/Span';

const logoChopard = `${URL_MEDIA}/chopard-loves-london-logo.svg`;

export const data = {
  main: {
    logo: logoChopard,
    h: (
      <>
        Chopard Loves <Span>London</Span>
      </>
    ),
    p: 'Stylish inauguration of\u00A0Chopard’s new flagship boutique on\u00A0Bond Street.',
    items: [
      {
        h: 'Industry',
        p: 'Jewellery',
      },
      {
        h: 'Location',
        p: 'United Kingdom',
      },
    ],
    img: {
      src: `${URL_MEDIA}/chopard-loves-london-main.jpg`,
      thumbnail: `${URL_MEDIA}/chopard-loves-london-main-thumb.jpg`,
      width: 1360,
      height: 460,
    },
  },
  overview: {
    h: 'Overview',
    p:
      'Chopard was looking to\u00A0expand and\u00A0refurbish it’s flagship Bond Street store. the\u00A0highly anticipated reopening was ' +
      'expected to\u00A0be a\u00A0star studded occasion with supermodels, Oscar winners and\u00A0style icons jetting to\u00A0London ' +
      'to\u00A0celebrate. RockitEngine was tasked with development &\u00A0visualization of\u00A0creative concepts decorating the\u00A0store’s ' +
      'festive facade.',
    items: {
      a: {
        n: '01',
        h: 'What we did',
        p: '',
        subItems: [
          'Store Facade Design',
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
      h: 'Weightless',
      p:
        'Inspired by\u00A0the\u00A0human form, the\u00A0Equinox brand, ' +
        'and the\u00A0landscape of\u00A0Arizona’s desert, we looked ' +
        'to\u00A0create a\u00A0reflective sanctuary space that could ' +
        'also be used for\u00A0innovative workout classes, ' +
        'meditations, sound baths, and\u00A0gatherings.',
    },
    b: {
      h: '',
      p:
        'The beautifully expanded and\u00A0refurbished store reflects Chopard’s Journey to\u00A0Sustainable Luxury, using local ' +
        'environmentally friendly materials and\u00A0collaborating with local artists. to\u00A0create an\u00A0immersive experience RockitEngine ' +
        'developed both daily and\u00A0nightly looks of\u00A0the\u00A0decorative sculpture.',
    },
    c: {
      h: 'Love Spin',
      p:
        'To capture the\u00A0dynamic and\u00A0elegant design of\u00A0the\u00A0Happy Hearts collection, ' +
        'we proposed building a\u00A0kinetic sculpture upon the\u00A0New Bond Street store facade.',
    },
    d: {
      h: '',
      p:
        'The design focuses on\u00A0the\u00A0layering of\u00A0the\u00A0Happy Heart and\u00A0the\u00A0free flowing movement ' +
        'of\u00A0the\u00A0diamonds inside in\u00A0series of\u00A0anamorphic, kinetic and\u00A0dynamic shape suggestions.',
    },
    e: {
      h: '',
      p:
        'Creative fusion of\u00A0metals, patterns and\u00A0shapes to\u00A0celebrate Chopard’s expressive' +
        'craftsmanship combined with a\u00A0constant quest for\u00A0excellence.',
    },
    f: {
      h: 'Neovictorian',
      p:
        'An installation that transforms the\u00A0New Bond Street facade into a\u00A0contemporary floral scape, glistening and\u00A0' +
        'breathing with the\u00A0city. Taking inspiration from the\u00A0stores modern take on\u00A0Victorian inspired decor and\u00A0classic English ' +
        'floral patterns in\u00A0the\u00A0vain of\u00A0William Morris, the\u00A0store opening event will transport guests through a\u00A0surreal yet ' +
        'contemporaryVictorian hanging garden into a\u00A0space ready to\u00A0be painted by\u00A0Thomas Gainsborough.',
    },
    g: {
      h: '',
      p:
        'An abstract L-shaped golden trellis will partially cover the\u00A0store faced whilst accenting the\u00A0architecture. ' +
        'A hanging garden of\u00A0cream, yellow and\u00A0orange flowers mixed in\u00A0with hanging golden hearts will cascade down ' +
        'the\u00A0building blowing and\u00A0glittering in\u00A0the\u00A0windand carpeting parts of\u00A0the\u00A0pavement.',
    },
    h: {
      h: 'Process',
      p:
        'We visited Bond Street and\u00A0took the\u00A0photos of\u00A0the\u00A0space, helping in\u00A0recreation the\u00A0store’s facade ' +
        'in\u00A0a\u00A03-dimensional environment. From the\u00A0broad stroke approach sketches designed in\u00A0SketchUp, ' +
        'we used 3ds Max, Autodesk Maya and\u00A0Maxon Redshift to\u00A0finalize the\u00A0concepts.',
    },
  },
  next: {
    h: 'Next Project',
    banner: {
      h: 'Chopard Loves London',
      p: 'Stylish inauguration of\u00A0Chopard’s new flagship boutique on\u00A0Bond Street',
      img: {
        src: `${URL_MEDIA}/chopard-loves-london-next.jpg`,
        thumbnail: `${URL_MEDIA}/chopard-loves-london-next-thumb.jpg`,
        width: 1360,
        height: 460,
      },
      logo: logoChopard,
      fontColor: 'white',
      linkTo: ROUTES.PROJECTS_CHOPARD_B,
    },
  },
  media: {
    img: {
      wide: {
        i1: {
          src: `${URL_MEDIA}/chopard-loves-london-wide-1.jpg`,
          thumbnail: `${URL_MEDIA}/chopard-loves-london-wide-1-thumb.jpg`,
          width: 1360,
          height: 770,
        },
        i2: {
          src: `${URL_MEDIA}/chopard-loves-london-wide-2.jpg`,
          thumbnail: `${URL_MEDIA}/chopard-loves-london-wide-2-thumb.jpg`,
          width: 1360,
          height: 770,
        },
        i3: {
          src: `${URL_MEDIA}/chopard-loves-london-wide-3.jpg`,
          thumbnail: `${URL_MEDIA}/chopard-loves-london-wide-3-thumb.jpg`,
          width: 1360,
          height: 770,
        },
        i4: {
          src: `${URL_MEDIA}/chopard-loves-london-wide-4.jpg`,
          thumbnail: `${URL_MEDIA}/chopard-loves-london-wide-4-thumb.jpg`,
          width: 1360,
          height: 770,
        },
        i5: {
          src: `${URL_MEDIA}/chopard-loves-london-wide-5.jpg`,
          thumbnail: `${URL_MEDIA}/chopard-loves-london-wide-5-thumb.jpg`,
          width: 1360,
          height: 770,
        },
      },
      square: {
        i1: {
          src: `${URL_MEDIA}/chopard-loves-london-square-1.jpg`,
          thumbnail: `${URL_MEDIA}/chopard-loves-london-square-1-thumb.jpg`,
          width: 670,
          height: 670,
        },
        i2: {
          src: `${URL_MEDIA}/chopard-loves-london-square-2.jpg`,
          thumbnail: `${URL_MEDIA}/chopard-loves-london-square-2-thumb.jpg`,
          width: 670,
          height: 670,
        },
        i3: {
          src: `${URL_MEDIA}/chopard-loves-london-square-3.jpg`,
          thumbnail: `${URL_MEDIA}/chopard-loves-london-square-3-thumb.jpg`,
          width: 670,
          height: 670,
        },
        i4: {
          src: `${URL_MEDIA}/chopard-loves-london-square-4.jpg`,
          thumbnail: `${URL_MEDIA}/chopard-loves-london-square-4-thumb.jpg`,
          width: 670,
          height: 670,
        },
        i5: {
          src: `${URL_MEDIA}/chopard-loves-london-square-5.jpg`,
          thumbnail: `${URL_MEDIA}/chopard-loves-london-square-5-thumb.jpg`,
          width: 670,
          height: 670,
        },
        i6: {
          src: `${URL_MEDIA}/chopard-loves-london-square-6.jpg`,
          thumbnail: `${URL_MEDIA}/chopard-loves-london-square-6-thumb.jpg`,
          width: 670,
          height: 670,
        },
        i7: {
          src: `${URL_MEDIA}/chopard-loves-london-square-7.jpg`,
          thumbnail: `${URL_MEDIA}/chopard-loves-london-square-7-thumb.jpg`,
          width: 670,
          height: 670,
        },
        i8: {
          src: `${URL_MEDIA}/chopard-loves-london-square-8.jpg`,
          thumbnail: `${URL_MEDIA}/chopard-loves-london-square-8-thumb.jpg`,
          width: 670,
          height: 670,
        },
      },
      squareS: {
        i1: {
          src: `${URL_MEDIA}/chopard-loves-london-square-s-1.jpg`,
          thumbnail: `${URL_MEDIA}/chopard-loves-london-square-s-1-thumb.jpg`,
          width: 440,
          height: 440,
        },
        i2: {
          src: `${URL_MEDIA}/chopard-loves-london-square-s-2.jpg`,
          thumbnail: `${URL_MEDIA}/chopard-loves-london-square-s-2-thumb.jpg`,
          width: 440,
          height: 440,
        },
        i3: {
          src: `${URL_MEDIA}/chopard-loves-london-square-s-3.jpg`,
          thumbnail: `${URL_MEDIA}/chopard-loves-london-square-s-3-thumb.jpg`,
          width: 440,
          height: 440,
        },
        i4: {
          src: `${URL_MEDIA}/chopard-loves-london-square-s-4.jpg`,
          thumbnail: `${URL_MEDIA}/chopard-loves-london-square-s-4-thumb.jpg`,
          width: 440,
          height: 440,
        },
        i5: {
          src: `${URL_MEDIA}/chopard-loves-london-square-s-5.jpg`,
          thumbnail: `${URL_MEDIA}/chopard-loves-london-square-s-5-thumb.jpg`,
          width: 440,
          height: 440,
        },
        i6: {
          src: `${URL_MEDIA}/chopard-loves-london-square-s-6.jpg`,
          thumbnail: `${URL_MEDIA}/chopard-loves-london-square-s-6-thumb.jpg`,
          width: 440,
          height: 440,
        },
        i7: {
          src: `${URL_MEDIA}/chopard-loves-london-square-s-7.jpg`,
          thumbnail: `${URL_MEDIA}/chopard-loves-london-square-s-7-thumb.jpg`,
          width: 440,
          height: 440,
        },
        i8: {
          src: `${URL_MEDIA}/chopard-loves-london-square-s-8.jpg`,
          thumbnail: `${URL_MEDIA}/chopard-loves-london-square-s-8-thumb.jpg`,
          width: 440,
          height: 440,
        },
      },
      squareSD: {
        i1: {
          src: `${URL_MEDIA}/chopard-loves-london-square-sd-1.jpg`,
          thumbnail: `${URL_MEDIA}/chopard-loves-london-square-sd-1-thumb.jpg`,
          width: 900,
          height: 440,
        },
        i2: {
          src: `${URL_MEDIA}/chopard-loves-london-square-sd-2.jpg`,
          thumbnail: `${URL_MEDIA}/chopard-loves-london-square-sd-2-thumb.jpg`,
          width: 900,
          height: 440,
        },
      },
      vertical: {
        i1: {
          src: `${URL_MEDIA}/chopard-loves-london-vertical-1.jpg`,
          thumbnail: `${URL_MEDIA}/chopard-loves-london-vertical-1-thumb.jpg`,
          width: 670,
          height: 1000,
        },
        i2: {
          src: `${URL_MEDIA}/chopard-loves-london-vertical-2.jpg`,
          thumbnail: `${URL_MEDIA}/chopard-loves-london-vertical-2-thumb.jpg`,
          width: 670,
          height: 1000,
        },
      },
    },
  },
};
