import s from './BlockContainer.scss';

const BlockContainer = ({ children, innerRef }) => (
  <div ref={innerRef} className={s.blockContainer}>
    {children}
  </div>
);

export default BlockContainer;
