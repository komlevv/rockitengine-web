import BlockHeroText from '../BlockHeroText/BlockHeroText';
import HeaderM from '../HeaderM/HeaderM';
import BannerHero from '../BannerHero/BannerHero';
import BlockClients from '../BlockClients/BlockClients';
import BlockContact from '../BlockContact/BlockContact';

import { data as dataEquinox } from '../ProjectPages/PageEquinox/data';
import { data as dataCartier } from '../ProjectPages/PageCartier/data';
import { data as dataAway } from '../ProjectPages/PageAway/data';
import { data as dataChopard } from '../ProjectPages/PageChopard/data';
import { data as dataJMUpgrade } from '../ProjectPages/PageJMUpgrade/data';
import { data as dataJohnHardyJM } from '../ProjectPages/PageJohnHardyJM/data';
import { data as dataJohnHardyAA } from '../ProjectPages/PageJohnHardyAA/data';
import { data as dataSpotifyHulu } from '../ProjectPages/PageSpotifyHulu/data';
import { data as dataGreyGoose } from '../ProjectPages/PageGreyGoose/data';
import Span from '../Span/Span';
import { THEMES } from '../../contexts/themeContext';
import { useSetTheme } from '../../hooks/useSetTheme';
import { useAnimateRefs } from '../../hooks/useAnimateRefs';
import Divider from '../Divider/Divider';
import { mapContentWithRefs } from '../../utils/utils';
import Gap from '../Gap/Gap';

const data = {
  main: {
    h: (
      <>
        Our <Span>work</Span>
      </>
    ),
    p:
      'We build digital solutions for global brands, ' +
      'enterprises, agencies, and startups that want to ' +
      'grow and scale-up. Take a look at our selected projects ' +
      'from various industries.',
  },
  cases: {
    h: 'Case Studies',
    items: [
      dataEquinox,
      dataJMUpgrade,
      dataChopard,
      dataJohnHardyJM,
      dataGreyGoose,
      dataJohnHardyAA,
      dataSpotifyHulu,
      dataAway,
      dataCartier,
    ],
  },
};

const content = [
  <BlockHeroText headerText={data.main.h} paragraphText={data.main.p} />,
  <Divider />,
  <HeaderM headerText={data.cases.h} />,
  data.cases.items.map((dataPage, i) => (
    <BannerHero
      linkTo={dataPage.next.banner.linkTo}
      key={i}
      headerText={dataPage.next.banner.h}
      paragraphText={dataPage.next.banner.p}
      imgSrc={dataPage.next.banner.imgShort}
      logoSrc={dataPage.next.banner.logo}
      fontColor={dataPage.next.banner.fontColor}
    />
  )),
  <Gap />,
  <BlockClients />,
  <BlockContact />,
].flat();

const PageProjects = () => {
  useSetTheme(THEMES.DEFAULT);
  const animateRefs = useAnimateRefs(content.length);
  return <>{mapContentWithRefs(content, animateRefs)}</>;
};

export default PageProjects;
