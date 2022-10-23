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
      'After fronting a campaign for the Bali-based jewelers, ' +
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
      'Model and muse to the world over, and most recently to the fine-jewelry makers at John Hardy, Adwoa Aboah has now taken ' +
      'to designing the jewelry in which she’s photographed. Our partner produced the campaign videos and we were tasked with ' +
      'handling it’s post production, including beauty retouching, color & silhouette correction.',
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
        '“I envisioned the girls that I love — my friends, ' +
        'mum, sisters — wearing this jewelry”.',
      p:
        'Adwoa Aboah‘s jewelry line is a representation of her Ghanaian culture ' +
        'and roots. The 34-piece collection in collaboration with John Hardy includes earrings, rings, ' +
        'and more. Jewelry might be hard to get right on camera. To ensure the product looked ' +
        'perfect, we retouched and color-corrected each jewelry piece, removing metal tints, smudges, ' +
        'and sometimes even rearranging pieces.',
    },
    b: {
      h: '',
      p:
        'Adwoa’s collection is a form of self expression ' +
        'and love for her culture.  The natural elements ' +
        'used to make her jewelry express strong cultural ' +
        'ties and free artistic range. Additionaly to retouching ' +
        'jewelry pieces we handled beauty retouching of Adwoa, ' +
        'removing unnecesary creases, blemishes and softening ' +
        'skin as needed.',
    },
    c: {
      h: 'Iconic Shift',
      p:
        'When creating the capsule collection, Aboah with John Hardy’s creative ' +
        'director Hollie Bonneville Barden, decided to use the brand’s iconic chains ' +
        'as their starting point, and transformed them into body harnesses, single ' +
        'drop earrings and twisted bracelets.',
    },
    d: {
      h: 'Impact',
      p:
        '\n' +
        'Jewelry has transformative power. John Hardy x Adwoa collab is nothing short of luxurious. ' +
        'Creating pieces that speak to one’s authenticity and that could be personalized ' +
        'in a variety of ways was very important to John Hardy connoisseurs.',
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
      p:
        'After fronting a campaign for the Bali-based jewelers, ' +
        'Adwoa launched her own John Hardy collection.',
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
