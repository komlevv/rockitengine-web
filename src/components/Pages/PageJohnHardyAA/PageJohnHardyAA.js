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
import { data as dataNext } from '../PageAway/data';
import { THEMES } from '../../../contexts/themeContext';
import { useSetTheme } from '../../../hooks/useSetTheme';
import { useAnimateRefs } from '../../../hooks/useAnimateRefs';
import { mapContentWithRefs } from '../../../utils/utils';
import Gap from '../../Gap/Gap';

const content = [
  <BlockProjectMain data={data.main} />,
  <BlockOverview data={data.overview} />,
  <Video controls src={data.media.video[0]} poster={data.media.imgWide[0]} />,
  <GridContainerHalf>
    <HeaderS headerText={data.other.a.h} />
  </GridContainerHalf>,
  <VideoHalfWide
    controls
    loop
    src={data.media.videoVertical[0]}
    poster={data.media.imgVertical[0]}
  />,
  <VideoHalfWide
    controls
    loop
    src={data.media.videoVertical[1]}
    poster={data.media.imgVertical[1]}
  />,
  <GridContainerHalf>
    <Paragraph paragraphText={data.other.a.p} />
  </GridContainerHalf>,
  <GridContainerHalf>
    <Paragraph paragraphText={data.other.b.p} />
  </GridContainerHalf>,
  <VideoHalfWide
    controls
    loop
    src={data.media.videoVertical[2]}
    poster={data.media.imgVertical[2]}
  />,
  <ImageFullWide src={data.media.imgWide[1]} />,
  <Gap />,
  <BlockHeroTextM headerText={data.other.c.h} paragraphText={data.other.c.p} />,
  <Video controls src={data.media.video[1]} poster={data.media.imgWide[2]} />,
  data.media.imgSquare.map((img, i) => <ImageHalfWide key={i} src={img} />),
  <Gap />,
  <BlockHeroTextM headerText={data.other.d.h} paragraphText={data.other.d.p} />,
  data.media.imgSquareS.slice(0, 6).map((img, i) => <ImageOneThird key={1000 + i} src={img} />),
  <ImageTwoThird src={data.media.imgSquareSD[0]} />,
  <ImageOneThird src={data.media.imgSquareS[6]} />,
  <ImageOneThird src={data.media.imgSquareS[7]} />,
  <ImageTwoThird src={data.media.imgSquareSD[1]} />,
  <Gap />,
  <BlockProjectNext data={dataNext.next} />,
  <BlockContact />,
].flat();

const PageJohnHardyAA = () => {
  useSetTheme(THEMES.JOHNHARDY_AA);
  const animateRefs = useAnimateRefs(content.length);
  return <>{mapContentWithRefs(content, animateRefs)}</>;
};

export default PageJohnHardyAA;
