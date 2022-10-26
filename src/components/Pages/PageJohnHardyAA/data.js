import { ROUTES, URL_MEDIA } from '../../App/ROUTES';
import Span from '../../Span/Span';

const logoJH = `${URL_MEDIA}/jh-legends-logo.svg`;

export const data = {
  main: {
    logo: logoJH,
    h: (
      <>
        AA<sup>x</sup>JH <Span>Collection</Span>
      </>
    ),
    p:
      'After fronting a\u00A0campaign for\u00A0the\u00A0Bali-based jewelers, ' +
      'Adwoa launched her own John Hardy collection.',
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
      src: `${URL_MEDIA}/jh-legends-adwoa-main.jpg`,
      thumbnail: `${URL_MEDIA}/jh-legends-adwoa-main-thumb.jpg`,
      width: 1360,
      height: 460,
    },
  },
  overview: {
    h: 'Overview',
    p:
      'Model and\u00A0muse to\u00A0the\u00A0world over, and\u00A0most recently to\u00A0the\u00A0fine-jewelry makers at\u00A0John Hardy, Adwoa Aboah has now taken ' +
      'to\u00A0designing the\u00A0jewelry in\u00A0which she’s photographed. Our partner produced the\u00A0campaign videos and\u00A0we were tasked with ' +
      'handling post production, beauty retouching &\u00A0color correction.',
    items: {
      a: {
        n: '01',
        h: 'What we did',
        p: '',
        subItems: [
          'Skin Retouching',
          'Jewelry Retouching',
          'Color Correction',
          'Silhouette Correction',
        ],
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
      h:
        '“I envisioned the\u00A0girls that I love — my friends, ' +
        'mum, sisters — wearing this jewelry”.',
      p:
        'Adwoa Aboah‘s jewelry line is\u00A0a\u00A0representation of\u00A0her Ghanaian culture ' +
        'and roots. Jewelry pieces can be hard to\u00A0get right on\u00A0camera. To\u00A0ensure the\u00A0product looked ' +
        'perfect, we retouched and\u00A0color-corrected every item, removing metal tints, smudges, ' +
        'and rearranging pieces.',
    },
    b: {
      h: '',
      p:
        'Adwoa’s collection is\u00A0a\u00A0form of\u00A0self expression ' +
        'and love for\u00A0her culture.  We handled beauty retouching of\u00A0Adwoa, ' +
        'removing unnecesary creases, blemishes and\u00A0softening ' +
        'skin as\u00A0needed.',
    },
    c: {
      h: 'Iconic Shift',
      p:
        'Apart from the main campaign, we worked closely with the production team to help edit, ' +
        'retouch and color-correct the Behind The Scenes video. ' +
        "We also helped retouch the campaign's key visuals.",
    },
    d: {
      h: 'Impact',
      p:
        'Jewelry has transformative power and John Hardy x Adwoa collab is\u00A0nothing ' +
        "short of\u00A0luxurious. We are proud to be a part of John Hardy's family and help communicate their vision.",
    },
  },
  next: {
    h: 'Next Project',
    banner: {
      h: (
        <>
          AA<sup>x</sup>JH Collection
        </>
      ),
      p: 'John Hardy and\u00A0Adwoa collaborate to\u00A0create jewelry pieces that speak to\u00A0one’s authenticity',
      img: {
        src: `${URL_MEDIA}/jh-legends-adwoa-next.jpg`,
        thumbnail: `${URL_MEDIA}/jh-legends-adwoa-next-thumb.jpg`,
        width: 1360,
        height: 460,
      },
      logo: logoJH,
      fontColor: 'white',
      linkTo: ROUTES.PROJECTS_JOHNHARDY_AA,
    },
  },
  media: {
    img: {
      wide: {
        i2: {
          src: `${URL_MEDIA}/jh-legends-adwoa-wide-2.jpg`,
          thumbnail: `${URL_MEDIA}/jh-legends-adwoa-wide-2-thumb.jpg`,
          width: 1360,
          height: 770,
        },
      },
      square: {
        i1: {
          src: `${URL_MEDIA}/jh-legends-adwoa-square-1.jpg`,
          thumbnail: `${URL_MEDIA}/jh-legends-adwoa-square-1-thumb.jpg`,
          width: 670,
          height: 670,
        },
        i2: {
          src: `${URL_MEDIA}/jh-legends-adwoa-square-2.jpg`,
          thumbnail: `${URL_MEDIA}/jh-legends-adwoa-square-2-thumb.jpg`,
          width: 670,
          height: 670,
        },
      },
      squareS: {
        i1: {
          src: `${URL_MEDIA}/jh-legends-adwoa-square-s-1.jpg`,
          thumbnail: `${URL_MEDIA}/jh-legends-adwoa-square-s-1-thumb.jpg`,
          width: 440,
          height: 440,
        },
        i2: {
          src: `${URL_MEDIA}/jh-legends-adwoa-square-s-2.jpg`,
          thumbnail: `${URL_MEDIA}/jh-legends-adwoa-square-s-2-thumb.jpg`,
          width: 440,
          height: 440,
        },
        i3: {
          src: `${URL_MEDIA}/jh-legends-adwoa-square-s-3.jpg`,
          thumbnail: `${URL_MEDIA}/jh-legends-adwoa-square-s-3-thumb.jpg`,
          width: 440,
          height: 440,
        },
        i4: {
          src: `${URL_MEDIA}/jh-legends-adwoa-square-s-4.jpg`,
          thumbnail: `${URL_MEDIA}/jh-legends-adwoa-square-s-4-thumb.jpg`,
          width: 440,
          height: 440,
        },
        i5: {
          src: `${URL_MEDIA}/jh-legends-adwoa-square-s-5.jpg`,
          thumbnail: `${URL_MEDIA}/jh-legends-adwoa-square-s-5-thumb.jpg`,
          width: 440,
          height: 440,
        },
        i6: {
          src: `${URL_MEDIA}/jh-legends-adwoa-square-s-6.jpg`,
          thumbnail: `${URL_MEDIA}/jh-legends-adwoa-square-s-6-thumb.jpg`,
          width: 440,
          height: 440,
        },
        i7: {
          src: `${URL_MEDIA}/jh-legends-adwoa-square-s-7.jpg`,
          thumbnail: `${URL_MEDIA}/jh-legends-adwoa-square-s-7-thumb.jpg`,
          width: 440,
          height: 440,
        },
        i8: {
          src: `${URL_MEDIA}/jh-legends-adwoa-square-s-8.jpg`,
          thumbnail: `${URL_MEDIA}/jh-legends-adwoa-square-s-8-thumb.jpg`,
          width: 440,
          height: 440,
        },
      },
      squareSD: {
        i1: {
          src: `${URL_MEDIA}/jh-legends-adwoa-square-sd-1.jpg`,
          thumbnail: `${URL_MEDIA}/jh-legends-adwoa-square-sd-1.jpg`,
          width: 900,
          height: 440,
        },
        i2: {
          src: `${URL_MEDIA}/jh-legends-adwoa-square-sd-2.jpg`,
          thumbnail: `${URL_MEDIA}/jh-legends-adwoa-square-sd-2.jpg`,
          width: 900,
          height: 440,
        },
      },
      vertical: {
        i1: {
          src: `${URL_MEDIA}/jh-legends-adwoa-vertical-1.jpg`,
          thumbnail: `${URL_MEDIA}/jh-legends-adwoa-vertical-1-thumb.jpg`,
          width: 670,
          height: 1000,
        },
        i2: {
          src: `${URL_MEDIA}/jh-legends-adwoa-vertical-2.jpg`,
          thumbnail: `${URL_MEDIA}/jh-legends-adwoa-vertical-2-thumb.jpg`,
          width: 670,
          height: 1000,
        },
      },
    },
    video: {
      wide: {
        i1: {
          src: `${URL_MEDIA}/jh-legends-adwoa-wide-1.mp4`,
          width: 1920,
          height: 1080,
          poster: `${URL_MEDIA}/jh-legends-adwoa-wide-1.jpg`,
          posterThumbnail: `${URL_MEDIA}/jh-legends-adwoa-wide-1-thumb.jpg`,
          posterWidth: 1280,
          posterHeight: 720,
        },
        i3: {
          src: `${URL_MEDIA}/jh-legends-adwoa-wide-3.mp4`,
          width: 1920,
          height: 1080,
          poster: `${URL_MEDIA}/jh-legends-adwoa-wide-3.jpg`,
          posterThumbnail: `${URL_MEDIA}/jh-legends-adwoa-wide-3-thumb.jpg`,
          posterWidth: 1280,
          posterHeight: 720,
        },
      },
      vertical: {
        i1: {
          src: `${URL_MEDIA}/jh-legends-adwoa-vertical-1.mp4`,
          width: 670,
          height: 1000,
          poster: `${URL_MEDIA}/jh-legends-adwoa-vertical-1.jpg`,
          posterThumbnail: `${URL_MEDIA}/jh-legends-adwoa-vertical-1-thumb.jpg`,
          posterWidth: 670,
          posterHeight: 1000,
        },
        i2: {
          src: `${URL_MEDIA}/jh-legends-adwoa-vertical-2.mp4`,
          width: 670,
          height: 1000,
          poster: `${URL_MEDIA}/jh-legends-adwoa-vertical-2.jpg`,
          posterThumbnail: `${URL_MEDIA}/jh-legends-adwoa-vertical-2-thumb.jpg`,
          posterWidth: 670,
          posterHeight: 1000,
        },
        i3: {
          src: `${URL_MEDIA}/jh-legends-adwoa-vertical-3.mp4`,
          width: 670,
          height: 1000,
          poster: `${URL_MEDIA}/jh-legends-adwoa-vertical-3.jpg`,
          posterThumbnail: `${URL_MEDIA}/jh-legends-adwoa-vertical-3-thumb.jpg`,
          posterWidth: 670,
          posterHeight: 1000,
        },
      },
    },
  },
};
