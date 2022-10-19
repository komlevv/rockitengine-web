import React, { createRef, useEffect, useState } from 'react';
import s from './Image.scss';
import Spinner from '../Spinner/Spinner';
import { canUseDOM } from '../../utils/utils';
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
  const [visible, setVisible] = useState(false);

  const onLoad = () => {
    setVisible(true);
  };

  const [imgSrc, setImgSrc] = useState('');
  const handleIntersect = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setImgSrc(src);
        observer.unobserve(entry.target);
      }
    });
  };

  const intersectRef = useIntersectionObserver(handleIntersect, {
    root: null,
    rootMargin: '0px',
    threshold: 0,
  });

  useEffect(() => {
    if (canUseDOM() && imgRef.current.complete) {
      onLoad();
    }
  }, [imgRef]);

  return (
    <div style={containerStyle} ref={animationRef} className={`${cls.container} ${s.imgGrid}`}>
      {spinner && <Spinner style={!visible ? {} : { display: 'none' }} />}
      <img
        ref={imgRef}
        style={!visible ? {} : { visibility: 'hidden' }}
        // assume thumbnail src is same as src and present in the same path, but with -thumb.jpg suffix
        // todo this is a quick and dirty solution, data flow needs a rework, maybe a global store
        src={`${src.slice(0, -4)}-thumb.jpg`}
        className={`${cls.image} ${s.imgThumbBlur}`}
        alt=""
      />
      <img
        ref={intersectRef}
        style={!visible ? { visibility: 'hidden' } : {}}
        onLoad={onLoad}
        className={cls.image}
        src={imgSrc}
        alt=""
        loading={loading}
        {...props}
      />
    </div>
  );
};

export default Image;
