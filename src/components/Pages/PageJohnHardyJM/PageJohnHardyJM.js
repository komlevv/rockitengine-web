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
import { data as dataNext } from '../PageSpotifyHulu/data';
import { THEMES } from '../../../contexts/themeContext';
import { useSetTheme } from '../../../hooks/useSetTheme';
import Gap from '../../Gap/Gap';
import Animate from '../../Animate/Animate';

const PageJohnHardyJM = () => {
  const id = useId();
  useSetTheme(THEMES.JOHNHARDY_JM);
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
        muted
        loop
        src={data.media.videoVertical[0]}
        poster={data.media.imgVertical[0]}
      />
      <VideoHalfWide
        controls
        muted
        loop
        src={data.media.videoVertical[1]}
        poster={data.media.imgVertical[1]}
      />
      <GridContainerHalf>
        <Paragraph paragraphText={data.other.a.p} />
      </GridContainerHalf>
      <GridContainerHalf>
        <Paragraph paragraphText={data.other.b.p} />
      </GridContainerHalf>
      <VideoHalfWide
        controls
        muted
        loop
        src={data.media.videoVertical[2]}
        poster={data.media.imgVertical[2]}
      />
      <ImageFullWide src={data.media.imgWide[1]} />
      <Gap />
      <BlockHeroTextM headerText={data.other.e.h} paragraphText={data.other.e.p} />
      <Video controls src={data.media.video[2]} poster={data.media.imgWide[3]} />
      <GridContainerHalf>
        <HeaderS headerText={data.other.f.h} />
      </GridContainerHalf>
      <VideoHalfWide
        controls
        muted
        loop
        src={data.media.videoVertical[3]}
        poster={data.media.imgVertical[3]}
      />
      <VideoHalfWide
        controls
        muted
        loop
        src={data.media.videoVertical[4]}
        poster={data.media.imgVertical[4]}
      />
      <GridContainerHalf>
        <Paragraph paragraphText={data.other.f.p} />
      </GridContainerHalf>
      <GridContainerHalf>
        <Paragraph paragraphText={data.other.g.p} />
      </GridContainerHalf>
      <VideoHalfWide
        controls
        muted
        loop
        src={data.media.videoVertical[5]}
        poster={data.media.imgVertical[5]}
      />
      <Gap />
      <BlockHeroTextM headerText={data.other.c.h} paragraphText={data.other.c.p} />
      <Video controls loop src={data.media.video[1]} poster={data.media.imgWide[2]} />
      {data.media.imgSquare.map((img, i) => (
        <ImageHalfWide key={`${id}-${i}`} src={img} />
      ))}
      <Gap />
      <BlockHeroTextM headerText={data.other.d.h} paragraphText={data.other.d.p} />
      {data.media.imgSquareS.slice(0, 6).map((img, i) => (
        <ImageOneThird key={`${id}-${i}`} src={img} />
      ))}
      <ImageTwoThird src={data.media.imgSquareSD[0]} />
      <ImageOneThird src={data.media.imgSquareS[6]} />
      <ImageOneThird src={data.media.imgSquareS[7]} />
      <ImageTwoThird src={data.media.imgSquareSD[1]} />
      <Gap />
      <BlockProjectNext data={dataNext.next} />
      <BlockContact />
    </Animate>
  );
};

export default PageJohnHardyJM;
