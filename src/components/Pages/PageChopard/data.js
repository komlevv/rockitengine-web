import { ROUTES, URL_MEDIA } from '../../App/ROUTES';
import Span from '../../Span/Span';

const logoChopard = `${URL_MEDIA}/chopard-loves-london-logo.svg`;

const imgMain = `${URL_MEDIA}/chopard-loves-london-main.jpg`;
const imgMainThumb = `${URL_MEDIA}/chopard-loves-london-main-thumb.jpg`;
const imgNext = `${URL_MEDIA}/chopard-loves-london-next.jpg`;
const imgNextThumb = `${URL_MEDIA}/chopard-loves-london-next-thumb.jpg`;

const imgWide1 = `${URL_MEDIA}/chopard-loves-london-wide-1.jpg`;
const imgWide1Thumb = `${URL_MEDIA}/chopard-loves-london-wide-1-thumb.jpg`;
const imgWide2 = `${URL_MEDIA}/chopard-loves-london-wide-2.jpg`;
const imgWide2Thumb = `${URL_MEDIA}/chopard-loves-london-wide-2-thumb.jpg`;
const imgWide3 = `${URL_MEDIA}/chopard-loves-london-wide-3.jpg`;
const imgWide3Thumb = `${URL_MEDIA}/chopard-loves-london-wide-3-thumb.jpg`;
const imgWide4 = `${URL_MEDIA}/chopard-loves-london-wide-4.jpg`;
const imgWide4Thumb = `${URL_MEDIA}/chopard-loves-london-wide-4-thumb.jpg`;
const imgWide5 = `${URL_MEDIA}/chopard-loves-london-wide-5.jpg`;
const imgWide5Thumb = `${URL_MEDIA}/chopard-loves-london-wide-5-thumb.jpg`;

const imgSquare1 = `${URL_MEDIA}/chopard-loves-london-square-1.jpg`;
const imgSquare1Thumb = `${URL_MEDIA}/chopard-loves-london-square-1-thumb.jpg`;
const imgSquare2 = `${URL_MEDIA}/chopard-loves-london-square-2.jpg`;
const imgSquare2Thumb = `${URL_MEDIA}/chopard-loves-london-square-2-thumb.jpg`;
const imgSquare3 = `${URL_MEDIA}/chopard-loves-london-square-3.jpg`;
const imgSquare3Thumb = `${URL_MEDIA}/chopard-loves-london-square-3-thumb.jpg`;
const imgSquare4 = `${URL_MEDIA}/chopard-loves-london-square-4.jpg`;
const imgSquare4Thumb = `${URL_MEDIA}/chopard-loves-london-square-4-thumb.jpg`;
const imgSquare5 = `${URL_MEDIA}/chopard-loves-london-square-5.jpg`;
const imgSquare5Thumb = `${URL_MEDIA}/chopard-loves-london-square-5-thumb.jpg`;
const imgSquare6 = `${URL_MEDIA}/chopard-loves-london-square-6.jpg`;
const imgSquare6Thumb = `${URL_MEDIA}/chopard-loves-london-square-6-thumb.jpg`;
const imgSquare7 = `${URL_MEDIA}/chopard-loves-london-square-7.jpg`;
const imgSquare7Thumb = `${URL_MEDIA}/chopard-loves-london-square-7-thumb.jpg`;
const imgSquare8 = `${URL_MEDIA}/chopard-loves-london-square-8.jpg`;
const imgSquare8Thumb = `${URL_MEDIA}/chopard-loves-london-square-8-thumb.jpg`;

