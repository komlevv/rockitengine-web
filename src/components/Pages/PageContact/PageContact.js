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

const videoMain = `${URL_MEDIA}/contactVideo.mp4`;
const imgMain = `${URL_MEDIA}/contact-main.jpg`;

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
};

const PageContact = () => {
  useSetTheme(THEMES.DEFAULT);
  return (
    <Animate>
      <BlockHeroText headerText={data.main.h} paragraphText={data.main.p} />
      <BlockContainer>
        <Divider />
        <LinkContact />
        <Video autoplay loop muted src={videoMain} poster={imgMain} />
      </BlockContainer>
    </Animate>
  );
};

export default PageContact;
