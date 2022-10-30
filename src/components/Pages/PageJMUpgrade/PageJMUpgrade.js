import { useId } from 'react';
import BlockProjectMain from '../../BlockProjectMain/BlockProjectMain';
import BlockOverview from '../../BlockOverview/BlockOverview';
import BlockProjectNext from '../../BlockProjectNext/BlockProjectNext';
import BlockContact from '../../BlockContact/BlockContact';
import BlockHeroTextM from '../../BlockHeroTextM/BlockHeroTextM';
import ImageFullWide from '../../ImageFullWide/ImageFullWide';
import ImageHalfWide from '../../ImageHalfWide/ImageHalfWide';
import ImageOneThird from '../../ImageOneThird/ImageOneThird';
import Video from '../../Video/Video';

import { data } from './data';
import { data as dataNext } from '../PageJohnHardyJM/data';
import { THEMES } from '../../../contexts/themeContext';
import { useSetTheme } from '../../../hooks/useSetTheme';
import Gap from '../../Gap/Gap';
import Animate from '../../Animate/Animate';
import ListHalfWithHeader from '../../ListHalfWithHeader/ListHalfWithHeader';

const PageJMUpgrade = () => {
  const id = useId();
  useSetTheme(THEMES.JM_UPGRADE);
  return (
    <Animate>
      <BlockProjectMain data={data.main} />
      <BlockOverview data={data.overview} />
      <Video controls muted loop metaData={data.media.video.wide.i1} />
      <Gap />
      <BlockHeroTextM headerText={data.other.a.h} paragraphText={data.other.a.p} />
      <Video controls muted loop metaData={data.media.video.wide.i2} />
      <ImageHalfWide metaData={data.media.img.square.i1} />
      <ImageHalfWide metaData={data.media.img.square.i2} />
      <Gap />
      <BlockHeroTextM headerText={data.other.b.h} paragraphText={data.other.b.p} />
      <Video controls muted loop metaData={data.media.video.wide.i3} />
      <ListHalfWithHeader h={data.other.c.h} items={data.other.c.items} />
      <ImageHalfWide metaData={data.media.img.vertical.i1} />
      <Gap />
      <BlockHeroTextM headerText={data.other.d.h} paragraphText={data.other.d.p} />
      <Video controls muted loop metaData={data.media.video.wide.i4} />
      {Object.entries(data.media.img.square)
        .slice(2)
        .map(([k, v]) => (
          <ImageHalfWide metaData={v} key={`${id}-${k}`} />
        ))}
      <Gap />
      <BlockHeroTextM headerText={data.other.e.h} paragraphText={data.other.e.p} />
      <Video controls muted loop metaData={data.media.video.wide.i5} />
      {Object.entries(data.media.img.squareS).map(([k, v]) => (
        <ImageOneThird metaData={v} key={`${id}-${k}`} />
      ))}
      <Gap />
      <BlockHeroTextM headerText={data.other.f.h} paragraphText={data.other.f.p} />
      <ImageFullWide metaData={data.media.img.wide.i6} />
      <Gap />
      <BlockProjectNext data={dataNext.next} />
      <BlockContact />
    </Animate>
  );
};

export default PageJMUpgrade;
