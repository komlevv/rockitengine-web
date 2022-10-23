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
import { data as dataNext } from '../PageCartier/data';
import { THEMES } from '../../../contexts/themeContext';
import { useSetTheme } from '../../../hooks/useSetTheme';
import Gap from '../../Gap/Gap';
import Animate from '../../Animate/Animate';

const PageAway = () => {
  const id = useId();
  useSetTheme(THEMES.AWAY);
  return (
    <Animate>
      <BlockProjectMain data={data.main} />
      <BlockOverview data={data.overview} />
      <Video controls src={data.media.video.wide.i1.src} poster={data.media.video.wide.i1.poster} />
      <GridContainerHalf>
        <HeaderS headerText={data.other.a.h} />
      </GridContainerHalf>
      <VideoHalfWide
        controls
        loop
        src={data.media.video.vertical.i1.src}
        poster={data.media.video.vertical.i1.poster}
      />
      <VideoHalfWide
        controls
        loop
        src={data.media.video.vertical.i2.src}
        poster={data.media.video.vertical.i2.poster}
      />
      <GridContainerHalf>
        <Paragraph paragraphText={data.other.a.p} />
      </GridContainerHalf>
      <Video
        controls
        loop
        src={data.media.video.wide.i2.src}
        poster={data.media.video.wide.i2.poster}
      />
      <Gap />
      <BlockHeroTextM headerText={data.other.b.h} paragraphText={data.other.b.p} />
      {Object.entries(data.media.img.vertical).map(([k, v]) => (
        <ImageHalfWide key={`${id}-${k}`} src={v.src} />
      ))}
      <ImageFullWide src={data.media.img.wide.i3.src} />
      <Gap />
      <BlockHeroTextM headerText={data.other.c.h} paragraphText={data.other.c.p} />
      {Object.entries(data.media.img.squareS).map(([k, v]) => (
        <ImageOneThird key={`${id}-${k}`} src={v.src} />
      ))}
      <ImageTwoThird src={data.media.img.squareSD.i1.src} />
      <Gap />
      <BlockProjectNext data={dataNext.next} />
      <BlockContact />
    </Animate>
  );
};

export default PageAway;
