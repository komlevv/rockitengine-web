import s from './BlockContainer.scss';

const BlockContainer = ({ children, animationRef }) => (
  <div ref={animationRef} className={s.blockContainer}>
    {children}
  </div>
);

export default BlockContainer;
