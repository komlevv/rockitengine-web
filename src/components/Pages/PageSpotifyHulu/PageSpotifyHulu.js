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
import ImageTwoThird from '../../ImageTwoThird/ImageTwoThird';
import Paragraph from '../../Paragraph/Paragraph';

import { data } from './data';
import { data as dataNext } from '../PageJohnHardyAA/data';
import { THEMES } from '../../../contexts/themeContext';
import { useSetTheme } from '../../../hooks/useSetTheme';
import Gap from '../../Gap/Gap';
import Animate from '../../Animate/Animate';
import ListHalfWithHeader from '../../ListHalfWithHeader/ListHalfWithHeader';

const PageSpotifyHulu = () => {
  const id = useId();
  useSetTheme(THEMES.SPOTIFY_HULU);
  return (
    <Animate>
      <BlockProjectMain data={data.main} />
      <BlockOverview data={data.overview} />
      <ImageFullWide metaData={data.media.img.wide.i1} />
      <ImageHalfWide metaData={data.media.img.vertical.i1} />
      <ListHalfWithHeader h={data.other.c.h} items={data.other.c.items} />
      <GridContainerHalf>
        <Paragraph paragraphText={data.other.a.p} />
      </GridContainerHalf>
      <ImageHalfWide metaData={data.media.img.vertical.i2} />
      <ImageFullWide metaData={data.media.img.wide.i2} />
      <Gap />
      <BlockHeroTextM headerText={data.other.b.h} paragraphText={data.other.b.p} />
      {Object.entries(data.media.img.wide)
        .slice(2, 6)
        .map(([k, v]) => (
          <ImageFullWide key={`${id}-${k}`} metaData={v} />
        ))}
      <Gap />
      <BlockHeroTextM headerText={data.other.d.h} paragraphText={data.other.d.p} />
      {Object.entries(data.media.img.squareS)
        .slice(0, 6)
        .map(([k, v]) => (
          <ImageOneThird key={`${id}-${k}`} metaData={v} />
        ))}
      <ImageTwoThird metaData={data.media.img.squareSD.i1} />
      <ImageOneThird metaData={data.media.img.squareS.i7} />
      <ImageOneThird metaData={data.media.img.squareS.i8} />
      <ImageTwoThird metaData={data.media.img.squareSD.i2} />
      <Gap />
      <BlockProjectNext data={dataNext.next} />
      <BlockContact />
    </Animate>
  );
};

export default PageSpotifyHulu;
