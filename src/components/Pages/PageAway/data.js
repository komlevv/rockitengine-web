import { ROUTES, URL_MEDIA } from '../../App/ROUTES';
import Span from '../../Span/Span';

const logoAway = `${URL_MEDIA}/away-logo.svg`;

export const data = {
  main: {
    logo: logoAway,
    h: (
      <>
        “AKA” <Span>Service</Span>
      </>
    ),
    p: 'Away “AKA” campaign showcasing the\u00A0newest personalization offerings.',
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
    img: {
      src: `${URL_MEDIA}/away-main.jpg`,
      thumbnail: `${URL_MEDIA}/away-main-thumb.jpg`,
      width: 1360,
      height: 460,
    },
  },
  overview: {
    h: 'Overview',
    p:
      'Away was looking to\u00A0develop and\u00A0produce a\u00A0new campaign to\u00A0kick\u00A0off the\u00A0luggage brand’s “Personalization” service ' +
      'for its line of\u00A0Carry-Ons and\u00A0Everywhere Bags. Our partner, responsible for\u00A0creative and\u00A0production, approached ' +
      'us with the\u00A0task to\u00A0execute retouching and\u00A0color correction of\u00A0the\u00A0campaign.',
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
      h: 'Luggage Built to\u00A0Transform Modern Travel',
      p:
        'Personalizing your luggage/travel goods lets you express your travel style ' +
        'in\u00A0a\u00A0whole new way by\u00A0celebrating who you are, where you’ve been, ' +
        'and\u00A0where you’re headed next. To amplify the performance of on-screen talent ' +
        'we beauty-retouched the sequence.',
    },
    b: {
      h: 'Process',
      p:
        'We took special care color-correcting every detail of\u00A0the\u00A0product to\u00A0ensure video ' +
        'and photography perfectly matched real life samples. We rotoscoped the items piece by piece ' +
        'so we would have precise control over color.',
    },
    c: {
      h: 'Impact',
      p:
        'Away used three letters to express the personalities and add unique touches to their travel uniforms. ' +
        'The\u00A0resulting visuals ran across social, OOH, media web, mailers, and\u00A0in-store print. ' +
        'We are happy to take part in a quest to tranform modern travel.',
    },
  },
  next: {
    h: 'Next Project',
    banner: {
      h: '“AKA” Service',
      p: 'Away “AKA” campaign showcasing the\u00A0newest personalization offerings',
      img: {
        src: `${URL_MEDIA}/away-next.jpg`,
        thumbnail: `${URL_MEDIA}/away-next-thumb.jpg`,
        width: 1360,
        height: 460,
      },
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
