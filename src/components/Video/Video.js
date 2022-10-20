import { createRef, useEffect, useState } from 'react';
import s from './Video.scss';
import Image from '../Image/Image';
import Spinner from '../Spinner/Spinner';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

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
  const [thumbnailHidden, setThumbnailHidden] = useState(false);
  const handleLoadedMetadata = () => {
    setThumbnailHidden(true);
  };

  const [videoShow, setVideoShow] = useState(false);
  const handleIntersect = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setVideoShow(true);
        observer.unobserve(entry.target);
      }
    });
  };

  useIntersectionObserver(
    handleIntersect,
    {
      root: null,
      rootMargin: '0px',
      threshold: 0,
    },
    animationRef
  );

  useEffect(() => {
    if (muted && videoShow) videoRef.current.setAttribute('muted', '');
  }, [videoRef, videoShow]);

  return (
    <div ref={animationRef} className={containerCls || s.videoContainer}>
      <Spinner style={thumbnailHidden ? { display: 'none' } : {}} />
      <Image
        spinner={false}
        src={poster}
        cls={s}
        containerStyle={thumbnailHidden ? { visibility: 'hidden' } : {}}
      />
      {videoShow && (
        <video
          ref={videoRef}
          className={s.video}
          // todo: setting poster here makes poster image load twice on clients with disabled cache
          poster={poster}
          preload="metadata"
          onLoadedMetadata={handleLoadedMetadata}
          controls={controls}
          loop={loop}
          muted={muted}
          autoPlay={autoplay}
        >
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
};

export default Video;
