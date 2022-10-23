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
import HeaderS from '../../HeaderS/HeaderS';
import Paragraph from '../../Paragraph/Paragraph';
import Video from '../../Video/Video';
import VideoHalfWide from '../../VideoHalfWide/VideoHalfWide';

import { data } from './data';
import { data as dataNext } from '../PageSpotifyHulu/data';
import { THEMES } from '../../../contexts/themeContext';
import { useSetTheme } from '../../../hooks/useSetTheme';
import Gap from '../../Gap/Gap';
import Animate from '../../Animate/Animate';

const PageJohnHardyJM = () => {
  const id = useId();
  useSetTheme(THEMES.JOHNHARDY_JM);
  return (
    <Animate>
      <BlockProjectMain data={data.main} />
      <BlockOverview data={data.overview} />
      <Video controls metaData={data.media.video.wide.i1} />
      <GridContainerHalf>
        <HeaderS headerText={data.other.a.h} />
      </GridContainerHalf>
      <VideoHalfWide controls muted loop metaData={data.media.video.vertical.i1} />
      <VideoHalfWide controls muted loop metaData={data.media.video.vertical.i2} />
      <GridContainerHalf>
        <Paragraph paragraphText={data.other.a.p} />
      </GridContainerHalf>
      <GridContainerHalf>
        <Paragraph paragraphText={data.other.b.p} />
      </GridContainerHalf>
      <VideoHalfWide controls muted loop metaData={data.media.video.vertical.i3} />
      <ImageFullWide metaData={data.media.img.wide.i2} />
      <Gap />
      <BlockHeroTextM headerText={data.other.e.h} paragraphText={data.other.e.p} />
      <Video controls metaData={data.media.video.wide.i3} />
      <GridContainerHalf>
        <HeaderS headerText={data.other.f.h} />
      </GridContainerHalf>
      <VideoHalfWide controls muted loop metaData={data.media.video.vertical.i4} />
      <VideoHalfWide controls muted loop metaData={data.media.video.vertical.i5} />
      <GridContainerHalf>
        <Paragraph paragraphText={data.other.f.p} />
      </GridContainerHalf>
      <GridContainerHalf>
        <Paragraph paragraphText={data.other.g.p} />
      </GridContainerHalf>
      <VideoHalfWide controls muted loop metaData={data.media.video.vertical.i6} />
      <Gap />
      <BlockHeroTextM headerText={data.other.c.h} paragraphText={data.other.c.p} />
      <Video controls loop metaData={data.media.video.wide.i3} />
      {Object.entries(data.media.img.square).map(([k, v]) => (
        <ImageHalfWide key={`${id}-${k}`} metaData={v} />
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

export default PageJohnHardyJM;
