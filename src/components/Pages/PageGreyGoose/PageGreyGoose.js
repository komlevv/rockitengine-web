import { useId } from 'react';
import BlockProjectMain from '../../BlockProjectMain/BlockProjectMain';
import BlockOverview from '../../BlockOverview/BlockOverview';
import BlockProjectNext from '../../BlockProjectNext/BlockProjectNext';
import BlockContact from '../../BlockContact/BlockContact';
import BlockHeroTextM from '../../BlockHeroTextM/BlockHeroTextM';
import ImageFullWide from '../../ImageFullWide/ImageFullWide';
import ImageHalfWide from '../../ImageHalfWide/ImageHalfWide';
import ImageOneThird from '../../ImageOneThird/ImageOneThird';

import { data } from './data';
import { data as dataNext } from '../PageEquinox/data';
import { THEMES } from '../../../contexts/themeContext';
import { useSetTheme } from '../../../hooks/useSetTheme';
import Gap from '../../Gap/Gap';
import Animate from '../../Animate/Animate';
import ListHalfWithHeader from '../../ListHalfWithHeader/ListHalfWithHeader';

const PageGreyGoose = () => {
  const id = useId();
  useSetTheme(THEMES.GREYGOOSE);
  return (
    <Animate>
      <BlockProjectMain data={data.main} />
      <BlockOverview data={data.overview} />
      <ImageFullWide metaData={data.media.img.wide.i1} />
      <Gap />
      <BlockHeroTextM headerText={data.other.a.h} paragraphText={data.other.a.p} />
      <ImageFullWide metaData={data.media.img.wide.i2} />
      <ListHalfWithHeader h={data.other.d.h} items={data.other.d.items} />
      <ImageHalfWide metaData={data.media.img.wide.i3} />
      <ImageHalfWide metaData={data.media.img.square.i1} />
      <ImageHalfWide metaData={data.media.img.square.i2} />
      <Gap />
      <BlockHeroTextM headerText={data.other.b.h} paragraphText={data.other.b.p} />
      <ImageFullWide metaData={data.media.img.wide.i4} />
      <ImageHalfWide metaData={data.media.img.vertical.i1} />
      <ImageHalfWide metaData={data.media.img.vertical.i2} />
      <ImageFullWide metaData={data.media.img.wide.i5} />
      <ImageHalfWide metaData={data.media.img.vertical.i3} />
      <ImageHalfWide metaData={data.media.img.vertical.i4} />
      <ImageFullWide metaData={data.media.img.wide.i6} />
      <Gap />
      <BlockHeroTextM headerText={data.other.c.h} paragraphText={data.other.c.p} />
      {Object.entries(data.media.img.squareS).map(([k, v]) => (
        <ImageOneThird key={`${id}-${k}`} metaData={v} />
      ))}
      <Gap />
      <BlockProjectNext data={dataNext.next} />
      <BlockContact />
    </Animate>
  );
};

export default PageGreyGoose;
