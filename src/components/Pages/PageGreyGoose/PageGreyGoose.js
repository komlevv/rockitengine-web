import { useId } from 'react';
import BlockProjectMain from '../../BlockProjectMain/BlockProjectMain';
import BlockOverview from '../../BlockOverview/BlockOverview';
import BlockProjectNext from '../../BlockProjectNext/BlockProjectNext';
import BlockContact from '../../BlockContact/BlockContact';
import BlockHeroTextM from '../../BlockHeroTextM/BlockHeroTextM';
import GridContainerHalf from '../../GridContainerHalf/GridContainerHalf';
import ImageFullWide from '../../ImageFullWide/ImageFullWide';
import ImageHalfWide from '../../ImageHalfWide/ImageHalfWide';
import ImageOneThird from '../../ImageOneThird/ImageOneThird';
import HeaderS from '../../HeaderS/HeaderS';
import ListItem from '../../ListItem/ListItem';

import { data } from './data';
import { data as dataNext } from '../PageEquinox/data';
import { THEMES } from '../../../contexts/themeContext';
import { useSetTheme } from '../../../hooks/useSetTheme';
import Gap from '../../Gap/Gap';
import Animate from '../../Animate/Animate';

const PageGreyGoose = () => {
  const id = useId();
  useSetTheme(THEMES.GREYGOOSE);
  return (
    <Animate>
      <BlockProjectMain data={data.main} />
      <BlockOverview data={data.overview} />
      <ImageFullWide src={data.media.img.wide.i1.src} />
      <Gap />
      <BlockHeroTextM headerText={data.other.a.h} paragraphText={data.other.a.p} />
      <ImageFullWide src={data.media.img.wide.i2.src} />
      <GridContainerHalf>
        <HeaderS headerText={data.other.d.h} />
        {data.other.d.items.map((itemText, i) => (
          <ListItem text={itemText} key={`${id}-${i}`} />
        ))}
      </GridContainerHalf>
      <ImageHalfWide src={data.media.img.wide.i3.src} />
      <ImageHalfWide src={data.media.img.square.i1.src} />
      <ImageHalfWide src={data.media.img.square.i2.src} />
      <Gap />
      <BlockHeroTextM headerText={data.other.b.h} paragraphText={data.other.b.p} />
      <ImageFullWide src={data.media.img.wide.i4.src} />
      <ImageHalfWide src={data.media.img.vertical.i1.src} />
      <ImageHalfWide src={data.media.img.vertical.i2.src} />
      <ImageFullWide src={data.media.img.wide.i5.src} />
      <ImageHalfWide src={data.media.img.vertical.i3.src} />
      <ImageHalfWide src={data.media.img.vertical.i4.src} />
      <ImageFullWide src={data.media.img.wide.i6.src} />
      <Gap />
      <BlockHeroTextM headerText={data.other.c.h} paragraphText={data.other.c.p} />
      {Object.entries(data.media.img.squareS).map(([k, v]) => (
        <ImageOneThird key={`${id}-${k}`} src={v.src} />
      ))}
      <Gap />
      <BlockProjectNext data={dataNext.next} />
      <BlockContact />
    </Animate>
  );
};

export default PageGreyGoose;
