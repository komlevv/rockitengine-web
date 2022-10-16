import BlockHeroVideo from '../../BlockHeroVideo/BlockHeroVideo';
import BlockServices from '../../BlockServices/BlockServices';
import BlockProjects from '../../BlockProjects/BlockProjects';
import BlockClients from '../../BlockClients/BlockClients';
import BlockAbout from '../../BlockAbout/BlockAbout';
import BlockContact from '../../BlockContact/BlockContact';
import { THEMES } from '../../../contexts/themeContext';
import { useSetTheme } from '../../../hooks/useSetTheme';
import Animate from '../../Animate/Animate';

const PageMain = () => {
  useSetTheme(THEMES.DEFAULT);
  return (
    <Animate>
      <BlockHeroVideo />
      <BlockServices />
      <BlockProjects />
      <BlockClients />
      <BlockAbout />
      <BlockContact />
    </Animate>
  );
};

export default PageMain;
