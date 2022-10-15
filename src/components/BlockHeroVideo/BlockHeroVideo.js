import s from './BlockHeroVideo.scss';
import HeaderXL from '../HeaderXL/HeaderXL';
import Video from '../Video/Video';
import Span from '../Span/Span';
import heroVideo from './heroVideo.mp4';
import heroVideoPoster from './heroVideo.jpg';
import './heroVideo-thumb.jpg';

const data = {
  h: (
    <>
      We help innovative companies develop
      <Span> digital solutions </Span> to their business needs.
    </>
  ),
};

const BlockHeroVideo = ({ animationRef }) => (
  <div ref={animationRef} className={s.blockHeroVideo}>
    <div className={s.heroText}>
      <HeaderXL headerText={data.h} />
    </div>
    <Video loop autoplay muted src={heroVideo} poster={heroVideoPoster} />
  </div>
);

export default BlockHeroVideo;
