import logoJH from './images/jh-legends-logo.svg';

import videoWide1 from './videos/jh-legends-adwoa-wide-1.mp4';
import videoWide3 from './videos/jh-legends-adwoa-wide-3.mp4';

import videoVertical1 from './videos/jh-legends-adwoa-vertical-1.mp4';
import videoVertical2 from './videos/jh-legends-adwoa-vertical-2.mp4';
import videoVertical3 from './videos/jh-legends-adwoa-vertical-3.mp4';

import imgMain from './images/jh-legends-adwoa-main.jpg';
import imgNext from './images/jh-legends-adwoa-next.jpg';

import imgWide1 from './images/jh-legends-adwoa-wide-1.jpg';
import imgWide2 from './images/jh-legends-adwoa-wide-2.jpg';
import imgWide3 from './images/jh-legends-adwoa-wide-3.jpg';

import imgSquare1 from './images/jh-legends-adwoa-square-1.jpg';
import imgSquare2 from './images/jh-legends-adwoa-square-2.jpg';

import imgSquareS1 from './images/jh-legends-adwoa-square-s-1.jpg';
import imgSquareS2 from './images/jh-legends-adwoa-square-s-2.jpg';
import imgSquareS3 from './images/jh-legends-adwoa-square-s-3.jpg';
import imgSquareS4 from './images/jh-legends-adwoa-square-s-4.jpg';
import imgSquareS5 from './images/jh-legends-adwoa-square-s-5.jpg';
import imgSquareS6 from './images/jh-legends-adwoa-square-s-6.jpg';
import imgSquareS7 from './images/jh-legends-adwoa-square-s-7.jpg';
import imgSquareS8 from './images/jh-legends-adwoa-square-s-8.jpg';

import imgSquareSD1 from './images/jh-legends-adwoa-square-sd-1.jpg';
import imgSquareSD2 from './images/jh-legends-adwoa-square-sd-2.jpg';

import imgVertical1 from './images/jh-legends-adwoa-vertical-1.jpg';
import imgVertical2 from './images/jh-legends-adwoa-vertical-2.jpg';
import imgVertical3 from './images/jh-legends-adwoa-vertical-3.jpg';
import { ROUTES } from '../../App/ROUTES';
import Span from '../../Span/Span';

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
    img: imgMain,
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
      img: imgNext,
      imgShort: imgNext,
      logo: logoJH,
      fontColor: 'white',
      linkTo: ROUTES.PROJECTS_JOHNHARDY_AA,
    },
  },
  media: {
    imgWide: [imgWide1, imgWide2, imgWide3],
    imgSquare: [imgSquare1, imgSquare2],
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
    imgVertical: [imgVertical1, imgVertical2, imgVertical3],
    video: [videoWide1, videoWide3],
    videoVertical: [videoVertical1, videoVertical2, videoVertical3],
  },
};
