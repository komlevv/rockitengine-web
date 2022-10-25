import { createRef, useEffect, useId, useRef, useState } from 'react';
import s from './Video.scss';
import Image from '../Image/Image';
import Spinner from '../Spinner/Spinner';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { getExtension } from '../../utils/utils';

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

const ButtonPlay = ({ onClick, text, cls, ...props }) => (
  <button type="button" onClick={onClick} className={`${s.button} ${cls}`} {...props}>
    {text}
  </button>
);

const displayNone = { display: 'none' };

const Video = ({
  metaData,
  loop,
  muted,
  controls,
  autoplay,
  animationRef = createRef(),
  containerCls,
}) => {
  const id = useId();
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
  const playing = useRef(false);
  const waiting = useRef(false);

  const [buttonFadeOut, setButtonFadeOut] = useState('');
  const handleButtonClick = () => {
    if (!buttonFadeOut) setButtonFadeOut(s.fadeOut);
    if (progressHidden) setProgressHidden(false);

    if (!playing.current && !waiting.current) {
      // race condition may occur here if 'pause' is called while waiting
      // https://developer.chrome.com/blog/play-request-was-interrupted/
      videoRef.current.play().catch((e) => console.log(e));
      setButtonIcon(IconPause);
    } else if (playing.current || waiting.current) {
      videoRef.current.pause();
      setButtonIcon(IconPlay);
      setButtonFadeOut('');
    }
  };

  const handleVideoEnter = () => {
    if (videoShow) {
      setButtonFadeOut('');
      if (playing.current || waiting.current) setProgressHidden(false);
    }
  };

  const handleVideoLeave = () => {
    if (videoShow) {
      if (playing.current || waiting.current) {
        setButtonFadeOut(s.fadeOut);
        setProgressHidden(true);
      }
    }
  };

  const [progressValue, setProgressValue] = useState(0);
  const [progressMax, setProgressMax] = useState(0);
  const handleTimeUpdate = () => {
    if (!progressMax) setProgressMax(videoRef.current.duration);
    setProgressValue(videoRef.current.currentTime);
  };

  const [spinnerStyle, setSpinnerStyle] = useState(displayNone);
  const handleWaiting = () => {
    playing.current = false;
    waiting.current = true;
    setSpinnerStyle({ display: 'inline' });
  };

  const handlePlaying = () => {
    playing.current = true;
    waiting.current = false;
    setSpinnerStyle(displayNone);
  };

  const handlePause = () => {
    playing.current = false;
    waiting.current = false;
    setSpinnerStyle(displayNone);
  };

  return (
    <div
      onMouseEnter={handleVideoEnter}
      onMouseLeave={handleVideoLeave}
      ref={animationRef}
      className={containerCls || s.videoContainer}
    >
      <Spinner style={thumbnailHidden ? spinnerStyle : {}} />
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
          <video
            width={metaData.width}
            height={metaData.height}
            ref={videoRef}
            className={s.video}
            style={{ aspectRatio: `${metaData.width}/${metaData.height}` }}
            poster={metaData.poster}
            preload="metadata"
            onClick={handleButtonClick}
            onLoadedMetadata={handleLoadedMetadata}
            onTimeUpdate={handleTimeUpdate}
            onWaiting={handleWaiting}
            onPlaying={handlePlaying}
            onPause={handlePause}
            loop={loop}
            muted={muted}
            autoPlay={autoplay}
          >
            {Array.isArray(metaData.src) ? (
              metaData.src.map((src, i) => (
                <source key={`${id}-${i}`} src={src} type={`video/${getExtension(src)}`} />
              ))
            ) : (
              <source src={metaData.src} type={`video/${getExtension(metaData.src)}`} />
            )}
            Your browser does not support the video tag.
          </video>
          {controls && (
            <>
              <ButtonPlay
                style={!thumbnailHidden ? { visibility: 'hidden' } : {}}
                text={buttonIcon}
                cls={buttonFadeOut}
              />
              <progress
                className={s.progress}
                value={progressValue}
                max={progressMax}
                style={progressHidden ? { visibility: 'hidden' } : {}}
              />
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Video;
