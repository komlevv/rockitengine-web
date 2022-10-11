import BlockHeroText from '../../BlockHeroText/BlockHeroText';
import videoMain from './videos/contactVideo.mp4';
import imgMain from './images/contact-main.jpg';
import './images/contact-main-thumb.jpg';
import BlockContainer from '../../BlockContainer/BlockContainer';
import Video from '../../Video/Video';
import Span from '../../Span/Span';
import { THEMES } from '../../../contexts/themeContext';
import { useSetTheme } from '../../../hooks/useSetTheme';
import { useAnimateRefs } from '../../../hooks/useAnimateRefs';
import Divider from '../../Divider/Divider';
import { mapContentWithRefs } from '../../../utils/utils';
import LinkContact from '../../LinkContact/LinkContact';

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

const content = [
  <BlockHeroText headerText={data.main.h} paragraphText={data.main.p} />,
  <BlockContainer>
    <Divider />
    <LinkContact />
    <Video autoplay loop muted src={videoMain} poster={imgMain} />
  </BlockContainer>,
].flat();

const PageContact = () => {
  useSetTheme(THEMES.DEFAULT);
  const animateRefs = useAnimateRefs(content.length);
  return <>{mapContentWithRefs(content, animateRefs)}</>;
};

export default PageContact;
