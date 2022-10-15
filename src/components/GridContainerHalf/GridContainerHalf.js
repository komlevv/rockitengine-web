import s from './GridContainerHalf.scss';

const GridContainerHalf = ({ children, animationRef }) => (
  <div ref={animationRef} className={s.gridContainerHalf}>
    {children}
  </div>
);

export default GridContainerHalf;
