import { useId } from 'react';
import BlockHeroText from '../../BlockHeroText/BlockHeroText';
import BlockContainer from '../../BlockContainer/BlockContainer';
import HeaderM from '../../HeaderM/HeaderM';
import ImageFullWide from '../../ImageFullWide/ImageFullWide';
import ListItemBig from '../../ListItemBig/ListItemBig';
import BlockTeaserProjects from '../../BlockTeaserProjects/BlockTeaserProjects';
import BlockContact from '../../BlockContact/BlockContact';
import { data } from './data';
import { THEMES } from '../../../contexts/themeContext';
import { useSetTheme } from '../../../hooks/useSetTheme';
import Divider from '../../Divider/Divider';
import Gap from '../../Gap/Gap';
import Animate from '../../Animate/Animate';

const PageAbout = () => {
  const id = useId();
  useSetTheme(THEMES.DEFAULT);
  return (
    <Animate>
      <BlockHeroText headerText={data.main.h} paragraphText={data.main.p} />
      <BlockContainer>
        <Divider />
        <HeaderM headerText={data.ourValues.h} />
        <ImageFullWide loading="eager" metaData={data.media.img.wide.i1} />
      </BlockContainer>
      {Object.keys(data.ourValues.items).map((el, i) => (
        <ListItemBig key={`${id}-${i}`} data={data.ourValues.items[el]} />
      ))}
      <Gap />
      <BlockContainer>
        <Divider />
        <HeaderM headerText={data.work.h} />
        <ImageFullWide metaData={data.media.img.wide.i2} />
      </BlockContainer>
      {Object.keys(data.work.items).map((el, i) => (
        <ListItemBig key={`${id}-${i}`} data={data.work.items[el]} />
      ))}
      <Gap />
      <BlockContainer>
        <Divider />
        <HeaderM headerText={data.process.h} />
        <ImageFullWide metaData={data.media.img.wide.i3} />
      </BlockContainer>
      {Object.keys(data.process.items).map((el, i) => (
        <ListItemBig key={`${id}-${i}`} data={data.process.items[el]} />
      ))}
      <Gap />
      <BlockTeaserProjects />
      <BlockContact />
    </Animate>
  );
};

export default PageAbout;
