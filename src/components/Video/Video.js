import { createRef, useEffect, useState } from 'react';
import s from './Video.scss';
import Image from '../Image/Image';
import Spinner from '../Spinner/Spinner';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

// todo: this is a Work in Progress
const IconPlay = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14.3059 16.5191">
    <polygon fill="currentColor" points="14.306 8.26 0 0 0 16.519 14.306 8.26" />
  </svg>
);
const IconPause = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 14">
    <g fill="currentColor">
      <rect width="3" height="14" />
      <rect x="7" width="3" height="14" />
    </g>
  </svg>
);

const PlayButton = ({ onClick, text, cls, ...props }) => (
  <button type="button" onClick={onClick} className={`${s.button} ${cls}`} {...props}>
    {text}
  </button>
);

const Video = ({
  metaData,
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
  }, [videoShow]);

  const [buttonIcon, setButtonIcon] = useState(IconPlay);
  const [progressHidden, setProgressHidden] = useState(true);
  const [playing, setPlaying] = useState(false);
  const [cursorClass, setCursorClass] = useState('');
  const [buttonHidden, setButtonHidden] = useState('');

  const handleButtonClick = () => {
    if (!buttonHidden) setButtonHidden(s.hide);
    if (!cursorClass) setCursorClass(s.cursorDefault);
    if (progressHidden) setProgressHidden(false);
    if (!playing) {
      videoRef.current.play();
      setPlaying(true);
      setButtonIcon(IconPause);
    } else {
      videoRef.current.pause();
      setPlaying(false);
      setButtonIcon(IconPlay);
      setButtonHidden('');
    }
  };

  const handleVideoEnter = () => {
    if (videoShow) {
      if (playing && buttonHidden) {
        setButtonHidden('');
        setProgressHidden(false);
      }
    }
  };

  const handleVideoLeave = () => {
    if (videoShow) {
      if (playing) setProgressHidden(true);
      if (playing && !buttonHidden) {
        setButtonHidden(s.hide);
      }
    }
  };

  const [progressValue, setProgressValue] = useState(0);
  const [progressMax, setProgressMax] = useState(0);
  const handleTimeUpdate = () => {
    if (progressMax === 0) setProgressMax(videoRef.current.duration);
    setProgressValue(videoRef.current.currentTime);
  };

  return (
    <div
      onMouseEnter={handleVideoEnter}
      onMouseLeave={handleVideoLeave}
      ref={animationRef}
      className={containerCls || s.videoContainer}
    >
      <Spinner style={thumbnailHidden ? { display: 'none' } : {}} />
      <Image
        metaData={{
          src: metaData.poster,
          thumbnail: metaData.posterThumbnail,
          width: metaData.posterWidth,
          height: metaData.posterHeight,
        }}
        spinner={false}
        src={metaData.poster}
        cls={s}
        containerStyle={thumbnailHidden ? { visibility: 'hidden' } : {}}
      />
      {videoShow && (
        <>
          {controls && (
            <>
              <progress
                className={s.progress}
                value={progressValue}
                max={progressMax}
                style={progressHidden ? { visibility: 'hidden' } : {}}
              />
              <PlayButton
                style={!thumbnailHidden ? { visibility: 'hidden' } : {}}
                onClick={handleButtonClick}
                text={buttonIcon}
                cls={buttonHidden}
              />
            </>
          )}

          <video
            ref={videoRef}
            className={`${s.video} ${cursorClass}`}
            poster={metaData.poster}
            preload="metadata"
            onClick={handleButtonClick}
            onLoadedMetadata={handleLoadedMetadata}
            onTimeUpdate={handleTimeUpdate}
            loop={loop}
            muted={muted}
            autoPlay={autoplay}
          >
            <source src={metaData.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </>
      )}
    </div>
  );
};

export default Video;
