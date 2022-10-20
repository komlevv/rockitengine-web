import { ROUTES, URL_MEDIA } from '../../App/ROUTES';
import Span from '../../Span/Span';

const logoJM = `${URL_MEDIA}/jm-upgrade-logo.svg`;

const videoWide1 = `${URL_MEDIA}/jm-upgrade-wide-1.mp4`;
const videoWide2 = `${URL_MEDIA}/jm-upgrade-wide-2.mp4`;
const videoWide3 = `${URL_MEDIA}/jm-upgrade-wide-3.mp4`;
const videoWide4 = `${URL_MEDIA}/jm-upgrade-wide-4.mp4`;
const videoWide5 = `${URL_MEDIA}/jm-upgrade-wide-5.mp4`;

const imgMain = `${URL_MEDIA}/jm-upgrade-main.jpg`;
const imgMainThumb = `${URL_MEDIA}/jm-upgrade-main-thumb.jpg`;
const imgNext = `${URL_MEDIA}/jm-upgrade-next.jpg`;
const imgNextThumb = `${URL_MEDIA}/jm-upgrade-next-thumb.jpg`;
// const imgNextShort = URL_MEDIA  + 'jm-upgrade-next-short.jpg'

const imgWide1 = `${URL_MEDIA}/jm-upgrade-wide-1.jpg`;
const imgWide1Thumb = `${URL_MEDIA}/jm-upgrade-wide-1-thumb.jpg`;
const imgWide2 = `${URL_MEDIA}/jm-upgrade-wide-2.jpg`;
const imgWide2Thumb = `${URL_MEDIA}/jm-upgrade-wide-2-thumb.jpg`;
const imgWide3 = `${URL_MEDIA}/jm-upgrade-wide-3.jpg`;
const imgWide3Thumb = `${URL_MEDIA}/jm-upgrade-wide-3-thumb.jpg`;
const imgWide4 = `${URL_MEDIA}/jm-upgrade-wide-4.jpg`;
const imgWide4Thumb = `${URL_MEDIA}/jm-upgrade-wide-4-thumb.jpg`;
const imgWide5 = `${URL_MEDIA}/jm-upgrade-wide-5.jpg`;
const imgWide5Thumb = `${URL_MEDIA}/jm-upgrade-wide-5-thumb.jpg`;
const imgWide6 = `${URL_MEDIA}/jm-upgrade-wide-6.jpg`;
const imgWide6Thumb = `${URL_MEDIA}/jm-upgrade-wide-6-thumb.jpg`;

const imgSquare1 = `${URL_MEDIA}/jm-upgrade-square-1.jpg`;
const imgSquare1Thumb = `${URL_MEDIA}/jm-upgrade-square-1-thumb.jpg`;
const imgSquare2 = `${URL_MEDIA}/jm-upgrade-square-2.jpg`;
const imgSquare2Thumb = `${URL_MEDIA}/jm-upgrade-square-2-thumb.jpg`;
const imgSquare3 = `${URL_MEDIA}/jm-upgrade-square-3.jpg`;
const imgSquare3Thumb = `${URL_MEDIA}/jm-upgrade-square-3-thumb.jpg`;
const imgSquare4 = `${URL_MEDIA}/jm-upgrade-square-4.jpg`;
const imgSquare4Thumb = `${URL_MEDIA}/jm-upgrade-square-4-thumb.jpg`;
const imgSquare5 = `${URL_MEDIA}/jm-upgrade-square-5.jpg`;
const imgSquare5Thumb = `${URL_MEDIA}/jm-upgrade-square-5-thumb.jpg`;
const imgSquare6 = `${URL_MEDIA}/jm-upgrade-square-6.jpg`;
const imgSquare6Thumb = `${URL_MEDIA}/jm-upgrade-square-6-thumb.jpg`;

const imgSquareS1 = `${URL_MEDIA}/jm-upgrade-square-s-1.jpg`;
const imgSquareS1Thumb = `${URL_MEDIA}/jm-upgrade-square-s-1-thumb.jpg`;
const imgSquareS2 = `${URL_MEDIA}/jm-upgrade-square-s-2.jpg`;
const imgSquareS2Thumb = `${URL_MEDIA}/jm-upgrade-square-s-2-thumb.jpg`;
const imgSquareS3 = `${URL_MEDIA}/jm-upgrade-square-s-3.jpg`;
const imgSquareS3Thumb = `${URL_MEDIA}/jm-upgrade-square-s-3-thumb.jpg`;
const imgSquareS4 = `${URL_MEDIA}/jm-upgrade-square-s-4.jpg`;
const imgSquareS4Thumb = `${URL_MEDIA}/jm-upgrade-square-s-4-thumb.jpg`;
const imgSquareS5 = `${URL_MEDIA}/jm-upgrade-square-s-5.jpg`;
const imgSquareS5Thumb = `${URL_MEDIA}/jm-upgrade-square-s-5-thumb.jpg`;
const imgSquareS6 = `${URL_MEDIA}/jm-upgrade-square-s-6.jpg`;
const imgSquareS6Thumb = `${URL_MEDIA}/jm-upgrade-square-s-6-thumb.jpg`;

