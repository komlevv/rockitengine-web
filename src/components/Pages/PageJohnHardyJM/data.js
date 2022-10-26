import { ROUTES, URL_MEDIA } from '../../App/ROUTES';
import Span from '../../Span/Span';

const logoJH = `${URL_MEDIA}/jh-legends-logo.svg`;

export const data = {
  main: {
    logo: logoJH,
    h: (
      <>
        Made For <Span>Legends</Span>
      </>
    ),
    p:
      'Celebrating everyday strength, power and\u00A0unapologetic ' +
      'self-expression that lies within every woman.',
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
      src: `${URL_MEDIA}/jh-legends-jm-main.jpg`,
      thumbnail: `${URL_MEDIA}/jh-legends-jm-main-thumb.jpg`,
      width: 1360,
      height: 460,
    },
  },
  overview: {
    h: 'Overview',
    p:
      'Rooted in\u00A0Balinese heritage, John Hardy’s new platform “Made for\u00A0Legends” flipped the\u00A0switch ' +
      'on\u00A0the\u00A0traditional jewelry model. We were tasked with\u00A0post-production ' +
      'of the campaign, handling beauty retouching of product and\u00A0on-screen talent.',
    items: {
      a: {
        n: '01',
        h: 'What we did',
        p: '',
        subItems: ['Beauty Retouching', 'Jewelry Retouching', 'De-aging VFX', 'Color Correction'],
      },
      b: {
        n: '02',
        h: 'Tech Stack',
        p: '',
        subItems: ['Foundry Nuke', 'Mocha Pro', 'Adobe Photoshop', 'SilhouetteFX'],
      },
    },
  },
  other: {
    a: {
      h: 'Jewelry as\u00A0a\u00A0Force for\u00A0Legendary Empowerment',
      p:
        'Starring modern-day legends, the\u00A0campaign was ' +
        'an\u00A0open invitation to\u00A0create your own legend. ' +
        'To\u00A0enhance the\u00A0perfomance of\u00A0Julianne ' +
        'we\u00A0did color correction, skin/hair retouching, ' +
        'and silhouette editing.',
    },
    b: {
      h: '',
      p:
        'Using a combination of post-production tools, we made sure the\u00A0product looked right, ' +
        'removing the\u00A0artifacts, making the\u00A0colors match real life and\u00A0editing ' +
        'jewelry pieces to\u00A0help the\u00A0director communicate their vision.',
    },
    c: {
      h: 'Process',
      p:
        'John Hardy connects the individual to\u00A0the\u00A0myth, mastery, and\u00A0achievement ' +
        'of\u00A0artistry. We collaborated with the\u00A0production team to\u00A0work on\u00A0' +
        'Behind the\u00A0Scenes video, ensuring the\u00A0visuals matched the\u00A0quality of\u00A0the\u00A0campaign.',
    },
    d: {
      h: 'Impact',
      p:
        'Working with this team was an\u00A0awe-inspiring experience. Not only does this campaign celebrate feminine individuality, ' +
        'it also showcases the\u00A0duality of\u00A0women’s strength and\u00A0vulnerability they possess. in\u00A0the\u00A0imagery, as\u00A0in life, they are armed ' +
        'by\u00A0John Hardy to\u00A0take on\u00A0the\u00A0world.',
    },
    e: {
      h: 'Redefining Artistry',
      p:
        'Pushing beyond the\u00A0traditional convention of\u00A0women being gifted jewelry by\u00A0men, friends, ' +
        "and\u00A0family, John Hardy's Made For Legends platform calls on\u00A0women to\u00A0also acquire their own " +
        'pieces as\u00A0a\u00A0means to\u00A0strengthen spirit and bolster courage. We worked on\u00A0sequences with model-' +
        'activist Adwoa Aboah, who was invited to headline the campaign, exploring what it means to be a legend.',
    },
    f: {
      h: 'Jewelry Not Afraid to\u00A0Be Different. It’s Legendary.',
      p:
        'Every piece of the collection celebrates achievement and demonstrates the power of\u00A0personal ' +
        'expression. We leveraged the\u00A0tools we built working on\u00A0Julianne edit to\u00A0amplify ' +
        'the performance of Adwoa.',
    },
    g: {
      h: '',
      p:
        "Where jewelry advertising often plays it\u00A0safe, John Hardy isn't afraid to\u00A0be dramatic, inspiring " +
        "and\u00A0powerful. We ensured the imagery reflected John Hardy's high standard.",
    },
  },
  next: {
    h: 'Next Project',
    banner: {
      h: 'Made for\u00A0Legends',
      p:
        'Celebrating everyday strength, power and\u00A0unapologetic ' +
        'self-expression that lies within every woman',
      img: {
        src: `${URL_MEDIA}/jh-legends-jm-next.jpg`,
        thumbnail: `${URL_MEDIA}/jh-legends-jm-next-thumb.jpg`,
        width: 1360,
        height: 460,
      },
      logo: logoJH,
      fontColor: 'white',
      linkTo: ROUTES.PROJECTS_JOHNHARDY_JM,
    },
  },
  media: {
    img: {
      wide: {
        i2: {
          src: `${URL_MEDIA}/jh-legends-jm-wide-2.jpg`,
          thumbnail: `${URL_MEDIA}/jh-legends-jm-wide-2-thumb.jpg`,
          width: 1360,
          height: 770,
        },
      },
      square: {
        i1: {
          src: `${URL_MEDIA}/jh-legends-jm-square-1.jpg`,
          thumbnail: `${URL_MEDIA}/jh-legends-jm-square-1-thumb.jpg`,
          width: 670,
          height: 670,
        },
        i2: {
          src: `${URL_MEDIA}/jh-legends-jm-square-2.jpg`,
          thumbnail: `${URL_MEDIA}/jh-legends-jm-square-2-thumb.jpg`,
          width: 670,
          height: 670,
        },
        i3: {
          src: `${URL_MEDIA}/jh-legends-jm-square-3.jpg`,
          thumbnail: `${URL_MEDIA}/jh-legends-jm-square-3-thumb.jpg`,
          width: 670,
          height: 670,
        },
        i4: {
          src: `${URL_MEDIA}/jh-legends-jm-square-4.jpg`,
          thumbnail: `${URL_MEDIA}/jh-legends-jm-square-4-thumb.jpg`,
          width: 670,
          height: 670,
        },
        i5: {
          src: `${URL_MEDIA}/jh-legends-jm-square-5.jpg`,
          thumbnail: `${URL_MEDIA}/jh-legends-jm-square-5-thumb.jpg`,
          width: 670,
          height: 670,
        },
        i6: {
          src: `${URL_MEDIA}/jh-legends-jm-square-6.jpg`,
          thumbnail: `${URL_MEDIA}/jh-legends-jm-square-6-thumb.jpg`,
          width: 670,
          height: 670,
        },
      },
      squareS: {
        i1: {
          src: `${URL_MEDIA}/jh-legends-jm-square-s-1.jpg`,
          thumbnail: `${URL_MEDIA}/jh-legends-jm-square-s-1-thumb.jpg`,
          width: 440,
          height: 440,
        },
        i2: {
          src: `${URL_MEDIA}/jh-legends-jm-square-s-2.jpg`,
          thumbnail: `${URL_MEDIA}/jh-legends-jm-square-s-2-thumb.jpg`,
          width: 440,
          height: 440,
        },
        i3: {
          src: `${URL_MEDIA}/jh-legends-jm-square-s-3.jpg`,
          thumbnail: `${URL_MEDIA}/jh-legends-jm-square-s-3-thumb.jpg`,
          width: 440,
          height: 440,
        },
        i4: {
          src: `${URL_MEDIA}/jh-legends-jm-square-s-4.jpg`,
          thumbnail: `${URL_MEDIA}/jh-legends-jm-square-s-4-thumb.jpg`,
          width: 440,
          height: 440,
        },
        i5: {
          src: `${URL_MEDIA}/jh-legends-jm-square-s-5.jpg`,
          thumbnail: `${URL_MEDIA}/jh-legends-jm-square-s-5-thumb.jpg`,
          width: 440,
          height: 440,
        },
        i6: {
          src: `${URL_MEDIA}/jh-legends-jm-square-s-6.jpg`,
          thumbnail: `${URL_MEDIA}/jh-legends-jm-square-s-6-thumb.jpg`,
          width: 440,
          height: 440,
        },
        i7: {
          src: `${URL_MEDIA}/jh-legends-jm-square-s-7.jpg`,
          thumbnail: `${URL_MEDIA}/jh-legends-jm-square-s-7-thumb.jpg`,
          width: 440,
          height: 440,
        },
        i8: {
          src: `${URL_MEDIA}/jh-legends-jm-square-s-8.jpg`,
          thumbnail: `${URL_MEDIA}/jh-legends-jm-square-s-8-thumb.jpg`,
          width: 440,
          height: 440,
        },
      },
      squareSD: {
        i1: {
          src: `${URL_MEDIA}/jh-legends-jm-square-sd-1.jpg`,
          thumbnail: `${URL_MEDIA}/jh-legends-jm-square-sd-1-thumb.jpg`,
          width: 900,
          height: 440,
        },
        i2: {
          src: `${URL_MEDIA}/jh-legends-jm-square-sd-2.jpg`,
          thumbnail: `${URL_MEDIA}/jh-legends-jm-square-sd-2-thumb.jpg`,
          width: 900,
          height: 440,
        },
      },
    },
    video: {
      wide: {
        i1: {
          src: `${URL_MEDIA}/jh-legends-jm-wide-1.mp4`,
          width: 1920,
          height: 1080,
          poster: `${URL_MEDIA}/jh-legends-jm-wide-1.jpg`,
          posterThumbnail: `${URL_MEDIA}/jh-legends-jm-wide-1-thumb.jpg`,
          posterWidth: 1280,
          posterHeight: 720,
        },
        i3: {
          src: `${URL_MEDIA}/jh-legends-jm-wide-3.mp4`,
          width: 1920,
          height: 1080,
          poster: `${URL_MEDIA}/jh-legends-jm-wide-3.jpg`,
          posterThumbnail: `${URL_MEDIA}/jh-legends-jm-wide-3-thumb.jpg`,
          posterWidth: 1280,
          posterHeight: 720,
        },
        i4: {
          src: `${URL_MEDIA}/jh-legends-jm-wide-4.mp4`,
          width: 1920,
          height: 1080,
          poster: `${URL_MEDIA}/jh-legends-jm-wide-4.jpg`,
          posterThumbnail: `${URL_MEDIA}/jh-legends-jm-wide-4-thumb.jpg`,
          posterWidth: 1280,
          posterHeight: 720,
        },
      },
      vertical: {
        i1: {
          src: `${URL_MEDIA}/jh-legends-jm-vertical-1.mp4`,
          width: 670,
          height: 1000,
          poster: `${URL_MEDIA}/jh-legends-jm-vertical-1.jpg`,
          posterThumbnail: `${URL_MEDIA}/jh-legends-jm-vertical-1-thumb.jpg`,
          posterWidth: 670,
          posterHeight: 1000,
        },
        i2: {
          src: `${URL_MEDIA}/jh-legends-jm-vertical-2.mp4`,
          width: 670,
          height: 1000,
          poster: `${URL_MEDIA}/jh-legends-jm-vertical-2.jpg`,
          posterThumbnail: `${URL_MEDIA}/jh-legends-jm-vertical-2-thumb.jpg`,
          posterWidth: 670,
          posterHeight: 1000,
        },
        i3: {
          src: `${URL_MEDIA}/jh-legends-jm-vertical-3.mp4`,
          width: 670,
          height: 1000,
          poster: `${URL_MEDIA}/jh-legends-jm-vertical-3.jpg`,
          posterThumbnail: `${URL_MEDIA}/jh-legends-jm-vertical-3-thumb.jpg`,
          posterWidth: 670,
          posterHeight: 1000,
        },
        i4: {
          src: `${URL_MEDIA}/jh-legends-jm-vertical-4.mp4`,
          width: 670,
          height: 1000,
          poster: `${URL_MEDIA}/jh-legends-jm-vertical-4.jpg`,
          posterThumbnail: `${URL_MEDIA}/jh-legends-jm-vertical-4-thumb.jpg`,
          posterWidth: 670,
          posterHeight: 1000,
        },
        i5: {
          src: `${URL_MEDIA}/jh-legends-jm-vertical-5.mp4`,
          width: 670,
          height: 1000,
          poster: `${URL_MEDIA}/jh-legends-jm-vertical-5.jpg`,
          posterThumbnail: `${URL_MEDIA}/jh-legends-jm-vertical-5-thumb.jpg`,
          posterWidth: 670,
          posterHeight: 1000,
        },
        i6: {
          src: `${URL_MEDIA}/jh-legends-jm-vertical-6.mp4`,
          width: 670,
          height: 1000,
          poster: `${URL_MEDIA}/jh-legends-jm-vertical-6.jpg`,
          posterThumbnail: `${URL_MEDIA}/jh-legends-jm-vertical-6-thumb.jpg`,
          posterWidth: 670,
          posterHeight: 1000,
        },
      },
    },
  },
};
