import BlockProjectMain from '../../BlockProjectMain/BlockProjectMain';
import BlockOverview from '../../BlockOverview/BlockOverview';
import BlockProjectNext from '../../BlockProjectNext/BlockProjectNext';
import BlockContact from '../../BlockContact/BlockContact';
import BlockHeroTextM from '../../BlockHeroTextM/BlockHeroTextM';
import GridContainerHalf from '../../GridContainerHalf/GridContainerHalf';
import HeaderS from '../../HeaderS/HeaderS';
import Paragraph from '../../Paragraph/Paragraph';
import Video from '../../Video/Video';

import { data } from './data';
import { data as dataNext } from '../PageGreyGoose/data';
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
  <GridContainerHalf>
    <Video controls loop src={data.media.videoSquare[0]} poster={data.media.imgSquare[0]} />
  </GridContainerHalf>,
  <GridContainerHalf>
    <Video controls loop src={data.media.videoSquare[1]} poster={data.media.imgSquare[1]} />
  </GridContainerHalf>,
  <GridContainerHalf>
    <Paragraph paragraphText={data.other.a.p} />
  </GridContainerHalf>,
  <GridContainerHalf>
    <Video controls loop src={data.media.videoSquare[2]} poster={data.media.imgSquare[2]} />
  </GridContainerHalf>,
  <GridContainerHalf>
    <Video controls loop src={data.media.videoSquare[3]} poster={data.media.imgSquare[3]} />
  </GridContainerHalf>,
  <Gap />,
  <BlockHeroTextM headerText={data.other.b.h} paragraphText={data.other.b.p} />,
  <Video controls loop src={data.media.video[1]} poster={data.media.imgWide[1]} />,
  <Gap />,
  <BlockProjectNext data={dataNext.next} />,
  <BlockContact />,
].flat();

const PageCartier = () => {
  useSetTheme(THEMES.CARTIER);
  const animateRefs = useAnimateRefs(content.length);
  return <>{mapContentWithRefs(content, animateRefs)}</>;
};

export default PageCartier;
