import s from './BlockHeroVideo.scss';
import HeaderXL from '../HeaderXL/HeaderXL';
import Video from '../Video/Video';
import Span from '../Span/Span';
import { URL_MEDIA } from '../App/ROUTES';

const data = {
  h: (
    <>
      We help innovative companies develop
      <Span> digital solutions </Span> to their business needs.
    </>
  ),
  video: {
    wide: {
      i1: {
        src: `${URL_MEDIA}/heroVideo.mp4`,
        width: 1360,
        height: 460,
        poster: `${URL_MEDIA}/heroVideo.jpg`,
        posterThumbnail: `${URL_MEDIA}/heroVideo-thumb.jpg`,
        posterWidth: 1360,
        posterHeight: 460,
      },
    },
  },
};

const BlockHeroVideo = ({ animationRef }) => (
  <div ref={animationRef} className={s.blockHeroVideo}>
    <div className={s.heroText}>
      <HeaderXL headerText={data.h} />
    </div>
    <Video loop autoplay muted metaData={data.video.wide.i1} />
  </div>
);

export default BlockHeroVideo;
