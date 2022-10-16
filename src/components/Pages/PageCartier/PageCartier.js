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
      <Video controls src={data.media.video[0]} poster={data.media.imgWide[0]} />
      <GridContainerHalf>
        <HeaderS headerText={data.other.a.h} />
      </GridContainerHalf>
      <VideoHalfWide
        controls
        loop
        src={data.media.videoSquare[0]}
        poster={data.media.imgSquare[0]}
      />
      <VideoHalfWide
        controls
        loop
        src={data.media.videoSquare[1]}
        poster={data.media.imgSquare[1]}
      />
      <GridContainerHalf>
        <Paragraph paragraphText={data.other.a.p} />
      </GridContainerHalf>
      <VideoHalfWide
        controls
        loop
        src={data.media.videoSquare[2]}
        poster={data.media.imgSquare[2]}
      />
      <VideoHalfWide
        controls
        loop
        src={data.media.videoSquare[3]}
        poster={data.media.imgSquare[3]}
      />
      <Gap />
      <BlockHeroTextM headerText={data.other.b.h} paragraphText={data.other.b.p} />
      <Video controls loop src={data.media.video[1]} poster={data.media.imgWide[1]} />
      <Gap />
      <BlockProjectNext data={dataNext.next} />
      <BlockContact />
    </Animate>
  );
};

export default PageCartier;
