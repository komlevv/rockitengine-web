import s from './HeaderM.scss';

const HeaderM = ({ headerText, animationRef }) => (
  <h3 ref={animationRef} className={s.headerM}>
    {headerText}
  </h3>
);

export default HeaderM;
