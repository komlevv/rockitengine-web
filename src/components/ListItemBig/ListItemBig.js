import { Fragment, useId } from 'react';
import s from './ListItemBig.scss';
import Paragraph from '../Paragraph/Paragraph';
import ListItem from '../ListItem/ListItem';
import HeaderS from '../HeaderS/HeaderS';
import HeaderXS from '../HeaderXS/HeaderXS';
import Divider from '../Divider/Divider';

const ListItemBig = ({ data, animationRef }) => {
  const id = useId();
  return (
    <div ref={animationRef} className={s.listItemBig}>
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
            <Fragment key={`${id}-${i}`}>
              {!data.p && i <= 1 ? (
                // when no paragraph provided top two items render
                // without border
                <ListItem text={el} noBorder />
              ) : (
                <ListItem text={el} />
              )}
              {i % 2 === 0 ? <div className={s.listItemBigSubGap} /> : ''}
            </Fragment>
          ))}
      </div>
    </div>
  );
};

export default ListItemBig;
