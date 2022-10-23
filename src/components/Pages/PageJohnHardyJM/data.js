import { ROUTES, URL_MEDIA } from '../../App/ROUTES';
import Span from '../../Span/Span';

const logoJH = `${URL_MEDIA}/jh-legends-logo.svg`;
const imgMain = `${URL_MEDIA}/jh-legends-jm-main.jpg`;
const imgNext = `${URL_MEDIA}/jh-legends-jm-next.jpg`;

export const data = {
  main: {
    logo: logoJH,
    h: (
      <>
        Made For <Span>Legends</Span>
      </>
    ),
    p:
      'Celebrating everyday strength, power and unapologetic ' +
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
    img: imgMain,
  },
  overview: {
    h: 'Overview',
    p:
      'Rooted in Balinese heritage, John Hardy’s new platform “Made For Legends” flipped the switch on the traditional ' +
      'jewelry model. We were called upon to handle post-production of the campaign, ensuring product and on-screen ' +
      'talent looked legendary.',
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
      h: 'Jewelry as a Force for Legendary Empowerment',
      p:
        '“A legacy is a story. It’s more than what you’ve ' +
        'accomplished. Jewelry tells a Story. It’s very personal.”' +
        '– Julianne Moore. ' +
        'Starring modern-day legends, the campaign was ' +
        'an open invitation to create your own legend. ' +
        'In order to perfect the perfomance of on-screen ' +
        'talent our work included color correction, skin ' +
        '& hair retouching, silhouette correction and ' +
        'de-aging visual effects.',
    },
    b: {
      h: '',
      p:
        'The campaign’s imagery is intended to be ' +
        'arresting and powerful just like the inner ' +
        '“warrior” of every woman who wears the ' +
        'pieces. Jewelry can be hard to get right ' +
        'on camera, causing all kinds of artifacts and ' +
        'unexpected tints. When you work with legendary ' +
        'talent, often you don’t have the luxury of ' +
        'reshooting the take, but we couldn’t allow ' +
        'the reality of hasty production workflows ' +
        'get in front of the creative vision. We made ' +
        'sure our client was well hedged against ' +
        'the uncertainty. Using a combination ' +
        'of post-production tools, we made the product ' +
        'look right, removing the artifacts, making ' +
        'the colors look like they do in real life and ' +
        'adding/removing jewelry pieces to help ' +
        'the director take the picture ' +
        'to a legendary level.',
    },
    c: {
      h: 'Process',
      p:
        "Pushing beyond the traditional convention of women being gifted jewelry by men, friends, and family, John Hardy's Made " +
        'For Legends platform calls on women to also acquire their own pieces as a means to strengthen spirit and bolster courage. ' +
        'Every piece celebrates achievement and demonstrates the power of personal expression.',
    },
    d: {
      h: 'Impact',
      p:
        'Working with this team was an awe-inspiring experience. Not only does this campaign celebrate feminine individuality, ' +
        'it also showcases the duality of women’s strength and vulnerability they possess. In the imagery, as in life, they are armed ' +
        'by John Hardy to take on the world.',
    },
    e: {
      h: 'Redefining Artistry',
      p:
        'Redefining what it means to be a legend, John Hardy connects the individual to the myth, mastery, and achievement of artistry. ' +
        'Building on the dynamic, pioneering legacy of Cynthia Hardy—adventurer, muse, and wife to founder John Hardy—women ' +
        'everywhere are invited to create their own legend through the art of wearing dramatic, powerful, and inspiring one-of-a-kind ' +
        'pieces handcrafted by Balinese  artisans at the Ubud workshop using techniques passed down from generations of Master ' +
        'Artisans.',
    },
    f: {
      h: 'Jewelry Not Afraid to Be Different. It’s Legendary.',
      p:
        'Perfect in its imperfection, John Hardy jewelry is as distinctive as the women who ' +
        'wear it. In the campaign, model/Activist Adwoa Aboah explore what it means to be a ' +
        'legend, telling the story of the Classic Chain, Modern Chain, and Naga Collections —' +
        'meaningful designs crafted from the raw power and strength of John ' +
        "Hardy's origin in Bali.",
    },
    g: {
      h: '',
      p:
        '“Made for Legends” is a call for women to live on their own terms and build their legend –\n' +
        'the campaign is made to cut through the noise: where jewelry advertising often plays it safe, ' +
        "John Hardy isn't afraid to be dramatic, inspiring and powerful.",
    },
  },
  next: {
    h: 'Next Project',
    banner: {
      h: 'Made For Legends',
      p:
        'Celebrating everyday strength, power and unapologetic ' +
        'self-expression that lies within every woman.',
      img: imgNext,
      // imgShort: imgNextShort,
      imgShort: imgNext,
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
      vertical: {
        i1: {
          src: `${URL_MEDIA}/jh-legends-jm-vertical-1.jpg`,
          thumbnail: `${URL_MEDIA}/jh-legends-jm-vertical-1-thumb.jpg`,
          width: 670,
          height: 1000,
        },
        i2: {
          src: `${URL_MEDIA}/jh-legends-jm-vertical-2.jpg`,
          thumbnail: `${URL_MEDIA}/jh-legends-jm-vertical-2-thumb.jpg`,
          width: 670,
          height: 1000,
        },
        i3: {
          src: `${URL_MEDIA}/jh-legends-jm-vertical-3.jpg`,
          thumbnail: `${URL_MEDIA}/jh-legends-jm-vertical-3-thumb.jpg`,
          width: 670,
          height: 1000,
        },
        i4: {
          src: `${URL_MEDIA}/jh-legends-jm-vertical-4.jpg`,
          thumbnail: `${URL_MEDIA}/jh-legends-jm-vertical-4-thumb.jpg`,
          width: 670,
          height: 1000,
        },
        i5: {
          src: `${URL_MEDIA}/jh-legends-jm-vertical-5.jpg`,
          thumbnail: `${URL_MEDIA}/jh-legends-jm-vertical-5-thumb.jpg`,
          width: 670,
          height: 1000,
        },
        i6: {
          src: `${URL_MEDIA}/jh-legends-jm-vertical-6.jpg`,
          thumbnail: `${URL_MEDIA}/jh-legends-jm-vertical-6-thumb.jpg`,
          width: 670,
          height: 1000,
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
          width: 1920,
          height: 1080,
          poster: `${URL_MEDIA}/jh-legends-jm-vertical-1.jpg`,
          posterThumbnail: `${URL_MEDIA}/jh-legends-jm-vertical-1-thumb.jpg`,
          posterWidth: 1280,
          posterHeight: 720,
        },
        i2: {
          src: `${URL_MEDIA}/jh-legends-jm-vertical-2.mp4`,
          width: 1920,
          height: 1080,
          poster: `${URL_MEDIA}/jh-legends-jm-vertical-2.jpg`,
          posterThumbnail: `${URL_MEDIA}/jh-legends-jm-vertical-2-thumb.jpg`,
          posterWidth: 1280,
          posterHeight: 720,
        },
        i3: {
          src: `${URL_MEDIA}/jh-legends-jm-vertical-3.mp4`,
          width: 1920,
          height: 1080,
          poster: `${URL_MEDIA}/jh-legends-jm-vertical-3.jpg`,
          posterThumbnail: `${URL_MEDIA}/jh-legends-jm-vertical-3-thumb.jpg`,
          posterWidth: 1280,
          posterHeight: 720,
        },
        i4: {
          src: `${URL_MEDIA}/jh-legends-jm-vertical-4.mp4`,
          width: 1920,
          height: 1080,
          poster: `${URL_MEDIA}/jh-legends-jm-vertical-4.jpg`,
          posterThumbnail: `${URL_MEDIA}/jh-legends-jm-vertical-4-thumb.jpg`,
          posterWidth: 1280,
          posterHeight: 720,
        },
        i5: {
          src: `${URL_MEDIA}/jh-legends-jm-vertical-5.mp4`,
          width: 1920,
          height: 1080,
          poster: `${URL_MEDIA}/jh-legends-jm-vertical-5.jpg`,
          posterThumbnail: `${URL_MEDIA}/jh-legends-jm-vertical-5-thumb.jpg`,
          posterWidth: 1280,
          posterHeight: 720,
        },
        i6: {
          src: `${URL_MEDIA}/jh-legends-jm-vertical-6.mp4`,
          width: 1920,
          height: 1080,
          poster: `${URL_MEDIA}/jh-legends-jm-vertical-6.jpg`,
          posterThumbnail: `${URL_MEDIA}/jh-legends-jm-vertical-6-thumb.jpg`,
          posterWidth: 1280,
          posterHeight: 720,
        },
      },
    },
  },
};
