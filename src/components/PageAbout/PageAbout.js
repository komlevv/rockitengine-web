import BlockHeroText from '../BlockHeroText/BlockHeroText';
import BlockContainer from '../BlockContainer/BlockContainer';
import HeaderM from '../HeaderM/HeaderM';
import ImageFullWide from '../ImageFullWide/ImageFullWide';
import ListItemBig from '../ListItemBig/ListItemBig';
import BlockTeaserProjects from '../BlockTeaserProjects/BlockTeaserProjects';
import BlockContact from '../BlockContact/BlockContact';
import { data } from './data';
import { THEMES } from '../../contexts/themeContext';
import { useSetTheme } from '../../hooks/useSetTheme';
import { useAnimateRefs } from '../../hooks/useAnimateRefs';
import Divider from '../Divider/Divider';
import { mapContentWithRefs } from '../../utils/utils';
import Gap from '../Gap/Gap';

const content = [
  <BlockHeroText headerText={data.main.h} paragraphText={data.main.p} />,
  <BlockContainer>
    <Divider />
    <HeaderM headerText={data.ourValues.h} />
    <ImageFullWide src={data.media.imgWide[0]} />
  </BlockContainer>,
  Object.keys(data.ourValues.items).map((el, i) => (
    <ListItemBig key={i} data={data.ourValues.items[el]} />
  )),
  <Gap />,
  <BlockContainer>
    <Divider />
    <HeaderM headerText={data.work.h} />
    <ImageFullWide src={data.media.imgWide[1]} />
  </BlockContainer>,
  Object.keys(data.work.items).map((el, i) => <ListItemBig key={i} data={data.work.items[el]} />),
  <Gap />,
  <BlockContainer>
    <Divider />
    <HeaderM headerText={data.process.h} />
    <ImageFullWide src={data.media.imgWide[2]} />
  </BlockContainer>,
  Object.keys(data.process.items).map((el, i) => (
    <ListItemBig key={i} data={data.process.items[el]} />
  )),
  <Gap />,
  <BlockTeaserProjects />,
  <BlockContact />,
].flat();

const PageAbout = () => {
  useSetTheme(THEMES.DEFAULT);
  const animateRefs = useAnimateRefs(content.length);
  return <>{mapContentWithRefs(content, animateRefs)}</>;
};

export default PageAbout;