const imgVertical1 = `${URL_MEDIA}/jm-upgrade-vertical-1.jpg`;
const imgVertical1Thumb = `${URL_MEDIA}/jm-upgrade-vertical-1-thumb.jpg`;

export const data = {
  main: {
    logo: logoJM,
    h: (
      <>
        Jessie Murph <Span>“Upgrade”</Span>
      </>
    ),
    p: 'An authentic performance completed with a fierce lyrical structure.',
    items: [
      {
        h: 'Industry',
        p: 'Music',
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
      'Our partners directed “Upgrade” — a debut music video by an aspiring alternative-pop ' +
      'artist Jessie Murph. We were called upon to handle a variety of post-production tasks, ' +
      'as well as to enhance live action with the VFX of snow flurry.',
    items: {
      a: {
        n: '01',
        h: 'What we did',
        p: '',
        subItems: [
          '3d Camera Tracking',
          'Matchmoving',
          'Snow Simulation',
          'Compositing',
          'Color Correction',
          'Cleanup',
        ],
      },
      b: {
        n: '02',
        h: 'Tech Stack',
        p: '',
        subItems: [
          'Autodesk Maya',
          'Maxon Redshift',
          'Adobe Premiere',
          'Foundry Nuke',
          'Adobe Photoshop',
          'Pixel Farm PFTrack',
        ],
      },
    },
  },
  other: {
    a: {
      h: 'Process',
      p:
        'The live action footage we received incorporated several independent shots fused together to look like one seamless clip. ' +
        'To simulate the snow effect, we were to recreate the scene in 3d from scratch. Each shot was to be 3d tracked, matching real ' +
        'life lens to 3-dimensional one. We then rebuilt the venue in 3d space, where we could run the simulations for the snow ' +
        'flurry, which we would later render out and compose into the sequence. While we were busy with the 3d side of things, ' +
        'the other part of our team focused on cleaning up the footage artifacts, such as tracking markers, exit signs and light leaks, ' +
        'creating rotoscoping masks to simplify the compositing step later on.',
    },
    b: {
      h: 'Matchmoving',
      p:
        'Since live action footage was not a truly continuous sequence, varying in focal distance and position within the venue, ' +
        'each camera had to be tracked separately. Missing parts of the track were either animated by hand or interpolated. ' +
        'The cameras were later stitched together to optimize the simulation workflow.',
    },
    c: {
      h: 'Cleanup Tasks',
      p: '',
      items: ['Exit Sign Removal', 'Tracking Markers Removal', 'Light Leaks Removal'],
    },
    d: {
      h: 'Simulating Flurry',
      p: 'Autodesk Maya was used to reconstuct the scene in 3d and simulate the effect of snow flurry.',
    },
    e: {
      h: 'Look Development',
      p:
        'Our client was open to experiment with the look, so we generated a number of options for the snow motion and' +
        'for the snowflake design itself. The approved effect we arrived at was composited into the sequence, enhancing' +
        'the emotional immersion of the video.',
    },
    f: {
      h: 'Impact',
      p:
        'The final clip premiered on YouTube with 3.000.000+ views ' +
        'marking a successful video debut for the aspiring artist.',
    },
  },
  next: {
    h: 'Next Project',
    banner: {
      h: 'Jessie Murph “Upgrade”',
      p: 'An authentic performance completed with a fierce lyrical structure',
      img: imgNext,
      // imgShort: imgNextShort,
      imgShort: imgNext,
      logo: logoJM,
      fontColor: 'white',
      linkTo: ROUTES.PROJECTS_JM_UPGRADE,
    },
  },
  media: {
    imgWide: [imgWide1, imgWide2, imgWide3, imgWide4, imgWide5, imgWide6],
    imgSquare: [imgSquare1, imgSquare2, imgSquare3, imgSquare4, imgSquare5, imgSquare6],
    imgSquareS: [imgSquareS1, imgSquareS2, imgSquareS3, imgSquareS4, imgSquareS5, imgSquareS6],
    imgSquareSD: [],
    imgVertical: [imgVertical1],
    video: [videoWide1, videoWide2, videoWide3, videoWide4, videoWide5],
    thumbs: [
      imgMainThumb,
      imgNextThumb,
      imgWide1Thumb,
      imgWide2Thumb,
      imgWide3Thumb,
      imgWide4Thumb,
      imgWide5Thumb,
      imgWide6Thumb,
      imgSquare1Thumb,
      imgSquare2Thumb,
      imgSquare3Thumb,
      imgSquare4Thumb,
      imgSquare5Thumb,
      imgSquare6Thumb,
      imgSquareS1Thumb,
      imgSquareS2Thumb,
      imgSquareS3Thumb,
      imgSquareS4Thumb,
      imgSquareS5Thumb,
      imgSquareS6Thumb,
      imgVertical1Thumb,
    ],
  },
};
