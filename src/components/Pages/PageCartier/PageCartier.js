import BlockProjectMain from '../../BlockProjectMain/BlockProjectMain';
import BlockOverview from '../../BlockOverview/BlockOverview';
import BlockProjectNext from '../../BlockProjectNext/BlockProjectNext';
import BlockContact from '../../BlockContact/BlockContact';
import BlockHeroTextM from '../../BlockHeroTextM/BlockHeroTextM';
import GridContainerHalf from '../../GridContainerHalf/GridContainerHalf';
import HeaderS from '../../HeaderS/HeaderS';
import Paragraph from '../../Paragraph/Paragraph';
import Video from '../../Video/Video';
import VideoHalfWide from '../../VideoHalfWide/VideoHalfWide';

import { data } from './data';
import { data as dataNext } from '../PageGreyGoose/data';
import { THEMES } from '../../../contexts/themeContext';
import { useSetTheme } from '../../../hooks/useSetTheme';
import Gap from '../../Gap/Gap';
import Animate from '../../Animate/Animate';

const PageCartier = () => {
  useSetTheme(THEMES.CARTIER);
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
        src={data.media.video.square.i1.src}
        poster={data.media.video.square.i1.poster}
      />
      <VideoHalfWide
        controls
        loop
        src={data.media.video.square.i2.src}
        poster={data.media.video.square.i2.poster}
      />
      <GridContainerHalf>
        <Paragraph paragraphText={data.other.a.p} />
      </GridContainerHalf>
      <VideoHalfWide
        controls
        loop
        src={data.media.video.square.i3.src}
        poster={data.media.video.square.i3.poster}
      />
      <VideoHalfWide
        controls
        loop
        src={data.media.video.square.i4.src}
        poster={data.media.video.square.i4.poster}
      />
      <Gap />
      <BlockHeroTextM headerText={data.other.b.h} paragraphText={data.other.b.p} />
      <Video
        controls
        loop
        src={data.media.video.wide.i2.src}
        poster={data.media.video.wide.i2.poster}
      />
      <Gap />
      <BlockProjectNext data={dataNext.next} />
      <BlockContact />
    </Animate>
  );
};

export default PageCartier;
