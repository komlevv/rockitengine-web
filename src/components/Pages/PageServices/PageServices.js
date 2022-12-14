import { useId } from 'react';
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
import { useSetTheme } from '../../../hooks/useSetTheme';
import Video from '../../Video/Video';
import Divider from '../../Divider/Divider';
import Gap from '../../Gap/Gap';
import Animate from '../../Animate/Animate';

const PageServices = () => {
  useSetTheme(THEMES.DEFAULT);
  const id = useId();
  return (
    <Animate>
      <BlockHeroText headerText={data.main.h} paragraphText={data.main.p} />
      <BlockContainer>
        <Divider />
        <HeaderM headerText={data.services.h} />
        <ImageFullWide loading="eager" metaData={data.media.img.wide.i1} />
      </BlockContainer>
      {Object.keys(data.services.items).map((el, i) => (
        <ListItemBig key={`${id}-${i}`} data={data.services.items[el]} />
      ))}
      <Gap />
      <BlockContainer>
        <Divider />
        <HeaderM headerText={data.reel.h} />
        <Video controls metaData={data.media.video.wide.i1} />
      </BlockContainer>
      <BlockTools data={data.tools} />
      <BlockTeaserProjects />
      <BlockContact />
    </Animate>
  );
};

export default PageServices;
