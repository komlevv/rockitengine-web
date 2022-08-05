import s from './HeaderM.css';

const HeaderM = ({ headerText, innerRef }) => (
  <h3 ref={innerRef} className={s.headerM}>
    {headerText}
  </h3>
);

export default HeaderM;
