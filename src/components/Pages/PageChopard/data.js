import { ROUTES, URL_MEDIA } from '../../App/ROUTES';
import Span from '../../Span/Span';

const logoChopard = `${URL_MEDIA}/chopard-loves-london-logo.svg`;
const imgMain = `${URL_MEDIA}/chopard-loves-london-main.jpg`;
const imgNext = `${URL_MEDIA}/chopard-loves-london-next.jpg`;

export const data = {
  main: {
    logo: logoChopard,
    h: (
      <>
        Chopard Loves <Span>London</Span>
      </>
    ),
    p: 'Stylish inauguration of Chopard’s new flagship boutique on Bond Street.',
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
    img: imgMain,
  },
  overview: {
    h: 'Overview',
    p:
      'Chopard was looking to expand and refurbish it’s flagship Bond Street store. The highly anticipated reopening was ' +
      'expected to be a star studded occasion with supermodels, Oscar winners and style icons jetting to London ' +
      'to celebrate. RockitLab was tasked with development & visualization of creative concepts decorating the store’s ' +
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
        'Inspired by the human form, the Equinox brand, ' +
        'and the landscape of Arizona’s desert, we looked ' +
        'to create a reflective sanctuary space that could ' +
        'also be used for innovative workout classes, ' +
        'meditations, sound baths, and gatherings.',
    },
    b: {
      h: '',
      p:
        'The beautifully expanded and refurbished store reflects Chopard’s Journey to Sustainable Luxury, using local ' +
        'environmentally friendly materials and collaborating with local artists. To create an immersive experience RockitEngine ' +
        'developed both daily and nightly looks of the decorative sculpture.',
    },
    c: {
      h: 'Love Spin',
      p:
        'To capture the dynamic and elegant design of the Happy Hearts collection, ' +
        'we proposed building a kinetic sculpture upon the New Bond Street store facade.',
    },
    d: {
      h: '',
      p:
        'The design focuses on the layering of the Happy Heart and the free flowing movement ' +
        'of the diamonds inside in series of anamorphic, kinetic and dynamic shape suggestions.',
    },
    e: {
      h: '',
      p:
        'Creative fusion of metals, patterns and shapes to celebrate Chopard’s expressive' +
        'craftsmanship combined with a constant quest for excellence.',
    },
    f: {
      h: 'Neovictorian',
      p:
        'An installation that transforms the New Bond Street facade into a contemporary floral scape, glistening and ' +
        'breathing with the city. Taking inspiration from the stores modern take on Victorian inspired decor and classic English ' +
        'floral patterns in the vain of William Morris, the store opening event will transport guests through a surreal yet ' +
        'contemporaryVictorian hanging garden into a space ready to be painted by Thomas Gainsborough.',
    },
    g: {
      h: '',
      p:
        'An abstract L-shaped golden trellis will partially cover the store faced whilst accenting the architecture. ' +
        'A hanging garden of cream, yellow and orange flowers mixed in with hanging golden hearts will cascade down ' +
        'the building blowing and glittering in the windand carpeting parts of the pavement.',
    },
    h: {
      h: 'Process',
      p:
        'We visited Bond Street and took the photos of the space, helping in recreation the store’s facade ' +
        'in a 3-dimensional environment. From the broad stroke approach sketches designed in SketchUp, ' +
        'we used 3ds Max, Autodesk Maya and Maxon Redshift to finalize the concepts.',
    },
  },
  next: {
    h: 'Next Project',
    banner: {
      h: 'Chopard Loves London',
      p: 'Stylish inauguration of Chopard’s new flagship boutique on Bond Street',
      img: imgNext,
      imgShort: imgNext,
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
