import logoJH from './images/jh-legends-logo.svg';

import videoWide1 from './videos/jh-legends-jm-wide-1.mp4';
import videoWide3 from './videos/jh-legends-jm-wide-3.mp4';
import videoWide4 from './videos/jh-legends-jm-wide-4.mp4';

import videoVertical1 from './videos/jh-legends-jm-vertical-1.mp4';
import videoVertical2 from './videos/jh-legends-jm-vertical-2.mp4';
import videoVertical3 from './videos/jh-legends-jm-vertical-3.mp4';
import videoVertical4 from './videos/jh-legends-jm-vertical-4.mp4';
import videoVertical5 from './videos/jh-legends-jm-vertical-5.mp4';
import videoVertical6 from './videos/jh-legends-jm-vertical-6.mp4';

import imgMain from './images/jh-legends-jm-main.jpg';
import imgNext from './images/jh-legends-jm-next.jpg';
// import imgNextShort from './images/jh-legends-jm-next-short.jpg';

import imgWide1 from './images/jh-legends-jm-wide-1.jpg';
import imgWide2 from './images/jh-legends-jm-wide-2.jpg';
import imgWide3 from './images/jh-legends-jm-wide-3.jpg';
import imgWide4 from './images/jh-legends-jm-wide-4.jpg';

import imgSquare1 from './images/jh-legends-jm-square-1.jpg';
import imgSquare2 from './images/jh-legends-jm-square-2.jpg';
import imgSquare3 from './images/jh-legends-jm-square-3.jpg';
import imgSquare4 from './images/jh-legends-jm-square-4.jpg';
import imgSquare5 from './images/jh-legends-jm-square-5.jpg';
import imgSquare6 from './images/jh-legends-jm-square-6.jpg';

import imgSquareS1 from './images/jh-legends-jm-square-s-1.jpg';
import imgSquareS2 from './images/jh-legends-jm-square-s-2.jpg';
import imgSquareS3 from './images/jh-legends-jm-square-s-3.jpg';
import imgSquareS4 from './images/jh-legends-jm-square-s-4.jpg';
import imgSquareS5 from './images/jh-legends-jm-square-s-5.jpg';
import imgSquareS6 from './images/jh-legends-jm-square-s-6.jpg';
import imgSquareS7 from './images/jh-legends-jm-square-s-7.jpg';
import imgSquareS8 from './images/jh-legends-jm-square-s-8.jpg';

import imgSquareSD1 from './images/jh-legends-jm-square-sd-1.jpg';
import imgSquareSD2 from './images/jh-legends-jm-square-sd-2.jpg';

import imgVertical1 from './images/jh-legends-jm-vertical-1.jpg';
import imgVertical2 from './images/jh-legends-jm-vertical-2.jpg';
import imgVertical3 from './images/jh-legends-jm-vertical-3.jpg';
import imgVertical4 from './images/jh-legends-jm-vertical-4.jpg';
import imgVertical5 from './images/jh-legends-jm-vertical-5.jpg';
import imgVertical6 from './images/jh-legends-jm-vertical-6.jpg';
import { ROUTES } from '../../App/ROUTES';
import Span from '../../Span/Span';

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
    imgWide: [imgWide1, imgWide2, imgWide3, imgWide4],
    imgSquare: [imgSquare1, imgSquare2, imgSquare3, imgSquare4, imgSquare5, imgSquare6],
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
    imgVertical: [
      imgVertical1,
      imgVertical2,
      imgVertical3,
      imgVertical4,
      imgVertical5,
      imgVertical6,
    ],
    video: [videoWide1, videoWide3, videoWide4],
    videoVertical: [
      videoVertical1,
      videoVertical2,
      videoVertical3,
      videoVertical4,
      videoVertical5,
      videoVertical6,
    ],
  },
};
