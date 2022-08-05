import s from './ListItem.css';

const ListItem = ({ text, noBorder }) => (
  <div
    className={s.listItem}
    style={
      noBorder
        ? {
            borderTop: '',
          }
        : {
            borderTop: '1px solid grey',
          }
    }
  >
    {text}
  </div>
);

export default ListItem;
