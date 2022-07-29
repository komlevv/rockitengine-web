import s from './BlockContainer.css'

const BlockContainer = ({children, innerRef}) =>(
    <div ref={innerRef} className={s.blockContainer}>
        {children}
    </div>
);

export default BlockContainer;