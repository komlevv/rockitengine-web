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
      'Weather you are a\u00A0global brand, an\u00A0enterprise, ' +
      'an\u00A0agency, or a\u00A0startup looking to\u00A0grow and\u00A0scale-up,' +
      'send us a\u00A0message and\u00A0spark a\u00A0change, today. ',
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
        <Video autoplay loop muted metaData={data.media.video.wide.i1} />
      </BlockContainer>
    </Animate>
  );
};

export default PageContact;
