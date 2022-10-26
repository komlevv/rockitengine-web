import s from './GridContainerHalf.scss';

const GridContainerHalf = ({ children, animationRef, style }) => (
  <div ref={animationRef} className={s.gridContainerHalf} style={style}>
    {children}
  </div>
);

export default GridContainerHalf;
