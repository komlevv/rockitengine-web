import React, { createRef, useState } from 'react';
import s from './Image.scss';
import Spinner from '../Spinner/Spinner';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

const Image = ({
  spinner = true,
  loading = 'lazy',
  cls,
  src,
  animationRef,
  containerStyle,
  ...props
}) => {
  const imgRef = createRef();
  const [thumbnailHidden, setThumbnailHidden] = useState(false);

  const onLoad = () => {
    setThumbnailHidden(true);
  };

  const [imageShow, setImageShow] = useState(false);
  const handleIntersect = (entries, observer) => {
    entries.forEach(async (entry) => {
      if (entry.isIntersecting) {
        setImageShow(true);
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
    imgRef
  );

  return (
    <div style={containerStyle} ref={animationRef} className={`${cls.container} ${s.imgGrid}`}>
      {spinner && <Spinner style={thumbnailHidden ? { display: 'none' } : {}} />}
      <img
        ref={imgRef}
        style={thumbnailHidden ? { visibility: 'hidden' } : {}}
        // assume thumbnail src is same as src and present in the same path, but with -thumb.jpg suffix
        // todo this is a quick and dirty solution, data flow needs a rework, maybe a global store
        src={`${src.slice(0, -4)}-thumb.jpg`}
        className={`${cls.image} ${s.imgThumbBlur}`}
        alt=""
      />
      {imageShow && (
        <img onLoad={onLoad} className={cls.image} src={src} alt="" loading={loading} {...props} />
      )}
    </div>
  );
};

export default Image;
