import React, { createRef, useEffect, useState } from 'react';
import s from './Image.scss';
import Spinner from '../Spinner/Spinner';
import { canUseDOM } from '../../utils/utils';

// Progressive image loading
const Image = ({
  spinner = true,
  loading = 'lazy',
  cls,
  src,
  innerRef,
  containerStyle,
  ...props
}) => {
  const imgRef = createRef();
  const [visible, setVisible] = useState(false);

  const onLoad = () => {
    setVisible(true);
  };

  useEffect(() => {
    if (canUseDOM() && imgRef.current.complete) {
      onLoad();
    }
  }, [imgRef]);

  return (
    <div style={containerStyle} ref={innerRef} className={`${cls.container} ${s.imgGrid}`}>
      {spinner && <Spinner style={!visible ? {} : { display: 'none' }} />}
      <img
        ref={imgRef}
        style={!visible ? {} : { visibility: 'hidden' }}
        // assume thumbnail src is same as src, but with -thumb.jpg suffix
        // todo this is a quick and dirty solution, data flow needs a rework, maybe a global store
        src={`${src.slice(0, -4)}-thumb.jpg`}
        className={`${cls.image} ${s.imgThumbBlur}`}
        alt=""
      />
      <img
        style={!visible ? { visibility: 'hidden' } : {}}
        onLoad={onLoad}
        className={cls.image}
        src={src}
        alt=""
        loading={loading}
        {...props}
      />
    </div>
  );
};
export default Image;
