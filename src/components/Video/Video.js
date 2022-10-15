import { createRef, useEffect, useState } from 'react';
import s from './Video.scss';
import Image from '../Image/Image';
import Spinner from '../Spinner/Spinner';
import { canUseDOM } from '../../utils/utils';

const Video = ({
  src,
  poster,
  loop,
  muted,
  controls,
  autoplay,
  animationRef = createRef(),
  containerCls,
}) => {
  const videoRef = createRef();
  const [visible, setVisible] = useState(true);
  const handleLoadedMetadata = () => {
    setVisible(false);
  };

  useEffect(() => {
    const instance = videoRef.current;
    // tbd, see https://github.com/facebook/react/issues/10389
    if (muted) instance.setAttribute('muted', '');
    instance.addEventListener('loadedmetadata', handleLoadedMetadata);
    return () => {
      instance.removeEventListener('loadedmetadata', handleLoadedMetadata);
    };
  }, [videoRef, muted]);

  useEffect(() => {
    if (canUseDOM() && videoRef.current.readyState >= 1) handleLoadedMetadata();
  }, [videoRef]);

  return (
    <div ref={animationRef} className={containerCls || s.videoContainer}>
      <Spinner style={visible ? {} : { display: 'none' }} />
      <Image
        spinner={false}
        src={poster}
        cls={s}
        containerStyle={visible ? {} : { visibility: 'hidden' }}
      />
      <video
        ref={videoRef}
        style={visible ? { display: 'none' } : {}}
        className={s.video}
        // todo: setting poster here makes poster image load twice on clients with disabled cache
        poster={poster}
        preload="metadata"
        controls={controls}
        loop={loop}
        muted={muted}
        autoPlay={autoplay}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Video;
