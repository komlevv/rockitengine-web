import BlockHeroVideo from '../BlockHeroVideo/BlockHeroVideo';
import BlockServices from '../BlockServices/BlockServices';
import BlockProjects from '../BlockProjects/BlockProjects';
import BlockClients from '../BlockClients/BlockClients';
import BlockAbout from '../BlockAbout/BlockAbout';
import BlockContact from '../BlockContact/BlockContact';
import { THEMES } from '../../contexts/themeContext';
import { useSetTheme } from '../../hooks/useSetTheme';
import { useAnimateRefs } from '../../hooks/useAnimateRefs';
import { mapContentWithRefs } from '../../utils/utils';

const content = [
  <BlockHeroVideo />,
  <BlockServices />,
  <BlockProjects />,
  <BlockClients />,
  <BlockAbout />,
  <BlockContact />,
].flat();

const PageMain = () => {
  useSetTheme(THEMES.DEFAULT);
  const animateRefs = useAnimateRefs(content.length);
  return <>{mapContentWithRefs(content, animateRefs)}</>;
};

export default PageMain;
