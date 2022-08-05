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
import Video from '../../Video/Video';

import { data } from './data';
import { data as dataNext } from '../PageJohnHardyJM/data';
import { THEMES } from '../../../contexts/themeContext';
import { useSetTheme } from '../../../hooks/useSetTheme';
import { useAnimateRefs } from '../../../hooks/useAnimateRefs';
import { mapContentWithRefs } from '../../../utils/utils';
import Gap from '../../Gap/Gap';

const content = [
  <BlockProjectMain data={data.main} />,
  <BlockOverview data={data.overview} />,
  <Video autoplay muted loop src={data.media.video[0]} poster={data.media.imgWide[0]} />,
  <Gap />,
  <BlockHeroTextM headerText={data.other.a.h} paragraphText={data.other.a.p} />,
  <Video controls muted loop src={data.media.video[1]} poster={data.media.imgWide[1]} />,
  <ImageHalfWide src={data.media.imgSquare[0]} />,
  <ImageHalfWide src={data.media.imgSquare[1]} />,
  <Gap />,
  <BlockHeroTextM headerText={data.other.b.h} paragraphText={data.other.b.p} />,
  <Video controls muted loop src={data.media.video[2]} poster={data.media.imgWide[2]} />,
  <GridContainerHalf>
    <HeaderS headerText={data.other.c.h} />
    {data.other.c.items.map((itemText, i) => (
      <ListItem text={itemText} key={i} />
    ))}
  </GridContainerHalf>,
  <ImageHalfWide src={data.media.imgVertical[0]} />,
  <Gap />,
  <BlockHeroTextM headerText={data.other.d.h} paragraphText={data.other.d.p} />,
  <Video controls muted loop src={data.media.video[3]} poster={data.media.imgWide[3]} />,
  data.media.imgSquare.slice(2).map((imgSrc, i) => <ImageHalfWide src={imgSrc} key={i} />),
  <Gap />,
  <BlockHeroTextM headerText={data.other.e.h} paragraphText={data.other.e.p} />,
  <Video controls muted loop src={data.media.video[4]} poster={data.media.imgWide[4]} />,
  data.media.imgSquareS.map((imgSrc, i) => <ImageOneThird src={imgSrc} key={i} />),
  <Gap />,
  <BlockHeroTextM headerText={data.other.f.h} paragraphText={data.other.f.p} />,
  <ImageFullWide src={data.media.imgWide[5]} />,
  <Gap />,
  <BlockProjectNext data={dataNext.next} />,
  <BlockContact />,
].flat();

const PageJMUpgrade = () => {
  useSetTheme(THEMES.JM_UPGRADE);
  const animateRefs = useAnimateRefs(content.length);
  return <>{mapContentWithRefs(content, animateRefs)}</>;
};

export default PageJMUpgrade;
