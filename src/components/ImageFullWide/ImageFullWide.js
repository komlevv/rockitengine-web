import s from './ImageFullWide.css';

const ImageFullWide = ({ src, innerRef }) => (
  <img ref={innerRef} className={s.imageFullWide} src={src} alt="" />
);

export default ImageFullWide;
