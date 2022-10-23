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
import Paragraph from '../../Paragraph/Paragraph';

import { data } from './data';
import { data as dataNext } from '../PageJMUpgrade/data';
import { THEMES } from '../../../contexts/themeContext';
import { useSetTheme } from '../../../hooks/useSetTheme';
import Gap from '../../Gap/Gap';
import Animate from '../../Animate/Animate';

const PageChopard = () => {
  const id = useId();
  useSetTheme(THEMES.CHOPARD);
  return (
    <Animate>
      <BlockProjectMain data={data.main} />
      <BlockOverview data={data.overview} />
      <ImageFullWide metaData={data.media.img.wide.i1} />
      <Gap />
      <BlockHeroTextM headerText={data.other.a.h} paragraphText={data.other.a.p} />
      <ImageHalfWide metaData={data.media.img.square.i1} />
      <ImageHalfWide metaData={data.media.img.square.i2} />
      <Gap />
      <BlockHeroTextM headerText={data.other.b.h} paragraphText={data.other.b.p} />
      <ImageFullWide metaData={data.media.img.wide.i2} />
      <ImageHalfWide metaData={data.media.img.square.i3} />
      <ImageHalfWide metaData={data.media.img.square.i4} />
      <ImageFullWide metaData={data.media.img.wide.i3} />
      <Gap />
      <BlockHeroTextM headerText={data.other.c.h} paragraphText={data.other.c.p} />
      <ImageHalfWide metaData={data.media.img.vertical.i1} />
      <ImageHalfWide metaData={data.media.img.vertical.i2} />
      <ImageHalfWide metaData={data.media.img.square.i5} />
      <GridContainerHalf>
        <Paragraph paragraphText={data.other.d.p} />
      </GridContainerHalf>
      <GridContainerHalf>
        <Paragraph paragraphText={data.other.e.p} />
      </GridContainerHalf>
      <ImageHalfWide metaData={data.media.img.square.i6} />
      <ImageHalfWide metaData={data.media.img.square.i7} />
      <ImageHalfWide metaData={data.media.img.square.i8} />
      <Gap />
      <BlockHeroTextM headerText={data.other.f.h} paragraphText={data.other.f.p} />
      <ImageFullWide metaData={data.media.img.wide.i4} />
      <Gap />
      <BlockHeroTextM headerText={data.other.g.h} paragraphText={data.other.g.p} />
      <ImageFullWide metaData={data.media.img.wide.i5} />
      <Gap />
      <BlockHeroTextM headerText={data.other.h.h} paragraphText={data.other.h.p} />
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

export default PageChopard;
