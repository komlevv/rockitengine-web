import s from './GridContainerHalf.scss';

const GridContainerHalf = ({ children, innerRef }) => (
  <div ref={innerRef} className={s.gridContainerHalf}>
    {children}
  </div>
);

export default GridContainerHalf;
