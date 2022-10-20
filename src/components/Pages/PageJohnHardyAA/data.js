import { ROUTES, URL_MEDIA } from '../../App/ROUTES';
import Span from '../../Span/Span';

const logoJH = `${URL_MEDIA}/jh-legends-logo.svg`;

const videoWide1 = `${URL_MEDIA}/jh-legends-adwoa-wide-1.mp4`;
const videoWide3 = `${URL_MEDIA}/jh-legends-adwoa-wide-3.mp4`;

const videoVertical1 = `${URL_MEDIA}/jh-legends-adwoa-vertical-1.mp4`;
const videoVertical2 = `${URL_MEDIA}/jh-legends-adwoa-vertical-2.mp4`;
const videoVertical3 = `${URL_MEDIA}/jh-legends-adwoa-vertical-3.mp4`;

const imgMain = `${URL_MEDIA}/jh-legends-adwoa-main.jpg`;
const imgMainThumb = `${URL_MEDIA}/jh-legends-adwoa-main-thumb.jpg`;
const imgNext = `${URL_MEDIA}/jh-legends-adwoa-next.jpg`;
const imgNextThumb = `${URL_MEDIA}/jh-legends-adwoa-next-thumb.jpg`;

const imgWide1 = `${URL_MEDIA}/jh-legends-adwoa-wide-1.jpg`;
const imgWide1Thumb = `${URL_MEDIA}/jh-legends-adwoa-wide-1-thumb.jpg`;
const imgWide2 = `${URL_MEDIA}/jh-legends-adwoa-wide-2.jpg`;
const imgWide2Thumb = `${URL_MEDIA}/jh-legends-adwoa-wide-2-thumb.jpg`;
const imgWide3 = `${URL_MEDIA}/jh-legends-adwoa-wide-3.jpg`;
const imgWide3Thumb = `${URL_MEDIA}/jh-legends-adwoa-wide-3-thumb.jpg`;

const imgSquare1 = `${URL_MEDIA}/jh-legends-adwoa-square-1.jpg`;
const imgSquare1Thumb = `${URL_MEDIA}/jh-legends-adwoa-square-1-thumb.jpg`;
const imgSquare2 = `${URL_MEDIA}/jh-legends-adwoa-square-2.jpg`;
const imgSquare2Thumb = `${URL_MEDIA}/jh-legends-adwoa-square-2-thumb.jpg`;

const imgSquareS1 = `${URL_MEDIA}/jh-legends-adwoa-square-s-1.jpg`;
const imgSquareS1Thumb = `${URL_MEDIA}/jh-legends-adwoa-square-s-1-thumb.jpg`;
const imgSquareS2 = `${URL_MEDIA}/jh-legends-adwoa-square-s-2.jpg`;
const imgSquareS2Thumb = `${URL_MEDIA}/jh-legends-adwoa-square-s-2-thumb.jpg`;
const imgSquareS3 = `${URL_MEDIA}/jh-legends-adwoa-square-s-3.jpg`;
const imgSquareS3Thumb = `${URL_MEDIA}/jh-legends-adwoa-square-s-3-thumb.jpg`;
const imgSquareS4 = `${URL_MEDIA}/jh-legends-adwoa-square-s-4.jpg`;
const imgSquareS4Thumb = `${URL_MEDIA}/jh-legends-adwoa-square-s-4-thumb.jpg`;
const imgSquareS5 = `${URL_MEDIA}/jh-legends-adwoa-square-s-5.jpg`;
const imgSquareS5Thumb = `${URL_MEDIA}/jh-legends-adwoa-square-s-5-thumb.jpg`;
const imgSquareS6 = `${URL_MEDIA}/jh-legends-adwoa-square-s-6.jpg`;
const imgSquareS6Thumb = `${URL_MEDIA}/jh-legends-adwoa-square-s-6-thumb.jpg`;
const imgSquareS7 = `${URL_MEDIA}/jh-legends-adwoa-square-s-7.jpg`;
const imgSquareS7Thumb = `${URL_MEDIA}/jh-legends-adwoa-square-s-7-thumb.jpg`;
const imgSquareS8 = `${URL_MEDIA}/jh-legends-adwoa-square-s-8.jpg`;
const imgSquareS8Thumb = `${URL_MEDIA}/jh-legends-adwoa-square-s-8-thumb.jpg`;

const imgSquareSD1 = `${URL_MEDIA}/jh-legends-adwoa-square-sd-1.jpg`;
const imgSquareSD1Thumb = `${URL_MEDIA}/jh-legends-adwoa-square-sd-1-thumb.jpg`;
const imgSquareSD2 = `${URL_MEDIA}/jh-legends-adwoa-square-sd-2.jpg`;
const imgSquareSD2Thumb = `${URL_MEDIA}/jh-legends-adwoa-square-sd-2-thumb.jpg`;

const imgVertical1 = `${URL_MEDIA}/jh-legends-adwoa-vertical-1.jpg`;
const imgVertical1Thumb = `${URL_MEDIA}/jh-legends-adwoa-vertical-1-thumb.jpg`;
const imgVertical2 = `${URL_MEDIA}/jh-legends-adwoa-vertical-2.jpg`;
const imgVertical2Thumb = `${URL_MEDIA}/jh-legends-adwoa-vertical-2-thumb.jpg`;
const imgVertical3 = `${URL_MEDIA}/jh-legends-adwoa-vertical-3.jpg`;
const imgVertical3Thumb = `${URL_MEDIA}/jh-legends-adwoa-vertical-3-thumb.jpg`;

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
    thumbs: [
      imgMainThumb,
      imgNextThumb,
      imgWide1Thumb,
      imgWide2Thumb,
      imgWide3Thumb,
      imgSquare1Thumb,
      imgSquare2Thumb,
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
      imgVertical3Thumb,
    ],
  },
};
