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
import ListItem from '../../ListItem/ListItem';
import Video from '../../Video/Video';

import { data } from './data';
import { data as dataNext } from '../PageChopard/data';
import { THEMES } from '../../../contexts/themeContext';
import { useSetTheme } from '../../../hooks/useSetTheme';
import Gap from '../../Gap/Gap';
import Animate from '../../Animate/Animate';

const PageEquinox = () => {
  const id = useId();
  useSetTheme(THEMES.EQUINOX);
  return (
    <Animate>
      <BlockProjectMain data={data.main} />
      <BlockOverview data={data.overview} />
      <ImageFullWide src={data.media.img.wide.i1.src} />
      <ImageHalfWide src={data.media.img.square.i1.src} />
      <GridContainerHalf>
        <HeaderS headerText={data.other.a.h} />
      </GridContainerHalf>
      <GridContainerHalf>
        <Paragraph paragraphText={data.other.a.p} />
      </GridContainerHalf>
      <ImageHalfWide src={data.media.img.square.i2.src} />
      <ImageFullWide src={data.media.img.wide.i2.src} />
      <ImageHalfWide src={data.media.img.vertical.i1.src} />
      <ImageHalfWide src={data.media.img.vertical.i2.src} />
      <Gap />
      <BlockHeroTextM headerText={data.other.b.h} paragraphText={data.other.b.p} />
      <ImageFullWide src={data.media.img.wide.i3.src} />
      <ImageHalfWide src={data.media.img.vertical.i3.src} />
      <GridContainerHalf>
        <HeaderS headerText={data.other.c.h} />
        {data.other.c.items.map((itemText, i) => (
          <ListItem text={itemText} key={`${id}-${i}`} />
        ))}
      </GridContainerHalf>
      <GridContainerHalf>
        <Paragraph paragraphText={data.other.d.p} />
      </GridContainerHalf>
      <ImageHalfWide src={data.media.img.vertical.i4.src} />
      <ImageFullWide src={data.media.img.wide.i4.src} />
      <Gap />
      <BlockHeroTextM headerText={data.other.e.h} paragraphText={data.other.e.p} />
      <Video controls src={data.media.video.wide.i1.src} poster={data.media.video.wide.i1.poster} />
      <Gap />
      <BlockHeroTextM headerText={data.other.f.h} paragraphText={data.other.f.p} />
      {Object.entries(data.media.img.squareS)
        .slice(0, 6)
        .map(([k, v]) => (
          <ImageOneThird key={`${id}-${k}`} src={v.src} />
        ))}
      <ImageTwoThird src={data.media.img.squareSD.i1.src} />
      <ImageOneThird src={data.media.img.squareS.i7.src} />
      <ImageOneThird src={data.media.img.squareS.i8.src} />
      <ImageTwoThird src={data.media.img.squareSD.i2.src} />
      <Gap />
      <BlockProjectNext data={dataNext.next} />
      <BlockContact />
    </Animate>
  );
};

export default PageEquinox;
