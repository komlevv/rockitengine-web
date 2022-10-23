import { ROUTES, URL_MEDIA } from '../../App/ROUTES';
import Span from '../../Span/Span';

const logoCartier = `${URL_MEDIA}/cartier-logo.svg`;

export const data = {
  main: {
    logo: logoCartier,
    h: (
      <>
        Clash de <Span>Cartier</Span>
      </>
    ),
    p: 'More powerful and confident than ever before, serious spirit with original charm.',
    items: [
      {
        h: 'Industry',
        p: 'Jewelry',
      },
      {
        h: 'Location',
        p: 'United States',
      },
    ],
    img: {
      src: `${URL_MEDIA}/cartier-main.jpg`,
      thumbnail: `${URL_MEDIA}/cartier-main-thumb.jpg`,
      width: 1360,
      height: 460,
    },
  },
  overview: {
    h: 'Overview',
    p:
      'Clash de Cartier, jewelry that simultaneously champions and eschews classic forms, that balances clean design with an excess ' +
      'of energy, and a serious spirit with original charm. Our partner produced a video starring one of the collection’s pieces ' +
      'and called on us to handle retouching & color of the edit.',
    items: {
      a: {
        n: '01',
        h: 'What we did',
        p: '',
        subItems: ['Nail Retouch', 'Skin Retouch', 'Product Retouch', 'Color Correction'],
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
      h: 'Independent, Elegant, and Instantly Recognizable',
      p:
        'We made skin-tones smooth, removed excessive wrinkles and blemishes, repaired ' +
        'skin texture where was necessary, and made sure nail polish was perfect in texture and in color.' +
        'The edit was color graded to reflect Cartier confident and powerful vibe.',
    },
    b: {
      h: 'Impact',
      p:
        'Clash De Cartier is a house icon. A collection that deeply explores intricacies in geometry, ' +
        'dualities, fine jewellery mechanics and most importantly, imbuing a clash of attitudes. ' +
        'RockitEngine helped Cartier realise their vision of visual rhythm, aesthetic charm ' +
        'and intensive elegance.',
    },
  },
  next: {
    h: 'Next Project',
    banner: {
      h: 'Clash de Cartier',
      p: 'An aesthetic code, a balancing act, a daring embodiment of dualities.',
      img: {
        src: `${URL_MEDIA}/cartier-next.jpg`,
        thumbnail: `${URL_MEDIA}/cartier-next-thumb.jpg`,
        width: 1360,
        height: 460,
      },
      logo: logoCartier,
      fontColor: 'white',
      linkTo: ROUTES.PROJECTS_CARTIER_CLASH,
    },
  },
  media: {
    video: {
      wide: {
        i1: {
          src: `${URL_MEDIA}/cartier-wide-1.mp4`,
          width: 1920,
          height: 1080,
          poster: `${URL_MEDIA}/cartier-wide-1.jpg`,
          posterThumbnail: `${URL_MEDIA}/cartier-wide-1-thumb.jpg`,
          posterWidth: 1280,
          posterHeight: 720,
        },
        i2: {
          src: `${URL_MEDIA}/cartier-wide-2.mp4`,
          width: 1920,
          height: 1080,
          poster: `${URL_MEDIA}/cartier-wide-2.jpg`,
          posterThumbnail: `${URL_MEDIA}/cartier-wide-2-thumb.jpg`,
          posterWidth: 1280,
          posterHeight: 720,
        },
      },
      square: {
        i1: {
          src: `${URL_MEDIA}/cartier-square-1.mp4`,
          width: 670,
          height: 670,
          poster: `${URL_MEDIA}/cartier-square-1.jpg`,
          posterThumbnail: `${URL_MEDIA}/cartier-square-1-thumb.jpg`,
          posterWidth: 670,
          posterHeight: 670,
        },
        i2: {
          src: `${URL_MEDIA}/cartier-square-2.mp4`,
          width: 670,
          height: 670,
          poster: `${URL_MEDIA}/cartier-square-2.jpg`,
          posterThumbnail: `${URL_MEDIA}/cartier-square-2-thumb.jpg`,
          posterWidth: 670,
          posterHeight: 670,
        },
        i3: {
          src: `${URL_MEDIA}/cartier-square-3.mp4`,
          width: 670,
          height: 670,
          poster: `${URL_MEDIA}/cartier-square-3.jpg`,
          posterThumbnail: `${URL_MEDIA}/cartier-square-3-thumb.jpg`,
          posterWidth: 670,
          posterHeight: 670,
        },
        i4: {
          src: `${URL_MEDIA}/cartier-square-4.mp4`,
          width: 670,
          height: 670,
          poster: `${URL_MEDIA}/cartier-square-4.jpg`,
          posterThumbnail: `${URL_MEDIA}/cartier-square-4-thumb.jpg`,
          posterWidth: 670,
          posterHeight: 670,
        },
      },
    },
  },
};
