import { createRef, useEffect, useState } from 'react';
import s from './Video.scss';
import Image from '../Image/Image';
import Spinner from '../Spinner/Spinner';
import { canUseDOM } from '../../utils/utils';
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
  const [visible, setVisible] = useState(true);
  const handleLoadedMetadata = () => {
    setVisible(false);
  };

  useEffect(() => {
    // tbd, see https://github.com/facebook/react/issues/10389
    if (muted) videoRef.current.setAttribute('muted', '');
  }, [videoRef, muted]);

  useEffect(() => {
    const instance = videoRef.current;
    instance.addEventListener('loadedmetadata', handleLoadedMetadata);
    return () => {
      instance.removeEventListener('loadedmetadata', handleLoadedMetadata);
    };
  }, []);

  useEffect(() => {
    if (canUseDOM() && videoRef.current.readyState >= 1) handleLoadedMetadata();
  }, []);

  const [vidSrc, setVidSrc] = useState('');
  const handleIntersect = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setVidSrc(src);
        const video = entry.target.children[2];
        video.load();
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
        <source src={vidSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Video;
