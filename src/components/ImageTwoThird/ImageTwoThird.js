import s from './ImageTwoThird.css';

const ImageTwoThird = ({ src, innerRef }) => (
  <img ref={innerRef} className={s.imageTwoThird} src={src} alt="" />
);

export default ImageTwoThird;