const imgSquareS1 = `${URL_MEDIA}/chopard-loves-london-square-s-1.jpg`;
const imgSquareS1Thumb = `${URL_MEDIA}/chopard-loves-london-square-s-1-thumb.jpg`;
const imgSquareS2 = `${URL_MEDIA}/chopard-loves-london-square-s-2.jpg`;
const imgSquareS2Thumb = `${URL_MEDIA}/chopard-loves-london-square-s-2-thumb.jpg`;
const imgSquareS3 = `${URL_MEDIA}/chopard-loves-london-square-s-3.jpg`;
const imgSquareS3Thumb = `${URL_MEDIA}/chopard-loves-london-square-s-3-thumb.jpg`;
const imgSquareS4 = `${URL_MEDIA}/chopard-loves-london-square-s-4.jpg`;
const imgSquareS4Thumb = `${URL_MEDIA}/chopard-loves-london-square-s-4-thumb.jpg`;
const imgSquareS5 = `${URL_MEDIA}/chopard-loves-london-square-s-5.jpg`;
const imgSquareS5Thumb = `${URL_MEDIA}/chopard-loves-london-square-s-5-thumb.jpg`;
const imgSquareS6 = `${URL_MEDIA}/chopard-loves-london-square-s-6.jpg`;
const imgSquareS6Thumb = `${URL_MEDIA}/chopard-loves-london-square-s-6-thumb.jpg`;
const imgSquareS7 = `${URL_MEDIA}/chopard-loves-london-square-s-7.jpg`;
const imgSquareS7Thumb = `${URL_MEDIA}/chopard-loves-london-square-s-7-thumb.jpg`;
const imgSquareS8 = `${URL_MEDIA}/chopard-loves-london-square-s-8.jpg`;
const imgSquareS8Thumb = `${URL_MEDIA}/chopard-loves-london-square-s-8-thumb.jpg`;

const imgSquareSD1 = `${URL_MEDIA}/chopard-loves-london-square-sd-1.jpg`;
const imgSquareSD1Thumb = `${URL_MEDIA}/chopard-loves-london-square-sd-1-thumb.jpg`;
const imgSquareSD2 = `${URL_MEDIA}/chopard-loves-london-square-sd-2.jpg`;
const imgSquareSD2Thumb = `${URL_MEDIA}/chopard-loves-london-square-sd-2-thumb.jpg`;

const imgVertical1 = `${URL_MEDIA}/chopard-loves-london-vertical-1.jpg`;
const imgVertical1Thumb = `${URL_MEDIA}/chopard-loves-london-vertical-1-thumb.jpg`;
const imgVertical2 = `${URL_MEDIA}/chopard-loves-london-vertical-2.jpg`;
const imgVertical2Thumb = `${URL_MEDIA}/chopard-loves-london-vertical-2-thumb.jpg`;

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
    imgWide: [imgWide1, imgWide2, imgWide3, imgWide4, imgWide5],
    imgSquare: [
      imgSquare1,
      imgSquare2,
      imgSquare3,
      imgSquare4,
      imgSquare5,
      imgSquare6,
      imgSquare7,
      imgSquare8,
    ],
    imgSquareS: [
      imgSquareS1,
      imgSquareS2,
      imgSquareS3,
      imgSquareS4,
      imgSquareS5,
      imgSquareS6,
      imgSquareS7,
      imgSquareS8,
    ],
    imgSquareSD: [imgSquareSD1, imgSquareSD2],
    imgVertical: [imgVertical1, imgVertical2],
    video: [],
    thumbs: [
      imgMainThumb,
      imgNextThumb,
      imgWide1Thumb,
      imgWide2Thumb,
      imgWide3Thumb,
      imgWide4Thumb,
      imgWide5Thumb,
      imgSquare1Thumb,
      imgSquare2Thumb,
      imgSquare3Thumb,
      imgSquare4Thumb,
      imgSquare5Thumb,
      imgSquare6Thumb,
      imgSquare7Thumb,
      imgSquare8Thumb,
      imgSquareS1Thumb,
      imgSquareS2Thumb,
      imgSquareS3Thumb,
      imgSquareS4Thumb,
      imgSquareS5Thumb,
      imgSquareS6Thumb,
      imgSquareS7Thumb,
      imgSquareS8Thumb,
      imgSquareSD1Thumb,
      imgSquareSD2Thumb,
      imgVertical1Thumb,
      imgVertical2Thumb,
    ],
  },
};
