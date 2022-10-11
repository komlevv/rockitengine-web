import BlockHeroText from '../../BlockHeroText/BlockHeroText';
import ListItemBig from '../../ListItemBig/ListItemBig';
import BlockTools from '../../BlockTools/BlockTools';
import BlockTeaserProjects from '../../BlockTeaserProjects/BlockTeaserProjects';
import ImageFullWide from '../../ImageFullWide/ImageFullWide';
import BlockContainer from '../../BlockContainer/BlockContainer';
import HeaderM from '../../HeaderM/HeaderM';
import BlockContact from '../../BlockContact/BlockContact';
import { data } from './data';
import { THEMES } from '../../../contexts/themeContext';
import { useAnimateRefs } from '../../../hooks/useAnimateRefs';
import { useSetTheme } from '../../../hooks/useSetTheme';
import Video from '../../Video/Video';
import Divider from '../../Divider/Divider';
import { mapContentWithRefs, uuid } from '../../../utils/utils';
import Gap from '../../Gap/Gap';

const content = [
  <BlockHeroText headerText={data.main.h} paragraphText={data.main.p} />,
  <BlockContainer>
    <Divider />
    <HeaderM headerText={data.services.h} />
    <ImageFullWide loading="eager" src={data.media.imgWide[0]} />
  </BlockContainer>,
  Object.keys(data.services.items).map((el) => (
    <ListItemBig key={uuid()} data={data.services.items[el]} />
  )),
  <Gap />,
  <BlockContainer>
    <Divider />
    <HeaderM headerText={data.reel.h} />
    <Video controls poster={data.media.imgWide[1]} src={data.media.video[0]} />
  </BlockContainer>,
  <BlockTools data={data.tools} />,
  <BlockTeaserProjects />,
  <BlockContact />,
].flat();

const PageServices = () => {
  useSetTheme(THEMES.DEFAULT);
  const animateRefs = useAnimateRefs(content.length);
  return <>{mapContentWithRefs(content, animateRefs)}</>;
};

export default PageServices;
