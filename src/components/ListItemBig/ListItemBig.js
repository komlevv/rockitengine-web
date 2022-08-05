import { Fragment } from 'react';
import s from './ListItemBig.css';
import Paragraph from '../Paragraph/Paragraph';
import ListItem from '../ListItem/ListItem';
import HeaderS from '../HeaderS/HeaderS';
import HeaderXS from '../HeaderXS/HeaderXS';
import Divider from '../Divider/Divider';

const ListItemBig = ({ data, innerRef }) => (
  <div ref={innerRef} className={s.listItemBig}>
    <Divider />
    <div className={s.listItemBigNumber}>
      <HeaderXS headerText={data.n} />
    </div>
    <div className={s.listItemBigHeader}>
      <HeaderS headerText={data.h} />
    </div>
    {data.p && <Paragraph paragraphText={data.p} />}
    <div className={s.listItemBigSubBlock}>
      {data.subItems &&
        data.subItems.map((el, i) => (
          <Fragment key={i + 1000}>
            {!data.p && i <= 1 ? (
              // when no paragraph provided top two items render
              // without border
              <ListItem key={i} text={el} noBorder />
            ) : (
              <ListItem key={i} text={el} />
            )}
            {i % 2 === 0 ? <div className={s.listItemBigSubGap} /> : ''}
          </Fragment>
        ))}
    </div>
  </div>
);

export default ListItemBig;
