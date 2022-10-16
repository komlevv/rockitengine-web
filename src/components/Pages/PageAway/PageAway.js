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
      <Video controls src={data.media.video[0]} poster={data.media.imgWide[0]} />
      <GridContainerHalf>
        <HeaderS headerText={data.other.a.h} />
      </GridContainerHalf>
      <VideoHalfWide
        controls
        loop
        src={data.media.videoVertical[0]}
        poster={data.media.imgVertical[0]}
      />
      <VideoHalfWide
        controls
        loop
        src={data.media.videoVertical[1]}
        poster={data.media.imgVertical[1]}
      />
      <GridContainerHalf>
        <Paragraph paragraphText={data.other.a.p} />
      </GridContainerHalf>
      <Video controls loop src={data.media.video[1]} poster={data.media.imgWide[1]} />
      <Gap />
      <BlockHeroTextM headerText={data.other.b.h} paragraphText={data.other.b.p} />
      {data.media.imgVertical.slice(2).map((img, i) => (
        <ImageHalfWide key={`${id}-${i}`} src={img} />
      ))}
      <ImageFullWide src={data.media.imgWide[2]} />
      <Gap />
      <BlockHeroTextM headerText={data.other.c.h} paragraphText={data.other.c.p} />
      {data.media.imgSquareS.map((img, i) => (
        <ImageOneThird key={`${id}-${i}`} src={img} />
      ))}
      <ImageTwoThird src={data.media.imgSquareSD[0]} />
      <Gap />
      <BlockProjectNext data={dataNext.next} />
      <BlockContact />
    </Animate>
  );
};

export default PageAway;
