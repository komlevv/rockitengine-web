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
import ListItem from '../../ListItem/ListItem';

import { data } from './data';
import { data as dataNext } from '../PageJohnHardyAA/data';
import { THEMES } from '../../../contexts/themeContext';
import { useSetTheme } from '../../../hooks/useSetTheme';
import { useAnimateRefs } from '../../../hooks/useAnimateRefs';
import { mapContentWithRefs } from '../../../utils/utils';
import Gap from '../../Gap/Gap';

const content = [
  <BlockProjectMain data={data.main} />,
  <BlockOverview data={data.overview} />,
  <ImageFullWide src={data.media.imgWide[0]} />,
  <ImageHalfWide src={data.media.imgVertical[0]} />,
  <GridContainerHalf>
    <HeaderS headerText={data.other.c.h} />
    {data.other.c.items.map((itemText, i) => (
      <ListItem text={itemText} key={i} />
    ))}
  </GridContainerHalf>,
  <GridContainerHalf>
    <Paragraph paragraphText={data.other.a.p} />
  </GridContainerHalf>,
  <ImageHalfWide src={data.media.imgVertical[1]} />,
  <ImageFullWide src={data.media.imgWide[1]} />,
  <Gap />,
  <BlockHeroTextM headerText={data.other.b.h} paragraphText={data.other.b.p} />,
  data.media.imgWide.slice(2, 6).map((img, i) => <ImageFullWide key={i} src={img} />),
  <Gap />,
  <BlockHeroTextM headerText={data.other.d.h} paragraphText={data.other.d.p} />,
  data.media.imgSquareS.slice(0, 6).map((img, i) => <ImageOneThird key={i} src={img} />),
  <ImageTwoThird src={data.media.imgSquareSD[0]} />,
  <ImageOneThird src={data.media.imgSquareS[6]} />,
  <ImageOneThird src={data.media.imgSquareS[7]} />,
  <ImageTwoThird src={data.media.imgSquareSD[1]} />,
  <Gap />,
  <BlockProjectNext data={dataNext.next} />,
  <BlockContact />,
].flat();

const PageSpotifyHulu = () => {
  useSetTheme(THEMES.SPOTIFY_HULU);
  const animateRefs = useAnimateRefs(content.length);
  return <>{mapContentWithRefs(content, animateRefs)}</>;
};

export default PageSpotifyHulu;