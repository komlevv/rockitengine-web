import s from './ImageHalfWide.css';

const ImageHalfWide = ({ src, innerRef }) => (
  <img ref={innerRef} className={s.imageHalfWide} src={src} alt="" />
);

export default ImageHalfWide;
