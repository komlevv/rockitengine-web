import s from './ImageOneThird.css';

const ImageOneThird = ({ src, innerRef }) => (
  <img ref={innerRef} className={s.imageOneThird} src={src} alt="" />
);

export default ImageOneThird;
