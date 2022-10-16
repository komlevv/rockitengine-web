import s from './ListItem.scss';

const ListItem = ({ text, noBorder }) => (
  <div className={`${s.listItem} ${noBorder ? s.borderOff : s.borderOn}`}>{text}</div>
);

export default ListItem;
