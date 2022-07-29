import s from './HeaderM.css';

const HeaderM = ({headerText}) => {
    return (
        <h3 className={s.headerM}>{headerText}</h3>
    )
}

export default HeaderM;