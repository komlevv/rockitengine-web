import BlockHeroText from '../../BlockHeroText/BlockHeroText';
import BlockContainer from '../../BlockContainer/BlockContainer';
import Video from '../../Video/Video';
import Span from '../../Span/Span';
import { THEMES } from '../../../contexts/themeContext';
import { useSetTheme } from '../../../hooks/useSetTheme';
import Divider from '../../Divider/Divider';
import LinkContact from '../../LinkContact/LinkContact';
import Animate from '../../Animate/Animate';
import { URL_MEDIA } from '../../App/ROUTES';

const data = {
  main: {
    h: (
      <>
        Reach <Span>out</Span>
      </>
    ),
    p:
      'Weather you are a global brand, an enterprise, ' +
      'an agency, or a startup looking to grow and scale-up,' +
      'send us a message and spark a change, today. ',
  },
  media: {
    video: {
      wide: {
        i1: {
          src: `${URL_MEDIA}/contactVideo.mp4`,
          width: 1360,
          height: 460,
          poster: `${URL_MEDIA}/contact-main.jpg`,
          posterThumbnail: `${URL_MEDIA}/contact-main-thumb.jpg`,
          posterWidth: 1360,
          posterHeight: 460,
        },
      },
    },
  },
};

const PageContact = () => {
  useSetTheme(THEMES.DEFAULT);
  return (
    <Animate>
      <BlockHeroText headerText={data.main.h} paragraphText={data.main.p} />
      <BlockContainer>
        <Divider />
        <LinkContact />
        <Video
          autoplay
          loop
          muted
          src={data.media.video.wide.i1.src}
          poster={data.media.video.wide.i1.poster}
        />
      </BlockContainer>
    </Animate>
  );
};

export default PageContact;
