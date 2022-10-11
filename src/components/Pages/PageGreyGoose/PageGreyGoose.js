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

import { data } from './data';
import { data as dataNext } from '../PageEquinox/data';
import { THEMES } from '../../../contexts/themeContext';
import { useSetTheme } from '../../../hooks/useSetTheme';
import { useAnimateRefs } from '../../../hooks/useAnimateRefs';
import { mapContentWithRefs, uuid } from '../../../utils/utils';
import Gap from '../../Gap/Gap';

const content = [
  <BlockProjectMain data={data.main} />,
  <BlockOverview data={data.overview} />,
  <ImageFullWide src={data.media.imgWide[0]} />,
  <Gap />,
  <BlockHeroTextM headerText={data.other.a.h} paragraphText={data.other.a.p} />,
  <ImageFullWide src={data.media.imgWide[1]} />,
  <GridContainerHalf>
    <HeaderS headerText={data.other.d.h} />
    {data.other.d.items.map((itemText) => (
      <ListItem text={itemText} key={uuid()} />
    ))}
  </GridContainerHalf>,
  <ImageHalfWide src={data.media.imgWide[2]} />,
  <ImageHalfWide src={data.media.imgSquare[0]} />,
  <ImageHalfWide src={data.media.imgSquare[1]} />,
  <Gap />,
  <BlockHeroTextM headerText={data.other.b.h} paragraphText={data.other.b.p} />,
  <ImageFullWide src={data.media.imgWide[3]} />,
  <ImageHalfWide src={data.media.imgVertical[0]} />,
  <ImageHalfWide src={data.media.imgVertical[1]} />,
  <ImageFullWide src={data.media.imgWide[4]} />,
  <ImageHalfWide src={data.media.imgVertical[2]} />,
  <ImageHalfWide src={data.media.imgVertical[3]} />,
  <ImageFullWide src={data.media.imgWide[5]} />,
  <Gap />,
  <BlockHeroTextM headerText={data.other.c.h} paragraphText={data.other.c.p} />,
  data.media.imgSquareS.map((img) => <ImageOneThird key={uuid()} src={img} />),
  <Gap />,
  <BlockProjectNext data={dataNext.next} />,
  <BlockContact />,
].flat();

const PageGreyGoose = () => {
  useSetTheme(THEMES.GREYGOOSE);
  const animateRefs = useAnimateRefs(20);
  return <>{mapContentWithRefs(content, animateRefs)}</>;
};

export default PageGreyGoose;
